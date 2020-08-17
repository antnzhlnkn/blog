import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import Layout from '../layout'
import SEO from '../components/seo'
import { Typography, Link } from '@material-ui/core'

const PortfolioPage: FC = () => (
  <Layout container>
    <SEO title="Portfolio" />
    <Typography variant="h2" gutterBottom component="h1">
      Portfolio
    </Typography>

    <Typography variant="body1">Welcome to page 2.</Typography>

    <Typography variant="body1">
      <Link component={GatsbyLink} to="/">
        Go back to the homepage
      </Link>
    </Typography>
  </Layout>
)

export default PortfolioPage
