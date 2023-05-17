import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { deleteCookie } from "../utils/cookies";

const initialState = {
  user: {
    _id: null,
    username: null,
    email: null,
    profilePicture: null,
    backgroundImage: null,
    bio: null,
  },
  platformVal: 0,
  sortVal: "",
  genreVal: 0,
  profileCompletedFilter: "all",
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
): any => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_PLATFORM":
      return { ...state, platformVal: action.payload };
    case "SET_SORT":
      return { ...state, sortVal: action.payload };
    case "SET_GENRE":
      return { ...state, genreVal: action.payload };
    case "SET_PROFILE_COMPLETED":
      return { ...state, profileCompletedFilter: action.payload };
    case "UPDATE_USER_IMAGE":
      return { ...state, user: { ...state, profileImage: action.payload } };
    case "UPDATE_USER_NAME":
      return { ...state, user: { ...state, username: action.payload } };
    case "UPDATE_USER_BIO":
      return { ...state, user: { ...state, bio: action.payload } };
    case "RESET":
      deleteCookie("token");
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
