import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const OnlineUsersButton = (navigation) => {
  return () => (
    <Text onPress={() => navigation.navigate("OnlineUsers")}> 1 </Text>
  );
};

export const AddNewItemButton = (navigation) => {
  return () => (
    <TouchableOpacity onPress={() => alert("This is a button")}>
      <Ionicons name="ios-add-circle-outline" size={32} color="black" />
    </TouchableOpacity>
  );
};

export const SignOutButton = (logout) => {
  return () => (
    <TouchableOpacity onPress={() => logout()}>
      <Text> Sign Out </Text>
    </TouchableOpacity>
  );
};
