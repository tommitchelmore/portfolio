import React from "react"
import Layout from "../components/Layout"
import Particles from "react-particles-js"
import particlesConfig from "../components/particlesConfig"
import { graphql, Link } from "gatsby"

const PortfolioPage = ({data}) => (
  <Layout>
    <section style={{background: 'var(--gradient)'}}>
      <Particles id="particles-container" style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}} params={particlesConfig} />
      <div className="container">
        <div className="row d-flex align-content-center headerContent" style={{height: '60vh'}}>
          <div className="col-12">
            <h1 className="header-lead" style={{width: '100%'}}>THIS IS MY</h1>
            <h1 className="header-lead">Portfolio</h1>
          </div>
        </div>
      </div>
      <div id="about" style={{position: 'absolute', bottom: '5rem'}} />
      <div className="waves-fix waves-bottom" />
      <div className="waves2 waves-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,224L60,224C120,224,240,224,360,229.3C480,235,600,245,720,224C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <div className="waves waves-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,224L60,224C120,224,240,224,360,229.3C480,235,600,245,720,224C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    <section style={{background: 'var(--white)'}}>
      <div className="container">
        <div className="card-columns py-5">
          {data.allMarkdownRemark.edges.map(({node}) => (
            <div className="col-12 col-md-6 col-lg-4 " key={node.id} style={{display: 'inline-block'}}>
              <div className="card text-dark" id="portfolio-card">
                <div className="card-header" style={{backgroundImage: `url(${node.frontmatter.thumbnail.publicURL})`}}></div>
                <div className="card-content">
                  <h2>{node.frontmatter.title}</h2>
                  <h6 className={"pb-4"}>{node.frontmatter.description}</h6>
                  <Link to={'/portfolio/' + node.frontmatter.title.toLowerCase().replace(' ', '-')}>Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        summary
                        thumbnail {
                            publicURL
                        }
                    }
                    html
                }
            }
        }
    }
`

export default PortfolioPage
