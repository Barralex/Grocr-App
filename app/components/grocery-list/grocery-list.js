import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import navigationService from "../../services/navigationService";
import { useSelector, useDispatch } from "react-redux";
import { getGroceryList, deleteGroceryItem } from "../../store/ACTIONS";

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
  owner: {
    fontSize: 12,
    color: "#A9A9A9",
  },
});

const GroceryList = ({ navigation }) => {
  const groceryItems = useSelector((state) => state.reducerGroceryItems);
  const dispatch = useDispatch();

  React.useEffect(() => {
    navigationService.setNavigation(navigation);
    dispatch(getGroceryList());
  }, [navigation]);

  const Item = ({ title, owner }) => (
    <TouchableOpacity
      style={styles.item}
      onLongPress={() => dispatch(deleteGroceryItem(title))}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.owner}>{owner}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return <Item title={item.title} owner={item.owner} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groceryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        on
      ></FlatList>
    </SafeAreaView>
  );
};

export default GroceryList;
