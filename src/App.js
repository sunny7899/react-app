import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
function App() {
  var myStyle = {
    fontSize: 100,
    color: '#FF0000'
 }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
            <Test/>
            <Car Color="red"/>
            <MyForm/>
            <Football />
            <h1>{1+1}</h1>
            {/* <h1>{i == 1 ? 'True!' : 'False'}</h1> */}
            <Header/>
            <h1 style = {myStyle}>Header</h1>
         </div>
    
  );
}

export default App;

class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}




 class Car extends React.Component {
   render() {
     return <h2>I am a {this.props.color} Car!</h2>;
   }
 }

//  class Football extends React.Component {

//    constructor(props) {
//       super(props)
//       this.shoot = this.shoot.bind(this)
//     }
//    shoot = () => {
//      console.log(this)
//      /*
//      The 'this' keyword refers to the component object
//      */
//    }
//    render() {
//      return (
//        <button onClick={this.shoot}>Take the shot!</button>
//      );
//    }
//  }

class Football extends React.Component {
   shoot = (a, b) => {
     alert(b.type);
     /*
     'b' represents the React event that triggered the function,
     in this case the 'click' event
     */
   }
   render() {
     return (
      //  <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!</button>
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
     );
   }
 }
 
//  class MyForm extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = { username: '' };
//    }
//    myChangeHandler = (event) => {
//      this.setState({username: event.target.value});
//    }
//    render() {
//      return (
//        <form>
//        <h1>Hello {this.state.username}</h1>
//        <p>Enter your name:</p>
//        <input
//          type='text'
//          onChange={this.myChangeHandler}
//        />
//        </form>
//      );
//    }
//  }

class MyForm extends React.Component {
   constructor(props) {
     super(props);
     this.state = { username: '' };
   }
   myChangeHandler = (event) => {
     this.setState({username: event.target.value});
   }
   render() {
     let header = '';
     if (this.state.username) {
       header = <h1>Hello {this.state.username}</h1>;
     } else {
       header = '';
     }
     return (
       <form>
       {header}
       <p>Enter your name:</p>
       <input
         type='text'
         onChange={this.myChangeHandler}
       />
       </form>
     );
   }
 }