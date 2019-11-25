import React from 'react';
import peliLogo from './peliLogo.jpeg';


const Header = () => {
    return (
     
      <div className="container fondoHeader">
      <header>
       <div className="row">
         <div className="col-md-6">
                <img src={peliLogo} className="App-logo" alt="logo" />   
         </div>
         <div className="col-md-6">
                <h2 className="title-app">MovieApp</h2> 
         </div>  
            
       </div> 
             
      </header>
    </div>
    )
}
export default Header
