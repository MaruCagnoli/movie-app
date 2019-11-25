import React from 'react';
import'bootstrap/dist/css/bootstrap.css';
import { Route, Link } from 'react-router-dom';
import AgregarPelicula  from './ABM/AgregarPelicula.js';
import ListarPeliculas  from './ABM/ListarPeliculas.js';
import  Home  from './ABM/Home.js'

const Nav = () => {
  return(
      <div>
        <ul className="nav">
          <li className="nav-item">
              <Link className="nav-link active link-nav" to='/'>Home</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link active link-nav" to='/agregar-pelicula'>Agregar</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link active link-nav" to='/listar-peliculas'>Listar</Link>
          </li>  
       </ul>
        <div>
              <Route exact path="/" component={Home}/>
              <Route path="/agregar-pelicula" component={AgregarPelicula}/>
              <Route path="/listar-peliculas" component={ListarPeliculas}/>

        </div>


      </div>
      
  )
  
}

export default Nav