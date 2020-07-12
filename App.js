import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./app/store/store";
import { Provider } from "react-redux";
import Selector from "./app/components/main/selector";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <Selector />
    </Provider>
  );
}
