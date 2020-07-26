import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignInForm from "./sign-in-form";
import {
  actionLogin,
  startLoading,
  finishLoading,
} from "../../../store/ACTIONS";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  signInForm: {
    marginTop: 8,
  },
});

const mapStateToProps = (state) => ({
  prop: state.prop,
});

const mapDispachToPros = (dispatch) => ({
  login: (values) => {
    dispatch(actionLogin(values));
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signInUser = (values) => {
    this.props.login(values);
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SignInForm signIn={this.signInUser} />
        <View style={styles.signInForm} />
        <Button
          title="Go to Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispachToPros)(SignIn);
