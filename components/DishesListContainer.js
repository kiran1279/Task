import { FlashList } from "@shopify/flash-list";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DishesList from "./DishesList";
import { dishes } from "../assets/data/data";

const DishesListContainer = () => {


  const renderDish = ({ item }) => (
    <DishesList
      image={item.image}
      dishName={item.dishName}
      key={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Eat what makes you happy</Text>
      <FlashList
        horizontal
        data={dishes}
        renderItem={renderDish}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default DishesListContainer;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    alignSelf: "center",
    paddingTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dishes: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
});
