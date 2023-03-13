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
import axios from 'axios';

// SAGAS:

function* rootSaga() {
    yield takeEvery('FETCH_SEARCH_GIFS', fetchSearchGifs);
}

// send value from search form's input to server
// server will query Giphy API Search Endpoint
// save response from server to searchResults reducer
function* fetchSearchGifs(action) {
    try {
        // console.log('In fetchSearchGifs saga; payload is:', action.payload);
        const results = yield axios.get(`/api/giphy/${action.payload}`);
        console.log('result from server:', results);
        // yield put({ type: 'SET_SEARCH_RESULTS', payload: results.data });
    } catch (error) {
        console.log('Error fetching search gifs:', error);
    }
}

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

const sagaMiddleware = createSagaMiddleware();

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
