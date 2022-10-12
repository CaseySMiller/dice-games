const { Schema } = require("mongoose");

//subdocument schema for a player in a Game
const farklePlayerSchema = new Schema({
    playerName: {
        type: String,
        required: true,
    },
    scores: [
        {
            type: Number,
        },
    ],
});

module.exports = farklePlayerSchema;