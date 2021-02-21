import React from 'react'
import DrawerSheet from '../DrawerSheet'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}))

export default function TopBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="default"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <DrawerSheet />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <svg
              width="25"
              height="20"
              viewBox="0 0 256 204"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#00B0FF"
                d="M0 110.848L0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667z"
              />
              <path
                fill="#0081CB"
                d="M96 55.424L192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333z"
              />
              <path
                fill="#00B0FF"
                d="M96 129.322667L96 166.272 160 203.221333 160 166.272z"
              />
              <path
                d="M160 203.221l96-55.424V73.9l-32 18.474v36.95l-64 36.949v36.95zm64-147.797v-36.95L256 0v36.95l-32 18.474z"
                fill="#0081CB"
              />
            </svg>
          </Typography>
          <nav>
            <Link
              component={RouterLink}
              variant="button"
              color="textPrimary"
              to="/"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              variant="button"
              color="textPrimary"
              to="/about"
              className={classes.link}
            >
              About
            </Link>
            <Link
              component={RouterLink}
              variant="button"
              color="textPrimary"
              to="/form"
              className={classes.link}
            >
              Form
            </Link>
          </nav>
          <Button variant="outlined" color="primary" className={classes.link}>
            Log In.
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
