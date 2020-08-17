import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { graphql } from "gatsby"

import Layout from '../layout'
import SEO from '../components/seo'
import PortfolioListItem from '../components/portfolioListItem'
import { Typography, Link } from '@material-ui/core'

const PortfolioPage: FC = ({data: {allMarkdownRemark: { edges }}}: any) => {
  return (
    <Layout container>
      <SEO title="Portfolio" />
      <Typography variant="h2" gutterBottom component="h1">
        Portfolio
      </Typography>
      {
        edges.map((post: any) => (
          <PortfolioListItem
            key={post.node.id}
            node={post.node}
          />
        ))
      }

      <Typography variant="body1">
        <Link component={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Typography>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
export default PortfolioPage
