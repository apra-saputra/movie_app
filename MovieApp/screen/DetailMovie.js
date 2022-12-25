import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";
import { color } from "../bin/default/color";
import { GET_MOVIE_BY_ID } from "../bin/query";
import CardMovieDetail from "../components/CardMovieDetail";

const DetailMovie = ({ route, navigation }) => {
  const { itemid } = route.params;

  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { getMovieByIdId: itemid },
  });

  const movieById = data?.getMovieById;

  if (loading)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (error) return <Text>Error : {error}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView>
        <CardMovieDetail
          casts={movieById.cast}
          movieById={movieById}
          navigation={navigation}
          route={route}
        />
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
    padding: 10,
  },
});

export default DetailMovie;
