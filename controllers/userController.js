const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// User functions
module.exports = {
	getAllUsers(req, res) {
		User.find()
			.then(async (users) => {
				const userObj = {
					users,
				};
				return res.json(userObj);
			})
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	getSingleUser(req, res) {
		User.findOne({ _id: req.params.userId })
			.select('-__v')
			.then(async (user) =>
				!user
					? res.status(404).json({ message: 'No user found with that ID!' })
					: res.json({ user })
			)
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	createUser(req, res) {
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.status(500).json(err));
	},
	deleteUser(req, res) {
		User.findOneAndRemove({ _id: req.params.userId })
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with that ID exists' })
					: Thought.deleteMany({ username: user.username })
			)
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
	updateUser(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with that ID' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
	addFriend(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $push: { friends: req.body.friendId } },
			{ new: true, runValidators: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No user with this ID!' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
	deleteFriend(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $pull: { friends: req.body.friendId } }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: 'No users found with that Id' })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
};
