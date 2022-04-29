import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const enhancers = [middlewareEnhancer];
const composedEnhancer = composeWithDevTools(...enhancers);

export default createStore(rootReducer, composedEnhancer);
