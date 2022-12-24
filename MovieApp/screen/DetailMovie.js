import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardMovieDetail from "../components/CardMovieDetail";

const DetailMovie = ({ route, navigation }) => {
  const { itemid } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardMovieDetail itemid={itemid} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    maxHeight: 600,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default DetailMovie;
