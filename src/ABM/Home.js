import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { statement } from '@babel/template';

class Home extends Component{
  
  componentDidMount(){
    this.props.traerMovies(); 
  }

  componentWillUnmount(){
    this.props.clear();
  }

  importMovies = () => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
    const Movies = this.props.allMovies.map((movie) => {
    console.log(movie);
    return (
      <tr key={movie.id}>
      <td><img className="img-table" src={`${IMG_URL}/${movie.poster_path}`} /></td>
      <td>{movie.original_title}</td>
      <td>{movie.overview}</td>
      
    </tr>
      
    )

    });
    return Movies;
   
  }
 
  render (){
    
    return(
      <div className ="container">
        <div className="row page-add">
           <div className="col-md-12">
              <h2 className="title-pages">Listado de Películas</h2>
          </div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Poster</th>
                <th scope="col">Titulo</th>
                <th scope="col">Descripción</th>
                
              </tr>
            </thead>
            <tbody>
                {this.importMovies()}
            </tbody>
               
          </table>           
       </div>
     </div>
        
      )
  }
  
  
}
const mapStateToProps = (state) => {
  return{
    allMovies: state.allMovies
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    traerMovies: () => {
        axios.get("https://api.themoviedb.org/3/list/2?api_key=ece07b560c8425ad0f759fbdd7f453af")
        .then(function(response){
          
          dispatch({type: 'MOVIES_LOADED',
          data: response.data.items  
        });
        })
        .catch(function(error){
          console.log(error);
        })
    },
    clear: () => {
      dispatch({type: 'CLEAR_MOVIES'});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)