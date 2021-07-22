import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import reportWebVitals from './reportWebVitals';
import routes from './utils/routes';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/index.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


const app = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      {routes}
    </ApolloProvider>
  </React.StrictMode>
)
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app(), rootElement);
} else {
  render(app(), rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
