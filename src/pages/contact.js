import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to Contact page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
