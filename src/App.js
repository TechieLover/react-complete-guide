import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons: [
      {name:'Max',age:28},
      {name:'Parwinder',age:28},
      {name:'goyal',age:28}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName)=>{
    //console.log('was clicked');
    //Don't due this  this.state.persons[0].name='Parwinde Kumar';
    this.setState({ 
      persons: [
        {name:'Max',age:28},
        {name:"Parwinder Goyal",age:29},
        {name:'goyal',age:28}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:event.target.value,age:28},
        {name:'Parwinder kumar',age:28},
        {name:'goyal',age:28}
    ]

    })
  }
  render() {
    const style ={
      backgroudColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    return (
      <div className="App">
       <h1>Hi , I'm a react App</h1>
       <p>This really works</p>
       <button style={style} onClick={() => this.switchNameHandler("Random")}>Switch Name </button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I have some best things</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this,'Goyal family!!')}
       changed={this.nameChangedHandler}></Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi Parwinder kumar Goyal'))
  }
}

export default App;
