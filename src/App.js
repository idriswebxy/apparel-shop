import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';
import Menu from './components/Menu';
import { AnimatePresence } from "framer-motion"; 
import HomePage from './component/pages/HomePage';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ProductsProvider>
        <CartProvider>
        <Menu/>
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={HomePage}/>

          </Switch>
        </AnimatePresence>
        </CartProvider>
      </ProductsProvider>
    </div >
  );
}

export default App;
