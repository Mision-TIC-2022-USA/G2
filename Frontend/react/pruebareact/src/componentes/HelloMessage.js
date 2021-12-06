import React from "react";
import "./HelloMessage.css";

class HelloMessage extends React.Component {
  //inicio
  componentDidMount() {
    console.log("HelloMessage componentDidMount");
  }

  //actualizacion
  componentDidUpdate() {
    console.log("HelloMessage componentDidUpdate");
  }

  //finn
  componentWillUnmount() {
    console.log("HelloMessage componentWillUnmount");
  }

  render() {
    function getSaludo(user) {
      if (user) return <h1>Hola {formatNombre(user)}!</h1>;

      return <h2>Hola desconocido!</h2>;
    }

    function formatNombre(user) {
      return user.nombre + " " + user.apellido;
    }

    return (
      <>
        <div className="titulo"> {getSaludo(this.props.user)}</div>
      </>
    );
  }
}

export default HelloMessage;
