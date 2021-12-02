import React from "react";

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <div>Hello World {this.props.nombre}</div>
            </div>
        );
    }
}

export default HelloMessage;
