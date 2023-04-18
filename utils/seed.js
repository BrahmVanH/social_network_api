const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {
	getUsernames,
	getEmails,
	getRandomThought,
	getRandomReaction,
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('connected');

	await User.deleteMany();

	users = [];
	usernames = getUsernames(20);
	emails = getEmails(20);

	for (i = 0; i < 20; i++) {
		users.push({
			username: usernames[i],
			email: emails[i],
		});
	}

	await User.collection.insertMany(users);

	// await Thought.collection.insertMany(thoughts);

	console.table(users);
});
