import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './view/'
import Contact from './view/contact';
import Shop from './view/shop';
import Gallery from './view/gallery';
import Cart from './view/cart';

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
        </Switch>        
      </header>
    </div>
  );
}

export default App;