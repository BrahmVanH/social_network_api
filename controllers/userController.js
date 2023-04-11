const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


const friends = async (userId) => 
    User.aggregate([
        { $match: { _id: ObjectId(userId) } },
        {
            $unwind: '$thoughts',
        },
        {
            $group
        }
    ])

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


const createUser = () => {};

const updateUser = () => {};

const deleteUser = () => {};

// User-friend functions

const addFriend = () => {};

const removeFriend = () => {};

};



