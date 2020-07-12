import React, { Component } from "react";
import SignIn from "./sign-in/sign-in";
import SignUp from "./sign-up/sign-up";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class AuthComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "Sign In" }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
