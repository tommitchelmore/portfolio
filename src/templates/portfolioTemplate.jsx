import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Particles from "react-particles-js"
import particlesConfig from "../components/particlesConfig"
import {CgClose} from "react-icons/all"

export default function Template({ data }) {
  const { markdownRemark } = data
  const {frontmatter, html} = markdownRemark

  return (
    <Layout>
      <section className={"portfolioHeader"} style={{backgroundImage: `var(--gradientTransparent), url(${frontmatter.image.publicURL})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Particles id="particles-container" style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}} params={particlesConfig} />
        <div className="container">
          <div className="row d-flex align-content-center headerContent" style={{height: '80vh'}}>
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
            <path d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,245.3C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="waves waves-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,245.3C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      <section style={{background: 'var(--white)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">

            </div>
            <div className="col-12">
              <p className={"lead text-secondary"} style={{textShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>{frontmatter.summary} <span style={{position: 'absolute', top: '1.25rem', right: 0}}><Link style={{textAlign: 'right', marginLeft: 'auto'}} to={"/portfolio"}><CgClose className={"closeIcon"} /></Link></span></p>
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
