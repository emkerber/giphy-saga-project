import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
// for reducers:
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// for sagas:
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

// SAGAS:

function* rootSaga() {
    yield takeEvery('FETCH_SEARCH_GIFS', fetchSearchGifs);
}

function* fetchSearchGifs(action) {
    try {
        console.log('In fetchSearchGifs saga; payload is:', action.payload);
    } catch (error) {
        console.log('Error fetching search gifs:', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

// REDUCERS:

// store gifs returned after fetching by search term
const searchResults = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        searchResults,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

// "Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware"
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
