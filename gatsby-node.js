const path = require("path")

exports.createPages = async ({ actions }) => {
  // Generate dynamic routes for sandwiches.
  actions.createPage({
    path: "/sandwich-details/",
    matchPath: "/sandwiches/:id",
    component: path.resolve("src/templates/sandwich.js"),
  })
}
