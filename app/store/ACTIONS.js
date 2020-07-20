import CONSTANTS from "./CONSTANTS";

export const actionRegister = (values) => ({
  type: CONSTANTS.REGISTER,
  data: values,
});

export const actionLogin = (values) => ({
  type: CONSTANTS.LOGIN,
  data: values,
});

export const actionLogout = () => ({
  type: CONSTANTS.LOGOUT,
});

export const actionSetSession = (user) => ({
  type: CONSTANTS.SET_SESSION,
  user,
});

export const actionCloseSession = () => ({
  type: CONSTANTS.CLOSE_SESSION,
});

export const actionSetItem = (values) => ({
  type: CONSTANTS.SET_ITEM,
  data: values,
});

export const updateGroceryList = (values) => ({
  type: CONSTANTS.UPDATE_GROCERY_LIST,
  data: values,
});

export const getGroceryList = () => ({
  type: CONSTANTS.GET_GROCERY_LIST,
});

export const deleteGroceryItem = (values) => ({
  type: CONSTANTS.DELETE_GROCERY_LIST,
  data: values,
});
