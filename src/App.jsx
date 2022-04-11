import React from 'react';
import LoginPage from './Pages/LoginPage/LoginPage';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import HomePage from './Pages/HomePage/HomePage';
import WishListPage from './Pages/WishListPage/WishListPage';
import CartPage from './Pages/CartPage/CartPage';
import CreatAccount from './Pages/CreateAccount/CreateAccount';

export default class App extends React.Component {

  history = createBrowserHistory()

  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/login"><LoginPage /></Route>
          <Route exact path="/create-account"><CreatAccount /></Route>

          <Route exact path="/wishlist"><WishListPage /></Route>
          <Route exact path="/cart"><CartPage /></Route>
        </Switch>
      </Router>
    );
  }
}