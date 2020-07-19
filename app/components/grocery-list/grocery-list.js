import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import navigationService from "../../services/navigationService";
import { useSelector } from "react-redux";

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

const Item = ({ name, owner }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{owner}</Text>
  </View>
);

const renderItem = ({ item }) => <Item name={item.name} owner={item.owner} />;

const GroceryList = ({ navigation }) => {
  const groceryItems = useSelector((state) => state.reducerGroceryItems);
  console.log(groceryItems);
  React.useEffect(() => {
    navigationService.setNavigation(navigation);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groceryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default GroceryList;
