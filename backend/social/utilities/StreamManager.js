const initProducer = require('./producer');
const { Kafka } = require('kafkajs');
const User_Profile = require('../models/user_profile');
const processMessage = async (kafkaMessage) => {

	//Start working here
	console.log(kafkaMessage);
	const stream = Kafka.Producer.createWriteStream({
		'metadata.broker.list': 'kafka:9092'
	}, {}, {
		topic: 'event_stream'
	});
	
	stream.on('error', (err) => {
		console.error('Error in our kafka stream');
		console.error(err);
	});

	function QueueRandomMessage(){
		const Message = initProducer.messages;
		const success = stream.write(User_Profile.toBuffer(Message));  
		if (success) {
			console.log(`message queued (${JSON.stringify(Message)})`);
		} else {
			console.log('Too many messages in the queue already..');
		}

	}


};

module.exports = { processMessage };

