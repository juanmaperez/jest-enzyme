import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {

  render(){
    const {success} = this.props 
    return (
      success 
      ? null
      : <div className="input-wrapper input-group-prepend">
        <input className="input input-group-text" placeholder="Enter a word"/>
        <button className="btn btn-info mb-2 submit-btn">Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}


export default connect(mapStateToProps)(Input)