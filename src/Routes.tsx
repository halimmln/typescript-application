import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import UserList from './components/UserList/UserList';

import history from './history';
import AddUser from './components/AddUser/AddUser';
import UserRegister from './components/AddUser/UserRegisterForm';
import UserListNew from './components/UserList/UserListNew';
import UserRegisterGraph from "./components/AddUser/UserRegisterFormGraphql";
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/userlist" component={UserList} />
          <Route path ="/userListNew" component={UserListNew}/>
          <Route exact path="/user" component={AddUser} />
          <Route path="/user/:id" component={AddUser} />
          <Route exact path="/userForm" component ={UserRegister} />
          <Route path="/userForm/:id" component ={UserRegister} />
          <Route exact path="/userFormGraphql" component ={UserRegisterGraph} />
          <Route path="/userFormGraphql/:id" component ={UserRegisterGraph} />
        </Switch>
      </Router>
    );
  }
}
