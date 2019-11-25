import React from 'react';

import axiosInstance from '../Core/axiosInstance';
import AgregarForm from './AgregarForm';
import { connect } from 'react-redux';


const AgregarPelicula = (props) => {

    const funcionForm = (datos) => {

      console.log(datos);
      
      axiosInstance.post("/pelicula", {
        id: datos.id,
        titulo: datos.titulo,
        descripcion : datos.descripcion,
        duracion: datos.duracion
      })
        .then((response) => {
          console.log(response);
          props.success();
        })
        .catch((error) => {
          console.log(error);
          props.error();
        })
    }
    return(
      <div className ="container">
        <div className="row page-add">
          <div className="col-md-12">
              <h2 className="title-pages">Agregar Pelicula</h2>
          </div>
          <div className="form-add m-4">
              {props.mensaje.mensaje}
              <AgregarForm onSubmit={funcionForm}/>
          </div> 
            
          
            
        </div>
        
      </div>
      
    )
}
const mapStateToProps = (state) =>{
  return{
      mensaje: state.peliStatus
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
        success: () => {
          dispatch({type: 'PELICULA_CREADA'})
        },
        error: () => {
          dispatch({type: 'ERROR_CARGA'})
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgregarPelicula)