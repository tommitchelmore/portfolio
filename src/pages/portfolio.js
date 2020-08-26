import React from "react"
import Layout from "../components/layout"
import Particles from "react-particles-js"
import particlesConfig from "../components/particlesConfig"
import { graphql, Link } from "gatsby"

const PortfolioPage = ({data}) => (
  <Layout location="portfolio">
    <section style={{background: 'var(--gradient)'}}>
      <Particles id="particles-container" style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}} params={particlesConfig} />
      <div className="container">
        <div className="row d-flex align-content-center headerContent" style={{height: '60vh'}}>
          <h1 className="header-lead" style={{width: '100%'}}>THIS IS MY</h1>
          <h1 className="header-lead">Portfolio</h1>
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
