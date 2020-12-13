import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SandwichDetailTemplate = ({ id, ...props }) => {
  console.log(id, props)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Sandwich Detail</h1>
      <p>This is a detail view of sandwich #{id} ...</p>

      <Link to="/">Go home</Link>
    </Layout>
  )
}

export default SandwichDetailTemplate
