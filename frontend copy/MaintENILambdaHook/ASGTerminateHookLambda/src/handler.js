'use strict';
var AWS = require('aws-sdk');

exports.handler = async (event, context) => {
	try{
		var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
		const eC2InstanceId = JSON.parse(event.Records[0].Sns.Message).EC2InstanceId;

		const descEnisParams = {
				  Filters: [{
				      Name: 'tag:MaintEniFor',
				      Values: [eC2InstanceId]
				    }]
			};
		const enis = await ec2.describeNetworkInterfaces(descEnisParams).promise();
		console.log('--->>', enis);
		
		var paramsDeleteENi = {
			NetworkInterfaceId: enis.NetworkInterfaces[0].NetworkInterfaceId
		};
		const eniDeleteRes = await ec2.deleteNetworkInterface(paramsDeleteENi).promise();
		console.log("eniDeleteRes", eniDeleteRes)	

		return 1;
	} catch(err) {
		console.log(err)
		return -1;
	}
};
