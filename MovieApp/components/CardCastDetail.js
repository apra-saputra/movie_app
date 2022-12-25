import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { color } from "../bin/default/color";
import { imageLink } from "../bin/default/constant";
import CardCastMovieDetail from "./CardCastMovieDetail";

const CardCastDetail = ({ cast, route, castInMovie, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.title}>{cast.name}</Text>

        <Image
          source={{ uri: imageLink.imglink + cast.profile_path }}
          style={styles.img}
        />
      </View>
      <View style={styles.contentMovie}>
        <Text style={styles.textTitle}>Movie :</Text>
        <FlatList
          onEndReachedThreshold={0.5}
          data={castInMovie}
          horizontal={true}
          style={{ backgroundColor: color.primary }}
          renderItem={({ item }) =>
            CardCastMovieDetail({ item, navigation, route })
          }
          keyExtractor={(_, idx) => idx}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Biography : </Text>
        <Text>{cast.biography}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    padding: 5,
    margin: 5,
    minWidth: "100%",
    maxWidth: 300,
  },
  card: {
    padding: 5,
    margin: 5,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 3,
    overflow: "hidden",
  },
  content: {
    padding: 10,
    marginTop: 5,
  },
  contentMovie: {
    marginTop: 5,
  },
  contentGenre: {
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    height: 230,
    width: 190,
    textAlignVertical: "center",
    flexWrap: "wrap",
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    alignContent: "center",
  },
  buttonFalse: {
    padding: 10,
    backgroundColor: "red",
    margin: 10,
    borderRadius: 10,
  },
  button: {
    padding: 10,
    backgroundColor: color.primary,
    margin: 10,
    borderRadius: 10,
  },
  tag: {
    padding: 10,
    backgroundColor: color.secondary,
    margin: 10,
    borderRadius: 10,
  },
  img: {
    height: 220,
    width: 150,
    marginTop: 10,
    marginLeft: 10,
    resizeMode: "contain",
    overflow: "visible",
  },
});

export default CardCastDetail;
