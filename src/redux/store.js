import { createStore } from "redux";
// import subscribersReducer from "./subscribers/reducer";
import rootReducer from "./rootReducer";

// const store = createStore(subscribersReducer);
const store = createStore(rootReducer);

export default store;
