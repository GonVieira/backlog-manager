import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { deleteCookie } from "../utils/cookies";

const initialState = {
  user: {
    email: null,
    token: null,
  },
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
): any => {
  switch (action.type) {
    case "SET_USER":
      console.log(action.payload);
      return { user: action.payload };
    case "RESET":
      deleteCookie("token");
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
