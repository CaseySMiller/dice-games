const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type FarklePlayer {
    playerName: String!
    userId: User
    scores: [Int]
  }

  type FarkleGame {
    _id: ID
    gameName: String!
    startDate: String!
    players: [FarklePlayer]
  }

  type User {
    _id: ID
    userName: String!
    firstName: String
    lastName: String
    email: String
    password: String!
    friends: [User]
    farkleGames: [FarkleGame]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    farkleGame(
      _id: ID!
    ): FarkleGame
  }

  type Mutation {

    addFarkleGame(
      gameName: String!
    ) : FarkleGame
    addFarklePlayer(
      playerName: String!
      userId: String
      gameId: ID!
    ) : FarkleGame
    addFarkleScore(
      gameId: ID!
      playerName: String!
      score: Int!
    ) : FarkleGame

    addUser(
      userName: String!
      firstName: String
      lastName: String
      email: String
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(userName: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// users: [User];
