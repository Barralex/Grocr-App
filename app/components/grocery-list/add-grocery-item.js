import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { actionSetItem } from "../../store/ACTIONS";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  textInput: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: "#DCDDCD",
    height: 2,
  },
});

const AddGroceryItem = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducerSession);

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <Text>Type what you want to buy</Text>
        <TextInput onChangeText={(text) => setText(text)} />
        <View style={styles.line} />
      </View>
      <Button
        title="Save"
        onPress={() =>
          dispatch(
            actionSetItem({
              name: text,
              addByUser: user.email,
              done: false,
            })
          )
        }
      />
    </View>
  );
};

export default AddGroceryItem;
