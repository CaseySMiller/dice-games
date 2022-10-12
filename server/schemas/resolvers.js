require('dotenv').config({ path: '../.env' });
const { AuthenticationError } = require("apollo-server-express");
const { User, FarkleGame } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {

    farkleGame: async (parent, { gameName }) => {
      const game = await FarkleGame.findOne( { gameName } ).populate({
        path: "players",
      })
      console.log(game);
      return game;
    },

    //user query not tested yet
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          // path: "orders",
          // populate: { path: 'products' },
        });
        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

  },


  Mutation: {
    addFarkleGame: async (parent, { gameName }) => {
      const newGame = await FarkleGame.create({ gameName });
      return { newGame };
    },

    addFarklePlayer: async (parent, { playerName, gameName }) => {
      const newPlayer = {
        playerName: playerName,
        scores: []
      };
      return FarkleGame.findOneAndUpdate(
        { gameName : gameName },
        { $addToSet: { players: newPlayer } },
        { new: true, runValidators: true }
      );
    },

    addFarkleScore: async (parent, { playerName, gameName, score }) => {
      const updatedGame = await FarkleGame.findOneAndUpdate(
        {gameName : gameName, 'players.playerName': playerName },
        { $push: { 'players.$.scores': score} }
      );
      return updatedGame;
    },

    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
