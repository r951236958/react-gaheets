import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    h2: {
      fontWidth: 500,
    },
  },
})

export default function Header({ title }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.h2} variant="h2" gutterBottom>
        {title}
      </Typography>
    </div>
  )
}
