import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Search from './search';
import Favorites from './favorites.js';
import Login from './login';
import PrivateRoute from './PrivateRoute';
import yodaImg from './assets/yoda.png'


export default class App extends React.Component {
  state = { user: null };

  setUser = user => {
    this.setState({ user: user.body});
  }

  render() {
    return (

    <div className="App">

      <BrowserRouter>
      <Link to="./favorites" className='link-btn'>Favorites</Link>
      <Link to="./search" className='link-btn'>Search the Empire</Link>
      <Link to="./login" className='link-btn'>Join the Force</Link>
      <Header />
        <Switch>
            <PrivateRoute exact path="/" component={Search} user={this.state.user} />
            <PrivateRoute exact path="/favorites" component={Favorites} user={this.state.user} />
            <Route exact path="/login" render={(props) => <Login {...props} setUser={ this.setUser } user={this.state.user}/>} />
        </Switch>
       
      </BrowserRouter>
  
        <div>
          <img className='yoda' src={yodaImg} alt=''/>
        </div>
    </div>
  
  );
    }
}
