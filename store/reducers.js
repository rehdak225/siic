import {
  POST_USER_DATA,
  USER_UPDATE,
  POST_USER_TOKEN,
  CASES,
  SET_CONFIG,
  LOGOUT_USER_DATA
} from "./actions";

const initialState = {
  user: {},
  token: null,
  cases: [],
  config: {}
};

export const reducer = (state = initialState, action) => {
  if (action.type === POST_USER_DATA) {
    return {
      ...state,
      user: action.data
    };
  } else if (action.type === USER_UPDATE) {
    return {
      ...state,
      user: { ...state.user, ...action.data }
    };
  } else if (action.type === POST_USER_TOKEN) {
    return {
      ...state,
      token: action.data
    };
  } else if (action.type === CASES) {
    return {
      ...state,
      cases: action.data
    };
  } else if (action.type === SET_CONFIG) {
    return {
      ...state,
      config: action.data
    };
  } else if (action.type === LOGOUT_USER_DATA) {
    return {
      ...state,
      user: {
        firstname: state.user.firstname,
        lastname: state.user.lastname
      },
      token: null,
      ride: [],
      rent: [],
      cases: [],
      config: {}
    };
  }
  return state;
};
