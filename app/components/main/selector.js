import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AuthComponents from "./../authenticate/auth-components";
import Main from "./main";
import { authentication } from "./../../services/firebase";
import { actionSetSession, actionCloseSession } from "./../../store/ACTIONS";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  user: state.reducerSession,
});

const mapDispachToPros = (dispatch) => ({
  authentication: () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        dispatch(actionSetSession(user));
      } else {
        dispatch(actionCloseSession());
      }
    });
  },
});

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.authentication();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? <Main /> : <AuthComponents />}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispachToPros)(Selector);
