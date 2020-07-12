import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GroceryList from "./../grocery-list/grocery-list";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="GroceryList" component={GroceryList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
