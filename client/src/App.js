

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CurrentGame from './pages/CurrentGame';
import Login from './pages/Login';
import Profile from './pages/Profile';


import './App.css';

//setup apollo client
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  // console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: from( [ authLink, httpLink ] ),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='bg'>
        </div>
        <div className="flex-column justify-flex-start content">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/currentGame"
                element={<CurrentGame />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/profile"
                element={<Profile />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
