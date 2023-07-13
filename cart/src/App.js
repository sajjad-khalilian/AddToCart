import { Switch , Redirect , Route } from 'react-router-dom';
import './App.css';
import ProductDetailes from './components/ProductDetailes';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import Store from './components/Store';
import CartContectProvider from './context/CartContectProvider';
import ProductcontextProvider from './context/ProductcontextProvider';

function App() {
  return (
    <ProductcontextProvider>
      <CartContectProvider>
        <Navbar/>
        <Switch>
          <Route path="/products/:id" component={ProductDetailes}/>
          <Route path="/products" component={Store}/>
          <Route path="/Cart" component={ShopCart}/>
          <Redirect to="/products"/>
        </Switch>
      </CartContectProvider>
    </ProductcontextProvider>
  );
}

export default App;
