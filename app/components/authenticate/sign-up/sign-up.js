import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> sign-up </Text>
        <Button
          title="Go to Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    );
  }
}
