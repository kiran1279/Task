import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const DishesList = (props) => {
  const { image, dishName } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.dishName}>{dishName}</Text>
    </View>
  );
};

export default DishesList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 40,
  },
  dishName: {
    fontSize: 11,
    fontWeight: "500",
    color: "#303030",
    marginTop: 10,
    textTransform: "capitalize",
  },
});
