
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axiosInstance from '../Core/axiosInstance.js';

class ListarPeliculas extends Component {
  
  componentDidMount(){
      this.props.listar();
  }
  componentWillUnmount(){
      this.props.clear();
  }
  allPelisInPage = () => {
    const Pelis = this.props.allPelis.map((peli) => {
        return(
         <tr key={peli.id}>
           <td>{peli.titulo}</td>
           <td>{peli.descripcion}</td>
           <td>{peli.duracion}</td>
         </tr>
    
        )
    });
    return Pelis;
  }
  
  render(){

    return (
      <div className ="container">
        <div className="row page-add">
           <div className="col-md-12">
              <h2 className="title-pages">Listado de Películas</h2>
          </div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Descripción</th>
                <th scope="col">Duración</th>
              </tr>
            </thead>
            <tbody>
                {this.allPelisInPage()}
            </tbody>
               
          </table>           
       </div>
     </div>
    )

  }
    
}
const mapStateToProps = (state) => {
  return {
      allPelis: state.allPelis
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    listar: () => {
      axiosInstance.get('/pelicula')
      .then(function(response){
        console.log(response);
        dispatch({type: 'LIST_LOADED',
                  data: response.data.peliculas});
      })
      .catch(function(error){
          console.log(error);
      })
    },
    clear: () => {
      dispatch({type: 'CLEAR_DATA'});
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(ListarPeliculas)