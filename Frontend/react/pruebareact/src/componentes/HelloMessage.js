import React from "react";
import "./HelloMessage.css";
import { DataContext } from "./DataContex";
import ClassTimer from "./ClassTimer";


class HelloMessage extends React.Component {
  //inicio
  componentDidMount() {
    console.log("HelloMessage componentDidMount");
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
    
    const  {user}  = this.context; 
   
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
      </>
    );
  }
}

//ClassTimer.contextType = DataContext;
export default HelloMessage;
