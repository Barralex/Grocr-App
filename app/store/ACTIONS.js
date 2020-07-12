import CONSTANTS from "./CONSTANTS";

export const actionRegister = (values) => ({
  type: CONSTANTS.REGISTER,
  data: values,
});

export const actionLogin = (values) => ({
  type: CONSTANTS.LOGIN,
  data: values,
});

export const actionLogout = (values) => ({
  type: CONSTANTS.LOGOUT,
  data: values,
});

export const actionSetSession = (user) => ({
  type: CONSTANTS.SET_SESSION,
  user,
});

export const actionCloseSession = () => ({
  type: CONSTANTS.CLOSE_SESSION,
});
