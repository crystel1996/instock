import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { client } from './Services';
import { Me } from './Component';
import { LIST_ROUTE } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Me listRoutes={LIST_ROUTE}>
        <CssBaseline />
          <App />
        <CssBaseline />
      </Me>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
