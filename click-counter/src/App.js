import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    error: null
  }

  render(){
    const {counter, error} = this.state
    return (
      <div className="app">
        <div className="display">Total Counter is {counter}</div>
        <div>
          <button className="btn decrement" onClick={ () => this.setState(({counter} )=> ({ counter: counter < 1 ? counter : counter - 1, error: counter < 1 ? 'The counter cannot be under zero' : null}))}>Decrement</button>
          <button className="btn increment" onClick={ () => this.setState(({counter} )=> ({ counter: counter + 1, error: null }))}>Increment</button>
        </div>
        { error 
          ? <small className='error'> { error }</small>
          : null
        }
      </div>
    );
  }
 
}

export default App;
