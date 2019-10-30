import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      firstname: "sherlock",
      lastname: "holmes"
    }
  }
  render(){
    return (
      <div>
      <h1>{this.state.firstname}</h1>
      <h2>{this.state.lastname}</h2>
      </div>
      )
  }
}

class Movie extends React.Component{

}

export default App