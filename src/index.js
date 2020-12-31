import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ErrorBoundary } from './Components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';


ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
