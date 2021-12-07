import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
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
    </>
  );
}

export default App;
