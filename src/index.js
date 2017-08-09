import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
//redux imports

import {reducer} from './reducers';


import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Dashboard from './components/Dashboard';
import Login from './containers/Login';
import Register from './containers/Register';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <Switch>
                <BaseLayout>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                </BaseLayout>
            </Switch>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
