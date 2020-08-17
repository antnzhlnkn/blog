import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const useStyles = makeStyles((theme: Theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const IndexPage: FC = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Hello everyone"
        description="This is my personal blog, which has information about me and my projects in development."
      >
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                component={GatsbyLink}
                to="/about/"
                variant="contained"
                color="primary"
              >
                about
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={GatsbyLink}
                to="/portfolio/"
                variant="contained"
                color="primary"
              >
                portfolio
              </Button>
            </Grid>
          </Grid>
        </div>
      </Hero>
    </Layout>
  )
}

export default IndexPage
