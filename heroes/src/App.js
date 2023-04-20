import { Button } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <div className='contenedorprimario'>
          <h1 className='Hola'>Hello World</h1>
          <Button className='button' variant="primary">Queres ver todos? </Button>{' '}
        </div>
      </div>
    </>
  );
}

export default App;
