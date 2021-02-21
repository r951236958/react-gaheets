import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'

import Header from '../Header'
// import Navbar from '../Navbar'
// import TopBar from '../TopBar'
import TopNav from '../TopNav'
import Footer from '../Footer'
function Layout({ title, children }) {
  return (
    <div>
      <TopNav />
      <div className="bg-cyan-700 dark:bg-gray-800 dark:text-gray100">
        <Container
          component="main"
          maxWidth="lg"
          className="w-full min-h-screen"
        >
          <div className="">
            <Header title={title} />
            {children}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
