import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Movies = ({ navigation }) => {
  return (
    <View>
      <Text>ini movie list</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
        <Text>ke movie detail </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Movies;
