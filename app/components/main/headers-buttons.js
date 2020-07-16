import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const OnlineUsersButton = (navigation, usersNumber) => {
  const styles = StyleSheet.create({
    userNumbers: {
      fontSize: 20,
      marginLeft: 8,
    },
  });

  return () => (
    <TouchableOpacity onPress={() => navigation.navigate("OnlineUsers")}>
      <Text style={styles.userNumbers}>{usersNumber}</Text>
    </TouchableOpacity>
  );
};

export const AddNewItemButton = (setItem, values) => {
  return () => (
    <TouchableOpacity onPress={() => setItem(values)}>
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
