import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const IndexPage = () => {
  const latest = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              title
              slug
              createdAt(formatString: "MMMM DD, YYYY")
              description {
                childMdx {
                  body
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className="draft">This draft ...</h2>
      <p css={{ fontSize: `18px`, color: `#778088` }}>
        <strong>
          A compilation of insights, builds, start-off and anything under the
          sun.
        </strong>
      </p>
      {latest.allContentfulBlogPost.edges.map(edge => {
        return (
          <MDXProvider>
            <h3 css={{ marginBottom: `0`, fontSize: `22px` }}>
              <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
            </h3>
            <p>{edge.node.createdAt}</p>

            <div className="description">
              <MDXRenderer>{edge.node.description.childMdx.body}</MDXRenderer>
            </div>
            <hr />
          </MDXProvider>
        )
      })}
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
