import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SandwichesPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sandwiches</h1>
    <p>This is a list of sandwiches ...</p>

    <Link to="/">Go home</Link>
  </Layout>
)

export default SandwichesPage
