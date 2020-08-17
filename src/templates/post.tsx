import React, { FC } from 'react'
import { graphql } from "gatsby"
import { Link as GatsbyLink } from 'gatsby'

import Layout from '../layout'
import SEO from '../components/seo'
import { Typography, Link } from '@material-ui/core'

const PostPage: FC = ({data}: any) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout container>
      <SEO title={frontmatter.title}/>
      <Typography variant="body1">{frontmatter.date}</Typography>
      <Typography variant="body1">{frontmatter.title}</Typography>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Typography variant="body1">
        <Link component={GatsbyLink} to="/portfolio">
          Go back to portfolio
        </Link>
      </Typography>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default PostPage
