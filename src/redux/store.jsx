import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
// import throttle from 'lodash.throttle';

// import { loadState } from "../localStorage";
// import { saveState } from "../localStorage";
// const persistedState = loadState()

const store = createStore(
    rootReducer, 
    // persistedState, 
    composeWithDevTools()
    
    );

    // store.subscribe(throttle(() => {
    //     saveState({
    //       shop: store.getState().shop
    //     });
    //   }, 1000));

export default store;