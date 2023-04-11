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
		Thought.findOne({ _id: req.params.thoughtId }).select('-');
	},
};

// All thoughts by single user? Or of all users?
const getAllThoughts = () => {};

// Get single thought by id
const getSingleThought = () => {};

// This should create a new thought for the DB
const createNewThought = () => {};
// Need a function to add thought to associated user's array of thought id's
const addThoughtToUser = () => {};

const editThoughtById = () => {};

const deleteThoughtById = () => {};

// Reaction functions

const createReaction = () => {};
//Need function to add reaction to reactionId array in thoughts
const addReactionToThought = () => {};

const removeReactionById = () => {};
