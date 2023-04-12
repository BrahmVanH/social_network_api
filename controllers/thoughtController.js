const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
	getAllThoughts(req, res) {
		Thought.find()
			.then(async (thoughts) => {
				const thoughtObj = {
					thoughs,
				};
				return res.json(thoughtObj);
			})
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	getSingleThought(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.select('-')
			.then(async (thought) =>
				!thought
					? res.status(404).json({ message: 'No thoughts found with that Id!' })
					: res.json({ thought })
			)
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	createThought(req, res) {
		Thought.create({
			thoughtText: req.params.thoughtText,
			username: req.params.username,
		})
			.then(({ _id }) =>
				User.findOneAndUpdate(
					{ _id: req.params.userId },
					{ $push: { thoughts: _id } },
					{ new: true }
				)
			)
			.then((thought) => res.json(thought))
			.catch((err) => res.status(500).json(err));
	},
	updateThought(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((thought) =>
				!thought
					? res.status(404).json({ message: 'No thoughts with that id!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},
	deleteThought(req, res) {
		Thought.findOneAndRemove({ _id: req.params.thoughtId })
			.then((thought) =>
				!thought
					? res.status(404).json({ message: 'No thoughts with that id!' })
					: res.json(thought)
			)
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
	createReaction(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{
				$push: {
					reactions: {
						reactionBody: req.body.reactionBody,
						username: req.body.username,
					},
				},
			},
			{ runValidator: true, new: true }
		)
			.then((thought) =>
				!thought
					? res.status(404).json({ message: 'No thoughts found with that Id!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},
	removeReactionById(req, res) {
		Thought.findOneAndUpdate(
			{ id: req.params.thoughtId },
			{ $pull: { reactions: req.params.reactionId } }
		)
			.then((thought) =>
				!thought
					? res.status(404).json({ message: 'No reaction found with that ID!' })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},
};

// Reaction functions
