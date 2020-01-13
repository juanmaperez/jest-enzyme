import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {

  render(){
    console.log(this.props.store)
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps)(Input)