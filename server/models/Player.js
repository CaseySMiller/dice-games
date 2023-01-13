const { Schema } = require("mongoose");

//subdocument schema for a player in a Game
const farklePlayerSchema = new Schema({
    playerName: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    scores: [
        {
            type: Number,
        },
    ],
});

module.exports = farklePlayerSchema;