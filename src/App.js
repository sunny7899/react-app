import React from 'react';
import logo from './logo.svg';
import './App.css';

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
            Hello World!!!
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
