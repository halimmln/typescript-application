import './App.css';
import Navigation from './components/Navbar/Navbar';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createRef, useState } from 'react';
import React from 'react';
import WebSnackbar from './components/Snackbar/Snackbar';
import { connect } from 'react-redux';

 
const client1 = new ApolloClient({
  uri:"http://localhost:4000/graphql",
  cache:new InMemoryCache()
});
const mapState = (state: userState) => ({
  action:state.action
}
) 
const App  = (props:any) => {
  //console.log(props);
 // props = {key:Math.random(),msg:"testing",open:true};
 
  return (
    <ApolloProvider client={client1}>
    <div className="App">
     <Navigation />
      <Routes />
      {props &&  <WebSnackbar  key={Math.random()} message={props.action.msg} openStatus ={props.action.open} /> }
    </div>
    </ApolloProvider>
  );
}

export default connect(mapState) (App);
