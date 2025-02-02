import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This is where you will generate a new sandwich ...</p>

    <Link to="/sandwiches/">Go to the list</Link>
  </Layout>
)

export default IndexPage
