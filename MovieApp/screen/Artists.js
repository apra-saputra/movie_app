import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Artists = ({navigation}) => {
  return (
    <View>
      <Text>Ini list artist</Text>
      <TouchableOpacity onPress={() => navigation.navigate("DetailArtist")}>
        <Text>ke artist detail </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Artists;
