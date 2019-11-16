import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './view/home'
import Contact from './view/contact';
import Shop from './view/shop';
import Gallery from './view/gallery';
import Cart from './view/cart';
import Sitemap from './view/sitemap';
import Returns from './view/returns';
import Product from './view/product';

function App() {
    
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/shop' component={Shop} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/cart' component={Cart} />
            <Route path='/sitemap' component={Sitemap} />
            <Route path='/returns' component={Returns} />
            <Route path='/product/:product' component={Product} />
        </Switch>        
      </header>
    </div>
  );
}

export default App;