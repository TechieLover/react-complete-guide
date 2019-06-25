import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons: [
      {id:'asdds',name:'Max',age:28},
      {id:'dfew',name:'Parwinder',age:28},
      {id:'edew',name:'goyal',age:28}
    ],
    otherState: 'some other value',
    showPersons:false
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

  deletePersonHandler = (personIndex)=>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonHandler = ()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow})

  }
  render() {
    const style ={
      backgroudColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map((person,index) =>{
            return <Person click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age}
            key={person.id}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
       <h1>Hi , I'm a react App</h1>
       <p>This really works</p>
       <button style={style} onClick={this.togglePersonHandler}>Switch Name </button>
       {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi Parwinder kumar Goyal'))
  }
}

export default App;
