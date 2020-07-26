import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
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

const OnlineUsers = () => {
  const onlineUsers = useSelector((state) => state.onlineUsers);
  console.log(onlineUsers);
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.email} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onlineUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default OnlineUsers;
