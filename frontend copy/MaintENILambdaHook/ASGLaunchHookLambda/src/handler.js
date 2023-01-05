'use strict';
var AWS = require('aws-sdk');

exports.handler = async (event, context) => {
	try{
		var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

		const eC2InstanceId = JSON.parse(event.Records[0].Sns.Message).EC2InstanceId
		
		var paramsDescInst = {
			InstanceIds: [
				eC2InstanceId
			]
		  };
		const ec2Desc = await ec2.describeInstances(paramsDescInst).promise();
		const eC2SubnetId = ec2Desc.Reservations[0].Instances[0].SubnetId;
		console.log("eC2SubnetId", eC2SubnetId)

		var paramsCreateENi = {
			Description: "Maintainance ENI for Instance:" + eC2InstanceId, 
			Groups: [ process.env.maintENISG ], 
			SubnetId: eC2SubnetId,
			TagSpecifications: [
				{
				  ResourceType: "network-interface",
				  Tags: [{
					  Key: 'MaintEniFor',
					  Value: eC2InstanceId
					}]
				}
			  ]
		  };
		const eniCreationRes = await ec2.createNetworkInterface(paramsCreateENi).promise();
		const eniId = eniCreationRes.NetworkInterface.NetworkInterfaceId;
		console.log("eniCreationRes", eniCreationRes)

		var paramsAttach = {
			DeviceIndex: 1, 
			InstanceId: eC2InstanceId, 
			NetworkInterfaceId: eniId
		};
		const eniAttachRes = await ec2.attachNetworkInterface(paramsAttach).promise();
		console.log("eniAttachRes", eniAttachRes)

		return 1;
	} catch(err) {
		console.log(err)
		return -1;
	}
};
