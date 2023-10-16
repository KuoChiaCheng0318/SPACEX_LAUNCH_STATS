import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";



import Launches from './components/Launches';




const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src="share.jpg" 
        alt="SpaceX"
        style={{width:300 , display: 'block', margin: 'auto'}}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}




export default App;
