import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Field, reduxForm } from "redux-form";

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: "#DCDDCD",
    height: 2,
  },
  errors: {
    color: "#FF0000",
  },
});

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "required";
  } else if (values.name.length < 5) {
    errors.name = "name length should be more than 5";
  } else if (values.name.length > 20) {
    errors.name = "name length should be less than 20";
  }

  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "invalid email";
  }

  if (!values.password) {
    errors.password = "required";
  } else if (values.password.length < 5) {
    errors.password = "password length should be more than 5";
  } else if (values.password.length > 15) {
    errors.password = "password length should be less than 15";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "password must be the same";
  }

  return errors;
};

const fieldName = ({ input, placeholder, meta: { error, touched } }) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        onChangeText={input.onChange}
        placeholder={placeholder}
        value={input.value}
        keyboardType={input.name === "email" ? "email-address" : "default"}
        autoCapitalize="none"
        secureTextEntry={
          !!(input.name === "password" || input.name === "confirmPassword")
        }
        onBlur={input.onBlur}
      />
      <View style={styles.line} />
      {error && touched && <Text style={styles.errors}>{error}</Text>}
    </View>
  );
};

const SignUpForm = (props) => {
  return (
    <View style={styles.container}>
      <Field name="name" component={fieldName} placeholder="Name" />
      <Field
        name="email"
        component={fieldName}
        placeholder="Email@domain.com"
      />
      <Field name="password" component={fieldName} placeholder="Password" />
      <Field
        name="confirmPassword"
        component={fieldName}
        placeholder="Confirm password"
      />
      <Button title="Register" onPress={props.handleSubmit(props.register)} />
    </View>
  );
};

export default reduxForm({ form: "SignUpForm", validate })(SignUpForm);
