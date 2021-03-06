import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>
    <p>Welcome to Projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
