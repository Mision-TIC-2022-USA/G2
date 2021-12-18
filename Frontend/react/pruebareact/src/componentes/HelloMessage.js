import React from "react";
import "./HelloMessage.css";
import { DataContext } from "./DataContex";
import ClassTimer from "./ClassTimer";
import { getPersonas, deletePersona } from "../servicios/PersonasService";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";



class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [],
      loading: true
    };
    this.handleEditar = this.handleEditar.bind(this);
    this.handleEliminar = this.handleEliminar.bind(this);
  }


  //inicio
  componentDidMount() {
    console.log("HelloMessage componentDidMount");
    getPersonas().then(personas => {
      this.setState(() => ({
        personas: personas.data,
        loading: false
      }));
      console.log("personas", personas.data);
    });
  }

  //actualizacion
  componentDidUpdate() {
    console.log("HelloMessage componentDidUpdate");
  }

  //fin
  componentWillUnmount() {
    console.log("HelloMessage componentWillUnmount");
  }

  //experimental
  static contextType = DataContext;


  //edit personas
  handleEditar = (event, id) => {
    event.preventDefault();
    console.log("handleEditar", id);
  }

  //delete personas
  handleEliminar = (event, id) => {

    console.log("handleEliminar", id);
    deletePersona(id).then(personas => {
      this.setState((state) => ({
        personas: state.personas.filter(persona => persona.id !== id)
      }));
      console.log("personas", personas.data);
    }).catch(error => {
      console.log("error", error);
    });

  }


  render() {

    const { user } = this.context;

    function getSaludo(user) {
      if (user) return <h1>Hola {formatNombre(user)}!</h1>;

      return <h2>Hola desconocido!</h2>;
    }

    function formatNombre(user) {
      return user.nombre + " " + user.apellido;
    }

    return (
      <>
        <div className="titulo"> {getSaludo(user)}</div>
        {/* Table beautiful loading personas */}


        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.loading ?
                (
                  <tr>
                    <td colSpan="5" className="text-center">
                      <Spinner animation="grow" />
                    </td>
                  </tr>
                ) :
                (this.state.personas.map(persona => (
                  <tr key={persona.id}>
                    <td>{persona.id}</td>
                    <td>{persona.nombre}</td>
                    <td>{persona.edad}</td>
                    <td>{persona.correo}</td>
                    <td>
                      <Link to={"/persona/create/" + persona.id} className="btn btn-primary m-1">Editar</Link>
                      <button onClick={(event, id) => this.handleEliminar(event, persona.id)} className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                )))}
          </tbody>
        </table>
        <Link to="/persona/create/0" className="btn btn-secondary">Crear Persona</Link>


      </>
    );
  }
}

//ClassTimer.contextType = DataContext;
export default HelloMessage;
