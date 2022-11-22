import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
// import subscribersReducer from "./subscribers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// const store = createStore(subscribersReducer);
const middleware = [logger];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
