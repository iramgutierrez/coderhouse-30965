const { buildSchema } = require('graphql')


const schema = buildSchema(`
  type News {
    id: ID!,
    title: String,
    author: String,
    createdAt: String
  }

  input NewsInput {
    title: String,
    author: String
  }

  type Query {
    getNews: [News],
    getNewsItem(id: ID!): News
  }

  type Mutation {
    createNewsItem(data: NewsInput): News,
    updateNewsItem(id: ID!, data: NewsInput): News,
    deleteNewsItem(id: ID!): News
  }
`)

module.exports = schema