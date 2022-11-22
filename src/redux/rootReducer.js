import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";

const rootReducer = combineReducers({
  rootViews: viewsReducer,
  rootSubs: subscribersReducer,
});

export default rootReducer;
