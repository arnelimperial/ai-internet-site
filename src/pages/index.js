import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"

const IndexPage = () => {
  const latest = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
          edges {
            node {
              id
              title
              slug
              createdAt(formatString: "MMMM DD, YYYY")
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <MDXProvider>
      <Layout>
        <SEO title="Home" />
        <h2 className="draft">This draft ...</h2>
        <p css={{ fontSize: `18px`, color: `#778088` }}><strong>A compilation of insights, builds, start-off and anything under the sun.</strong></p>
        {latest.allContentfulBlogPost.edges.map(edge => {
          return (
            <>
              <h3 css={{ marginBottom: `0`, fontSize: `22px` }}><Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link></h3>
              <p>{edge.node.createdAt}</p>
              <p><strong>{edge.node.description.childMarkdownRemark.excerpt}</strong></p>
             
              <div className="description"
            dangerouslySetInnerHTML={{
              __html: edge.node.description.childMarkdownRemark.html,
            }}
          ></div>
              <hr />
            </>
          )
        })}
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </Layout>

    </MDXProvider>



  )

}

export default IndexPage

