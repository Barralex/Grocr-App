import { Modal, ActivityIndicator, View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  self: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

const FullScreenLoading = () => {
  const isLoading = useSelector((state) => state.reducerLoading);

  return (
    <Modal visible={isLoading} transparent={true}>
      <View style={styles.self}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default FullScreenLoading;
