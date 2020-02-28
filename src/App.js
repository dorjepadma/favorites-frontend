import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Search from './Search';
import Favorites from './Favorites.js';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
      <Header />
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/" component={Favorites} />
            <Route exact path="/login" { login } />
        </Switch>


      </BrowserRouter>
    </div>
  );
}


export default App;

