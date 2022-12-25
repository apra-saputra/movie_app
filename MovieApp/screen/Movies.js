import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { color } from "../bin/default/color";
import { GET_ALL_MOVIE } from "../bin/query";
import CardMovieItem from "../components/CardMovieItem";

const Movies = ({ navigation }) => {
  const categories = [
    "popular",
    "top_rated",
    "latest",
    "now_playing",
    "upcoming",
  ];
  const [keyword, setKeyword] = useState("popular");

  const { loading, error, data } = useQuery(GET_ALL_MOVIE, {
    variables: { category: keyword },
  });

  // console.log(error);

  if (loading)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (error) return <Text>error </Text>;

  const movies = data.getMovies;

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={{ marginBottom: 10 }}>
        {categories.map((item, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={item == keyword ? styles.tagActive : styles.tag}
              onPress={() => setKeyword(item)}>
              <Text style={item == keyword ? styles.titleActive : styles.title}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {!movies ? (
        <View
          style={{
            height: 400,
            textAlignt: "center",
            width: "100%",
            elevation: 3,
            backgroundColor: " #fff",
          }}>
          <Text style={styles.titleNoData}>Tidak ada Film di kategori ini</Text>
        </View>
      ) : (
        <FlatList
          onEndReachedThreshold={0.5}
          data={movies}
          renderItem={({ item }) => CardMovieItem({ navigation, item })}
          keyExtractor={(_, index) => index}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: "#fff",
  },
  titleNoData: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    color: "black",
  },
  titleActive: {
    fontSize: 40,
    color: "#fff",
  },
  card: {
    margin: 10,
  },
  tag: {
    padding: 10,
    backgroundColor: color.primary,
    margin: 10,
    height: 70,
    borderRadius: 10,
  },
  tagActive: {
    padding: 10,
    backgroundColor: color.secondary,
    margin: 10,
    height: 70,
    borderRadius: 7,
  },
});

export default Movies;
