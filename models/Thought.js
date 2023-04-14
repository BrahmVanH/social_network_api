const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId(),
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			maxlength: 280,
			minlength: 1,
			trimmed: true,
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			maxlength: 280,
			minlength: 1,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		username: {
			type: String,
			required: true,
			ref: 'user',
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

const Thought = model('thought', thoughtSchema);

thoughtSchema.virtual('reationCount').get(function () {
	return this.reactions.length;
});

module.exports = Thought;
