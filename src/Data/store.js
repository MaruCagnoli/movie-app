import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const peliCreated = (state={}, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'PELICULA_CREADA':
      nuevoEstado = {mensaje: "La película fue creada correctamente."}
      return nuevoEstado;
    case 'ERROR_CARGA':
      nuevoEstado = {mensaje: "Falló la carga de la película"}
      return nuevoEstado;
    default:
      return state;
  }
}
const allPelis = (state=[], action) =>{
  var nuevoEstado = Object.assign({}, state);
  switch(action.type){
    case 'LIST_LOADED':
      nuevoEstado = state.concat(action.data);
      return nuevoEstado;
    case 'CLEAR_DATA':
      nuevoEstado = [];
      return nuevoEstado;
    default:
      return state;
  }
}
const retrieveMovies = (state=[], action) => {
  var nuevoEstado = Object.assign({}, state);
  switch(action.type){
    case 'MOVIES_LOADED':
      nuevoEstado = state.concat(action.data);
      return nuevoEstado;
    case 'CLEAR_MOVIES':
      nuevoEstado = [];
      return nuevoEstado;
    default:
      return state;
  }
}

const reducer = combineReducers({
    form: formReducer,
    peliStatus: peliCreated,
    allPelis: allPelis,
    allMovies: retrieveMovies
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
  reducer,
  devTools
);