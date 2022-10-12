const { Schema, model } = require("mongoose");
const farklePlayerSchema = require('./Player');

const farkleGameSchema = new Schema(
    {
        gameName : {
            type : String,
            required : true,
            unique : true,
        },
        startDate: {
            type: Date,
            default: Date.now,
        },
        players : [farklePlayerSchema],
    }

);

const FarkleGame = model('FarkleGame', farkleGameSchema);

module.exports = FarkleGame;