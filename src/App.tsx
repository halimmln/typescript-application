import './App.css';
import Navigation from './components/Navbar/Navbar';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
 
const client1 = new ApolloClient({
  uri:"http://localhost:4000/graphql",
  cache:new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client1}>
    <div className="App">
     <Navigation />
      <Routes />
    </div>
    </ApolloProvider>
  );
}

export default App;
