import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { Typography, Theme, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  card: {
    border: '1px #000000 solid',
    borderRadius: 10,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

type PortfolioListItemProps = {
  node: any;
}

const PortfolioListItem: FC<PortfolioListItemProps> = ({ node }: any) => {
  const classes = useStyles()
  return (
    <Link
      component={GatsbyLink}
      to={node.frontmatter.slug}
      className={classes.link}
    >
      <div className={classes.card}>
        <Typography variant="h2" gutterBottom component="h1">
          {node.frontmatter.title}
        </Typography>
        <Typography variant="body1">{node.frontmatter.description}</Typography>
      </div>
    </Link>
  )
}

export default PortfolioListItem
