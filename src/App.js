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
import Login from './login';
import PrivateRoute from './PrivateRoute';


export default class App extends React.Component {
  state = { user: null };

  setUser = user => {
    this.setState({ user: user.body});
  }

  render() {
    return (

    <div className="App">

      <BrowserRouter>
      <Link to="./Favorites">Favorites</Link>
      <Link to="./Search">Search the Empire</Link>
      <Link to="./Login">Join the Force</Link>
      <Header />
        <Switch>
            <PrivateRoute exact path="/" component={Search} user={this.state.user} />
            <PrivateRoute exact path="/favorites" component={Favorites} user={this.state.user} />
            <Route exact path="/login" render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user}/>} />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
    }
}
