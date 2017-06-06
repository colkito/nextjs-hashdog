// Packages
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

function Layout({children, title}) {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Next.js for Hashdog"/>

        <title>{title === 'Next.js' ? title : `${title} - Next.js`}</title>
        <link rel="shortcut icon" href="https://cdn.zeit.co/favicon/favicon.ico"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans"/>

        <link rel="stylesheet" href="/static/css/main.css"/>
      </Head>

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Hashdog</a>
          </div>

          <ul className="nav navbar-nav">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/hashflix">
                <a>Hashflix</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: 'Next.js'
}

export default Layout
