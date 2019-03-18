/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require("node-fetch")
const queryString = require("query-string")
const path = require(`path`)

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // plugin code goes here...
  console.log("Testing my plugin", configOptions)
}


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/pages/accounts/trial.js`)
 createPage({
    path: "newtrial/tr",
    component: blogPostTemplate,
    context: {
      // Add optional context data to be inserted
      // as props into the page component..
      //
      // The context data can also be used as
      // arguments to the page GraphQL query.
      //
      // The page "path" is always available as a GraphQL
      // argument.
    },
 })
}