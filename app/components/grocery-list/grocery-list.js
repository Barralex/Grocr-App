import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

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
    title: "Eggs",
    owner: "luisbarral22@hotmail.com",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Coffee",
    owner: "luisbarral22@hotmail.com",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Did I mention Coffee?",
    owner: "domenika22@hotmail.com",
  },
];

const Item = ({ title, owner }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{owner}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} owner={item.owner} />;

export default class GroceryList extends Component {
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
