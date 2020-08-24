import React from "react"
import {graphql} from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const {frontmatter, html} = markdownRemark

  console.log(frontmatter)
  console.log(html)

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{frontmatter.title}</h1>
            <p className={"lead"}>{frontmatter.description}</p>
          </div>
          <div className="col-12">
            <p dangerouslySetInnerHTML={{__html: html}}></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const pageQuery = graphql`
    query($title: String!) {
        markdownRemark( frontmatter: { title: { eq: $title } }) {
            html
            frontmatter {
                title
                description
                summary
            }
        }
    }
`
