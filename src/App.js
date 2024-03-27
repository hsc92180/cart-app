
import './App.css';
import Main from './Components/Main';
import CartContext from './Components/CartContext';

function App() {
  return (
    <>
    <CartContext >
    <Main />

    </CartContext>
    </>
  );
}

export default App;