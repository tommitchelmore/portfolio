/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import particlesConfig from "./particlesConfig"
import Particles from "react-particles-js"
import NavBar from "../components/NavBar"
import HelmetSEO from "../components/Helmet"

import {IoLogoLinkedin, IoLogoGithub, IoLogoNpm} from "react-icons/io/index"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HelmetSEO />
      <NavBar siteLocation={location} />
      <div>
        <main>{children}</main>
        <footer className={"gradient-2"} style={{position: "relative"}}>
          <div>
            <Particles id="particles-container" style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}} params={particlesConfig} />
            <div className="waves-fix waves-top" />
            <div className="waves2 waves-top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fillOpacity={1} d="M0,288L48,245.3C96,203,192,117,288,96C384,75,480,117,576,144C672,171,768,181,864,154.7C960,128,1056,64,1152,37.3C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
              </svg>
            </div>
            <div className="waves waves-top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fillOpacity={1} d="M0,288L48,245.3C96,203,192,117,288,96C384,75,480,117,576,144C672,171,768,181,864,154.7C960,128,1056,64,1152,37.3C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
              </svg>
            </div>
            <div className="container">
              <svg viewBox="0 0 1440 450" />
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h3 className="text-white">Tom Mitchelmore</h3>
                  <p className="text-white">Full-stack web developer and systems administrator with proven abilities in javascript, PHP and more.</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/in/thomas-mitchelmore-3a3814175/" target="_blank"><IoLogoLinkedin className="footerIcon" /></a>
                    <a href="https://github.com/tommitchelmore" target="_blank"><IoLogoGithub className="footerIcon" /></a>
                    <a href="https://www.npmjs.com/~tommitchelmore" target="_blank"><IoLogoNpm className="footerIcon" /></a>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <h3 className="text-white">Quick Links</h3>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h3 className="text-white">Posts</h3>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="col bottom text-white d-flex flex-wrap justify-content-between" style={{wordWrap: 'break-word'}}>
                    <div className="p-0 flex-grow-1">
                      <p className="text-white">Built with React and Gatsby</p>
                    </div>
                    <div className="p-0">
                      <p className="text-white">© 2020 Tom Mitchelmore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
