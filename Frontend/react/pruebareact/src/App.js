import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';

function App() {
  return (
    <div>
      {/* Composición de componentes  */}
      <HelloMessage nombre="Angel" />
      <HelloMessage nombre="Mario" />
      <HelloMessage nombre="Carlos" />
    </div>
  );
}

export default App;
