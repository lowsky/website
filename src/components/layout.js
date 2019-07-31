/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"
import Navigation from './Navigation';

const Layout = ({ children }) => {
  // todo use this built-in data provider
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        data: dataJson {
            baseColor
        }
        site {
          siteMetadata {
            title
              author
              description
              title
          }
      }
    }
  `);

  return (
    <>
      <header>
        <Navigation />
      </header>
      {children}
      <Footer/>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
