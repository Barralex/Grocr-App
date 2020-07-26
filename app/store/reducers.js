import CONSTANTS from "./CONSTANTS";

export const reducerSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.SET_SESSION:
      return { ...action.user };

    case CONSTANTS.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

export const onlineUsers = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ONLINE_COUNTER:
      return [...action.data];
    default:
      return state;
  }
};

export const reducerGroceryItems = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_GROCERY_LIST:
      return [...action.data];
    default:
      return state;
  }
};
