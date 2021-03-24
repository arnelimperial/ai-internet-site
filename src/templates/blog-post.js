import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
//import Img from "gatsby-image"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { defineCustomElements as deckDeckGoHighLightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighLightElement()

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM DD, YYYY")
      description {
        childMarkdownRemark {
          excerpt(pruneLength: 10000)
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <MDXProvider>
        <SEO title={props.data.contentfulBlogPost.title} description={props.data.contentfulBlogPost.description.childMarkdownRemark.excerpt} />

        <div className="content">
          <h1 className="blog_title">{props.data.contentfulBlogPost.title}</h1>
          <p className="meta">
            Last updated {props.data.contentfulBlogPost.updatedAt}
          </p>
          <article
            className="article"
            dangerouslySetInnerHTML={{
              __html:
                props.data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
          ></article>
        </div>
      </MDXProvider>
    </Layout>
  )
}

export default BlogPost
