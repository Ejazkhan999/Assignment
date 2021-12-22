const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
const { Routes } = require('../social/routes');

// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbSetUp = require('../social/db/db.setup');
const userProfileController = require('../social/controllers/user_profile')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dbSetUp();
// app.use(databaseConfig.initializeDB());

app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});
app.use('/' , Routes);
app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});