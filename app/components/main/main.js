import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GroceryList from "./../grocery-list/grocery-list";
import {
  OnlineUsersButton,
  navigateToAddItem,
  SignOutButton,
} from "./headers-buttons";
import OnlineUsers from "../online-users/online-users";
import { actionLogout, actionSetItem } from "../../store/ACTIONS";
import { connect } from "react-redux";
import AddGroceryItem from "./../grocery-list/add-grocery-item";

class Main extends Component {
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
            name="GroceryList"
            component={GroceryList}
            options={({ navigation }) => ({
              title: "Grocery List",
              headerTitleAlign: "center",
              headerLeft: OnlineUsersButton(navigation, 1),
              headerRight: navigateToAddItem(navigation),
            })}
          />
          <Stack.Screen
            name="OnlineUsers"
            component={OnlineUsers}
            options={{
              title: "Online",
              headerTitleAlign: "center",
              headerRight: SignOutButton(this.props.logout),
            }}
          />
          <Stack.Screen
            name="AddGroceryItem"
            component={AddGroceryItem}
            options={{
              title: "Grocery Item",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  addItemStatus: state.reducerGroceryItems,
  user: state.user,
});

const mapDispachToPros = (dispatch) => ({
  logout: () => {
    dispatch(actionLogout());
  },
  setItem: (values) => {
    dispatch(actionSetItem(values));
  },
});

export default connect(mapStateToProps, mapDispachToPros)(Main);
