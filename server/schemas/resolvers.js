require('dotenv').config({ path: '../.env' });
const { AuthenticationError } = require("apollo-server-express");
const { User, FarkleGame } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //queries not tested yet
    farkleGame: async (parent, args, context) => {
      const game = await FarkleGame.findById(context.farkleGame._id).populate({
        path: "players",
        populate: { path: 'scores' },
      })
    },

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
        name: playerName,
        scores: []
      };
      return FarkleGame.findOneAndUpdate(
        { gameName : gameName },
        { $addToSet: { players: newPlayer } },
        { new: true, runValidators: true }
      );
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
