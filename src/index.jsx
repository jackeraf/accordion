import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import accordionReducer from './store/reducers/reducer';
import './index.css';
import App from './containers/App';

const store = createStore(accordionReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
