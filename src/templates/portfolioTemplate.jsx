import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Particles from "react-particles-js"
import particlesConfig from "../components/particlesConfig"
import {CgClose} from "react-icons/all"

export default function Template({ data }) {
  const { markdownRemark } = data
  const {frontmatter, html} = markdownRemark

  return (
    <Layout location="portfolio">
      <section className={"portfolioHeader"} style={{backgroundImage: `var(--gradientTransparent), url(${frontmatter.image.publicURL})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Particles id="particles-container" style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}} params={particlesConfig} />
        <div className="container">
          <div className="row d-flex align-content-center headerContent" style={{height: '60vh'}}>
            <div className="col-12 pb-3">
              <h1 className="header-lead">PORTFOLIO</h1>
              <h1 className="header-lead">{frontmatter.title}</h1>
              <p className="lead my-0 text-accent" style={{textShadow: '0 5px 30px rgba(0,0,0,0.4)'}}>{frontmatter.description}</p>
            </div>
          </div>
        </div>
        <div id="about" style={{position: 'absolute', bottom: '5rem'}} />
        <div className="waves-fix waves-bottom" />
        <div className="waves2 waves-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,272C672,288,768,288,864,277.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        <div className="waves waves-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,272C672,288,768,288,864,277.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
      </section>
      <section style={{background: 'var(--white)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">

            </div>
            <div className="col-12">
              <p className={"lead"}>{frontmatter.summary} <span style={{position: 'absolute', top: '1.25rem', right: 0}}><Link style={{textAlign: 'right', marginLeft: 'auto'}} to={"/portfolio"}><CgClose className={"closeIcon"} /></Link></span></p>
            </div>
            <div className="col-12">
              <p dangerouslySetInnerHTML={{__html: html}}></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
    query($title: String!) {
        markdownRemark( frontmatter: { title: { eq: $title } }) {
            id
            frontmatter {
                title
                summary
                description
                image {
                    publicURL
                }
            }
            html
        }
    }
`
