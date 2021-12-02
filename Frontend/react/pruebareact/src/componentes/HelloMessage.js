import React from "react";

class HelloMessage extends React.Component {


    onClick(contador) {
        contador++;
        console.log(contador);
    }

    render() {
        return (
            <div>
                <div>Hello World {this.props.nombre}</div>
            </div>
        );
    }
}

export default HelloMessage;
