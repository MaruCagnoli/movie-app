import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.id) {
    errors.id = 'Requerido'
  } else if (values.id.length > 50) {
    errors.id = 'No más de 50 caracteres'
  }
  if (!values.titulo) {
    errors.titulo = 'Requerido'
  } else if (values.titulo.length > 50) {
    errors.username = 'No más de 50 caracteres'
  }
  if (!values.descripcion) {
    errors.descripcion = 'Requerido'
  } else if (values.descripcion.length < 20) {
    errors.descripcion = 'No menos de 20 caracteres'
  }
  if (!values.duracion) {
    errors.duracion = 'Requerido'
  } else if (values.duracion.length > 10) {
    errors.duracion = 'No más de 10 caracteres'
  }
  
  return errors
}


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const AgregarForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <Field
        name="id"
        type="text"
        component={renderField}
        label="Id"
        className="form-control"
      />
      <Field
        name="titulo"
        type="text"
        component={renderField}
        label="Título"
        className="form-control"
      />
      <Field name="descripcion" type="text" component={renderField} label="Descripción" className="form-control" />
      <Field name="duracion" type="text" component={renderField} label="Duración" className="form-control"/>
      <div>
        <button className="btn btn-primary m-3 p-2" type="submit" disabled={submitting}>
          Agregar
        </button>
        <button className="btn btn-primary m-3 p-2" type="button" disabled={pristine || submitting} onClick={reset}>
          Limpiar
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'agregarValidation', // a unique identifier for this form
  validate // <--- validation function given to redux-form
 
})(AgregarForm)
