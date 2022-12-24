import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { imageLink } from "../bin/default/constant";

const CardMovieItem = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailMovie", { itemid: item.id })}>
      <View style={styles.container}>
        <Image
          source={{
            uri: imageLink.imglink + item.poster_path,
          }}
          style={styles.imgCard}
        />
        <View style={styles.content}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>Rating : {item.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    minHeight: 240,
    maxHeight: 300,
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
  },
  imgCard: {
    resizeMode: "contain",
    overflow: "visible",
    width: "100%",
    height: 200,
    marginRigth: 50,
    justifyContent: "center",
    borderRadius: 5,
  },
  content: {
    flexDirection: "row",
    marginTop: 7,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default CardMovieItem;
