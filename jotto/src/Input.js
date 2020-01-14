import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Input extends Component {

  render(){
    const {success} = this.props 
    return (
      <div className="input-wrapper input-group-prepend">
      { success 
        ? null
        : ( <Fragment>
              <input className="input input-group-text" placeholder="Enter a word"/>
              <button className="btn btn-info mb-2 submit-btn">Submit</button>
            </Fragment>)
      }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}


export default connect(mapStateToProps)(Input)