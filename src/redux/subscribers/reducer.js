import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

const initialState = {
  subCount: 1250,
};
const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return { ...state, subCount: state.subCount + 1 };
    case REMOVE_SUBSCRIBER:
      return { ...state, subCount: state.subCount - 1 };
    default:
      return state;
  }
};

export default subscribersReducer;
