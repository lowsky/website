/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ children }) => {
  const pub = useStaticQuery(graphql`
      query FooterQuery {
          _data: dataJson {
              baseColor
              pageTitle
              colorVoting {active
                  url
              }
              pageTitle
              photos2016{
                  url
              }
              navigationItems {
                  archive {
                      title
                      url
                  }
                  main {
                      title
                      url
                  }
              }
          }
      }
  `);

  return (
    <footer>
      <div>
        <h3 className={pub._data.baseColor + "-text"}>Sitemap</h3>
        <ul>
          { pub._data.navigationItems.main.map(item => <li key={item.title}><a className={pub._data.baseColor + "-text"}
                                                                               href={item.url}>{item.title}</a></li>)
          }
        </ul>
      </div>
      <div>
        <h3 className={pub._data.baseColor + "-text"}>Get in touch</h3>
        <ul>
          <li><a className={pub._data.baseColor + "-text"} href="/theteam">The Team</a></li>
          <li><a className={pub._data.baseColor + "-text"} href="https://twitter.com/jscraftcamp">Twitter</a></li>
          <li><a className={pub._data.baseColor + "-text"} href="/imprint">Imprint</a></li>
          <li><a className={pub._data.baseColor + "-text"} href="/privacypolicy">Privacy Policy</a></li>
        </ul>
      </div>
      <div style={{"flex": 1.5}}>
        <h3 className={pub._data.baseColor + "-text"}>Archive</h3>
        <ul>
          {pub._data.navigationItems.archive.map(item => <li key={item.title}><a
            className={pub._data.baseColor + "-text"} href={item.url}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </footer>);
}

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer

