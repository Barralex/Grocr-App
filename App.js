import React from "react";
import store from "./app/store/store";
import { Provider } from "react-redux";
import Selector from "./app/components/main/selector";
import { YellowBox } from "react-native";
import FullScreenLoading from "./app/helpers/full-screen-loading";

export default function App() {
  YellowBox.ignoreWarnings(["Setting a timer"]);

  return (
    <Provider store={store}>
      <Selector />
      <FullScreenLoading />
    </Provider>
  );
}
