import CONSTANTS from "./CONSTANTS";

//Auth Reducer

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

//Grocery Reducer

export const reducerGroceryItems = (state = [{}], action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_GROCERY_LIST:
      return action.data;
    default:
      return state;
  }
};
