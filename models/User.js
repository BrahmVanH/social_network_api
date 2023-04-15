const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trimmed: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			// ADD VALIDATION USING REGEX
		},
		thoughtIds: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Thought',
			},
		],
		friendIds: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		toJSON: {
			getters: true,
			virtuals: true,
		},
		id: false,
	}
);

userSchema.virtual('friendCount').get(function () {
	return this.friendIds.length;
});

const User = model('user', userSchema);

module.exports = User;
