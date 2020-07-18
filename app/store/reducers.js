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

export const reducerGroceryItems = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_ITEM_SUCCESS:
      return true;
    default:
      return state;
  }
};
