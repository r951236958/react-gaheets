import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
    width: '100%',
  },
}))

function Layout({ title, children }) {
  const classes = useStyles()

  return (
    <div>
      <Navbar />

      <div className={classes.root}>
        <Container component="main" maxWidth="lg">
          <Header title={title} />
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
