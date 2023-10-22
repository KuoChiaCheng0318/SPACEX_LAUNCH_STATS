import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Launches from './components/Launches';
import Launch from './components/Launch';




const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src="share.jpg" 
          alt="SpaceX"
          style={{width:300 , display: 'block', margin: 'auto'}}
          />
          <Routes>
            <Route exact path="/" element={<Launches />} />
            <Route exact path="/launch/:id" element={<Launch />} /> 
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}




export default App;
