import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SignUpForm from "./sign-up-form";
import { actionRegister } from "../../../store/ACTIONS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  signUpForm: {
    marginTop: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    default: null,
  };
};

const mapDispachToPros = (dispatch) => {
  return {
    register: (values) => {
      dispatch(actionRegister(values));
    },
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  userRegistration = (values) => {
    this.props.register(values);
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SignUpForm register={this.userRegistration} />
        <View style={styles.signUpForm} />
        <Button
          title="Go to Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispachToPros)(SignUp);
