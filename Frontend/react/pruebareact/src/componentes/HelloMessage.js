import React from "react";
import "./HelloMessage.css";
import { DataContext } from "./DataContex";
import ClassTimer from "./ClassTimer";
import { getPersonas as getPersonasApi } from "../servicios/PersonasService";
import { Spinner } from "react-bootstrap";

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [],
      loading: true
    };
  }

  //inicio
  componentDidMount() {
    console.log("HelloMessage componentDidMount");
    getPersonasApi().then(personas => {
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
            </tr>
          </thead>
          <tbody>
            {
              this.state.loading ?
                (
                  <tr>
                    <td colSpan="4"  className="text-center">
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
                  </tr>
                )))}
          </tbody>
        </table>
      </>
    );
  }
}

//ClassTimer.contextType = DataContext;
export default HelloMessage;
