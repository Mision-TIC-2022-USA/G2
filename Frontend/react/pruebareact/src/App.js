import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';
import { DataContext } from './componentes/DataContex';
import { useState } from 'react';
function App() {

  const userData = {
    nombre: 'Juan',
    apellido: 'Perez'
  }
  
  const [user,setUser]  = useState(userData);
  return (
    <>
      <DataContext.Provider value={{user,setUser}} >
        {/* Composición de componentes  */}
        <HelloMessage />
        <TodoApp />
        <ClassTimer />
        <FunctionTimer />
      </DataContext.Provider>
    </>
  );
}

export default App;
