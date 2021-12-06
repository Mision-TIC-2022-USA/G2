import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';

function App() {

  const user ={
    nombre: 'Juan',
    apellido: 'Perez'
  }

  return (
    <>
      {/* Composición de componentes  */}
      <HelloMessage  user={user} />
    </>
  );
}

export default App;
