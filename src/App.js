import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';


const App = () => {
  return (
    <div className="fondoApp">
        <div className="container">
          <Header/>
          <Nav/>
       </div>
    </div>
    
  );
}

export default App;
