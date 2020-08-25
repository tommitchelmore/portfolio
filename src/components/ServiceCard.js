import React from "react"

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="card text-dark" id="service-card" style={{background: 'white'}}>
          <div className="card-icon">
            {this.props.icon}
            {this.props.svg}
          </div>
          <div className="card-content">
            <h2>{this.props.title}</h2>
            <h6>{this.props.description}</h6>
            <p>{this.props.body}</p>
          </div>
        </div>
    )
  }
}

export default Card
