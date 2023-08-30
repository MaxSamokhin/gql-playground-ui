import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { client } from './gql/apollo-client.config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider {...{ client }}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals(console.log);
