const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type FarklePlayer {
    playerName: String!
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
    firstName: String!
    lastName: String!
    email: String!
    password: String!
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
      gameId: ID!
    ) : FarkleGame
    addFarkleScore(
      gameId: ID!
      playerName: String!
      score: Int!
    ) : FarkleGame

    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// users: [User];
