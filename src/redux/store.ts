import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { rootReducer } from 'redux/reducer';


const composeDev = composeWithDevTools || compose;
const devTools = composeDev(applyMiddleware(thunk));

const store: Store = createStore(rootReducer, devTools);

export default store;
