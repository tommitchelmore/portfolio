import React, { useEffect } from "react"
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
  { text: ".NET", value: 200},
  { text: "Discord", value: 300},
  { text: "Azure", value: 300},
  { text: "AWS", value: 300},
  { text: "Cloudflare", value: 300},
  { text: "Slack", value: 300},
  { text: "Github", value: 700},
  { text: "DevOps", value: 500},
  { text: "HTML", value: 500},
  { text: "CSS", value: 500},
  { text: "SCSS/SASS", value: 700},
  { text: "Deployment", value: 1200},
  { text: "WHMCS", value: 100},
  { text: "GraphQL", value: 1100},
  { text: "Express", value: 1400},
  { text: "Laravel", value: 1600},
  { text: "Java", value: 500},
  { text: "Debian", value: 500},
  { text: "CentOS", value: 500},
  { text: "PHP", value: 2000},
  { text: "Ubuntu", value: 1300},
  { text: "Wordpress", value: 400},
]

const Tech = () => {
  return (
    <div className="wordCloud">
      <svg width={700} height={300}>
        <g transform="translate(350,150)"><text textAnchor="middle" transform="translate(-142,-27)rotate(0)" style={{fontSize: '28px'}}>Typescript</text><text textAnchor="middle" transform="translate(-176,8)rotate(0)" style={{fontSize: '28px'}}>Javascript</text><text textAnchor="middle" transform="translate(-5,-1)rotate(0)" style={{fontSize: '28px'}}>Node</text><text textAnchor="middle" transform="translate(-59,-66)rotate(0)" style={{fontSize: '27px'}}>React</text><text textAnchor="middle" transform="translate(-168,46)rotate(0)" style={{fontSize: '27px'}}>Docker</text><text textAnchor="middle" transform="translate(-36,45)rotate(0)" style={{fontSize: '27px'}}>Linux</text><text textAnchor="middle" transform="translate(122,-69)rotate(0)" style={{fontSize: '27px'}}>Nginx</text><text textAnchor="middle" transform="translate(186,-38)rotate(0)" style={{fontSize: '27px'}}>PHP</text><text textAnchor="middle" transform="translate(-208,-58)rotate(0)" style={{fontSize: '26px'}}>Python</text><text textAnchor="middle" transform="translate(-49,72)rotate(0)" style={{fontSize: '26px'}}>Express</text><text textAnchor="middle" transform="translate(-208,78)rotate(0)" style={{fontSize: '26px'}}>Laravel</text><text textAnchor="middle" transform="translate(88,75)rotate(0)" style={{fontSize: '25px'}}>Deployment</text><text textAnchor="middle" transform="translate(-159,-108)rotate(0)" style={{fontSize: '25px'}}>GraphQL</text><text textAnchor="middle" transform="translate(41,-38)rotate(0)" style={{fontSize: '25px'}}>Ubuntu</text><text textAnchor="middle" transform="translate(-21,-97)rotate(0)" style={{fontSize: '23px'}}>Github</text><text textAnchor="middle" transform="translate(108,43)rotate(0)" style={{fontSize: '23px'}}>SCSS/SASS</text><text textAnchor="middle" transform="translate(-141,109)rotate(0)" style={{fontSize: '22px'}}>DevOps</text><text textAnchor="middle" transform="translate(74,0)rotate(0)" style={{fontSize: '22px'}}>HTML</text><text textAnchor="middle" transform="translate(130,-10)rotate(0)" style={{fontSize: '22px'}}>CSS</text><text textAnchor="middle" transform="translate(185,13)rotate(0)" style={{fontSize: '22px'}}>Java</text><text textAnchor="middle" transform="translate(-284,-27)rotate(0)" style={{fontSize: '22px'}}>Debian</text><text textAnchor="middle" transform="translate(232,47)rotate(0)" style={{fontSize: '22px'}}>CentOS</text><text textAnchor="middle" transform="translate(-12,115)rotate(0)" style={{fontSize: '21px'}}>Wordpress</text><text textAnchor="middle" transform="translate(-246,123)rotate(0)" style={{fontSize: '20px'}}>Discord</text><text textAnchor="middle" transform="translate(213,72)rotate(0)" style={{fontSize: '20px'}}>Azure</text><text textAnchor="middle" transform="translate(147,101)rotate(0)" style={{fontSize: '20px'}}>AWS</text><text textAnchor="middle" transform="translate(236,101)rotate(0)" style={{fontSize: '20px'}}>Cloudflare</text><text textAnchor="middle" transform="translate(27,-68)rotate(0)" style={{fontSize: '20px'}}>Slack</text><text textAnchor="middle" transform="translate(-130,74)rotate(0)" style={{fontSize: '19px'}}>.NET</text><text textAnchor="middle" transform="translate(-296,5)rotate(0)" style={{fontSize: '16px'}}>WHMCS</text></g></svg>
    </div>
  )
  /*return (
    <div className="wordCloud">
      <WordCloud data={data} font={"Poppins"} fontSizeMapper={word => Math.log2(word.value) * 2.5} height={300} />
    </div>
  )*/
}

export default Tech

