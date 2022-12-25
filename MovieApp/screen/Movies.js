import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { instance } from "../bin/axios";
import { color } from "../bin/default/color";
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  const fetchingMovie = async (keyword) => {
    try {
      const { data } = await instance({
        url: `/movie/${keyword}`,
      });
      setLoading(false);
      setMovies(data.results);
    } catch (error) {
      setErrors(error);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchingMovie(keyword);
    }
  }, [keyword]);

  if (loading)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (errors) return <Text>error : {errors}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={{ marginBottom: 10 }}>
        {categories.map((item, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={item == keyword ? styles.tagActive : styles.tag}
              onPress={() => (setKeyword(item), setLoading(true))}>
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
            // flex: 1,
            height: 400,
            textAlignt: "center",
            width: "100%",
            elevation: 3,
            backgroundColor: " #fff",
          }}>
          <Text style={styles.title}>Tidak ada Film di kategori ini</Text>
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
    backgroundColor: color.tertiary,
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
