import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CardMovieItem = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailMovie")}>
      <View style={styles.container}>
        <Text>ini card movie</Text>
        <Text>ke movie detail </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 100,
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom: 10
  },
});

export default CardMovieItem;
