import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContex";

const FunctionTimer = (props) => {

    //estado de la funcion
    const [time, setTime] = useState(new Date());
    const user = useContext(DataContext);

    useEffect(() => {

        //funcion que se ejecuta cada segundo
        console.log("useEffect");
        const interval = setInterval(() => {
            console.log("segundo");
            //por cada segundo se actualiza el estado Time
            setTime(new Date());

        }, 1000);

        //se ejecuta cuando el componente se desmonta
        return () => {
            clearInterval(interval);
            console.log("Function clearInterval");
        };

    }, [] /* no observa el cambio de ninguna variable */);

    return (
        <>
            <h1>Componente de funcion</h1>
            <h2> son las {time.toLocaleTimeString()}</h2>
            <pre>usuario {JSON.stringify(user, null, 2)} </pre>
           
        </>
    )
}

export default FunctionTimer;
