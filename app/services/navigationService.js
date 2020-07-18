import { CommonActions, StackActions } from "@react-navigation/native";

let navigation;

const setNavigation = (nav) => {
  navigation = nav;
};

const navigate = (route, params) => {
  navigation.dispatch(CommonActions.navigate(route, params));
};

const reset = (route, params) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route, params }],
    })
  );
};

const goBack = () => {
  navigation.dispatch(CommonActions.goBack());
};

const popToTop = () => {
  navigation.dispatch(StackActions.popToTop());
};

export default {
  setNavigation,
  navigate,
  reset,
  goBack,
  popToTop,
};
