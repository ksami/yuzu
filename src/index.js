import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import YuzuApp from './App';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <YuzuApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
