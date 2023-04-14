const { User, Thought } = require('../models');

module.exports = {
	getAllThoughts(req, res) {
		Thought.find()
			.then(async (thoughts) => {
				const thoughtObj = {
					thoughts,
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
			thoughtText: req.body.thoughtText,
			username: req.body.username,
		})
			.then(({ _id }) =>
				User.findOneAndUpdate(
					{ _id: req.body.userId },
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
			{ _id: req.body.thoughtId },
			{
				$push: {
					reactions: {
						reactionBody: req.body.reactionBody,
						// username: req.body.username,
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
	deleteReaction(req, res) {
		Thought.findOneAndUpdate(
			{ _id: req.body.thoughtId },
			{ $pull: { reactions: { reactionId: req.body.reactionId } } },
			{ new: true }
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
