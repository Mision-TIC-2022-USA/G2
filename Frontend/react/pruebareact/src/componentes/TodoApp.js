import React from "react";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        console.log(this.state.items);
        
        //localStorage
        const texto = localStorage.getItem('text');
        //localStorage.removeItem('text');
        //localStorage.clear();

        console.log("localStorage " + texto);

        if(this.state.text.length === 0) 
            return;

        let item = {
            text: this.state.text,
            id: Date.now()
        }
        //console.log(item);

        this.setState((state) => ({
            //ES6
            // items: [...state.items, item],
            items: state.items.concat(item),
            text: ''
        }));

       
    }

    handleChange(event) {
        //console.log(event.target.value);

        //LocalStorage
        //localStorage.setItem('text', event.target.value);

        this.setState(() => ({
            text: event.target.value
        }));
    }

    render() {
        return (
            <div>
                <h1>Mi TodoApp</h1>
                <h3>Mis tareas pendientes</h3>
                <ul>
                    {
                        this.state.items.map((item) => {
                            return <li key={item.id}>{item.text}</li>
                        })
                    }
                </ul>

                <label>¿Que tengo que hacer? </label>
                <input value={this.state.text} type="text" onChange={this.handleChange} />
                <button onClick={this.handleClick} >Añadir #{this.state.items.length + 1}  </button>
            </div>
        )
    }
}

export default TodoApp;
