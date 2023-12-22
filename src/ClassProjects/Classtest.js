import React, { Component } from 'react'
import './class.css';

class Classtest extends Component {
  render() {
    return (
        <div>
        <center>
        <h1>{this.props.aboutlabel}</h1>
        <p>{this.props.abouttext}</p>
        <br></br>
        <h3>{this.props.teammembers}</h3>
        <div>
            <img src={this.props.memberImage} alt={this.props.membername} />
            <h5>{this.props.membername}</h5>
            <p>{this.props.background}</p>
          </div>
        </center>
        </div>
    )
  }
}
export default Classtest
