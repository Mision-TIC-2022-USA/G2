import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';
import { DataContext } from './componentes/DataContex';
function App() {

  const user = {
    nombre: 'Juan',
    apellido: 'Perez'
  }

  return (
    <>
      <DataContext.Provider value={user} >
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
