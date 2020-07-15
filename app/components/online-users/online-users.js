import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    email: "luisbarral22@hotmail.com",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.email} />;

export default class OnlineUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </SafeAreaView>
    );
  }
}
