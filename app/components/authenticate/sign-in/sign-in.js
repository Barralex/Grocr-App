import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> sign-in </Text>
        <Button
          title="Go to Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}
