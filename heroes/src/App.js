
import './App.css';
import ItemListContainer from './conteiners/ItemListContainer/index';
import NavScrollExample from './components/NavBar';
// import CartWidget from './components/CartWidget';

function App() {

  const sujeto1 = {
    nombre: "Superman",
    poder: "Volar",
    edad: 25,
    planeta: "venus"
  };
  // const sujeto2 = {
  //   nombre: "Batman",
  //   poder: "Manejar",
  //   edad: 25,
  //   planeta: "Tierra"
  // };
  // const sujeto3 = {
  //   nombre: "Flash",
  //   poder: "Correr",
  //   edad: 25,
  //   planeta: "Tierra"
  // };
  // const sujeto4 = {
  //   nombre: "Poseidon",
  //   poder: "Rey del Mar",
  //   edad: 25,
  //   planeta: "Saturno"
  // };

  return (
    <>
      <div className="App">
        <NavScrollExample />
        <ItemListContainer mensaje={sujeto1}/>
        {/* <CartWidget/> */}
      </div>
        
    </>
  );
}

export default App;
