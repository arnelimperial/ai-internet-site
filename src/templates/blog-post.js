import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
//import Img from "gatsby-image"
import SEO from "../components/seo"
//import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { defineCustomElements as deckDeckGoHighLightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighLightElement()

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM DD, YYYY")
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
         
        <SEO title={props.data.contentfulBlogPost.title} />

        <div className="content">
          <h1 className="blog_title">{props.data.contentfulBlogPost.title}</h1>
          <p className="meta">
            Last updated {props.data.contentfulBlogPost.updatedAt}
          </p>
          <article className="article"
            dangerouslySetInnerHTML={{
              __html: props.data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
          ></article>
        </div>
      </Layout>
   
  )
}

export default BlogPost