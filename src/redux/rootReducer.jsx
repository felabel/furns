import { combineReducers } from "redux";
import ShopReducer from "./shopping/shoppingReducer";

const rootReducer = combineReducers({
    shop: ShopReducer,
});

export default rootReducer;