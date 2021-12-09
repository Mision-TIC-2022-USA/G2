import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';

function App() {

  const user ={
    nombre: 'Juan',
    apellido: 'Perez'
  }

  return (
    <>
      {/* Composición de componentes  */}
      <HelloMessage  user={user} />
      <TodoApp />
      <ClassTimer/>
      <FunctionTimer/>
    </>
  );
}

export default App;
