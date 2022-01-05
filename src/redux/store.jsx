import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools, composeWithDevtools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());

export default store;