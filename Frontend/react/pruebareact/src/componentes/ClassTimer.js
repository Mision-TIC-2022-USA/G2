import React from "react";

class ClassTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    //Montar el componente
    componentDidMount() {
     this.interval = setInterval(() => {
           
            //por cada segundo se actualiza el estado Time
            this.setState(() => ({
                time: new Date()
            }));

        }, 1000);
    }

    //Actualizar el componente
    componentDidUpdate() {
        //console.log("Se actualizo el componente");
    }

    //Desmontar el componente
    componentWillUnmount() {
        console.log("Se destruyo el componente Timer");
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>Componente de clase</h1>
                <h2> son las { this.state.time.toLocaleTimeString() }</h2>
            </>
        );
    }
}

export default ClassTimer;