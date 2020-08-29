import React from "react"
import WordCloud from "react-d3-cloud/lib/WordCloud"

const data = [
  { text: "Typescript", value: 3000},
  { text: "Javascript", value: 3000},
  { text: "Node", value: 2500},
  { text: "React", value: 2200},
  { text: "Docker", value: 2000},
  { text: "Python", value: 1500},
  { text: "Linux", value: 2000},
  { text: "Nginx", value: 2000},
  { text: "C#", value: 200},
  { text: "Discord", value: 500},
  { text: "Azure", value: 500},
  { text: "AWS", value: 500},
  { text: "Cloudflare", value: 500},
  { text: "Slack", value: 400},
  { text: "Github", value: 700},
  { text: "DevOps", value: 500},
  { text: "Deployment", value: 1200},
  { text: "WHMCS", value: 100},
  { text: "GraphQL", value: 1100},
  { text: "Express", value: 1400},
  { text: "Laravel", value: 1600},
  { text: "Java", value: 500},
  { text: "PHP", value: 2000},
  { text: "Ubuntu", value: 1300},
  { text: "Wordpress", value: 400},
]

const Tech = () => {
  return (
    <div className="wordCloud">
      <WordCloud data={data} font={"Poppins"} fontSizeMapper={word => Math.log2(word.value) * 2.5} height={300} />
    </div>
  )
}

export default Tech

