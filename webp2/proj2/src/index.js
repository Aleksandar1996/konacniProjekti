import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/reducers/rdxsaga'
import rootReducer from './store/reducers/index'

const sagaMiddleware=createSagaMiddleware()
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
