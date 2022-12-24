import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { instance } from "../bin/axios";
import { color } from "../bin/default/color";
import CardMovieItem from "../components/CardMovieItem";

const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingMovie = async () => {
    try {
      const { data } = await instance({
        url: `/movie/popular`,
      });
      setMovies(data.results)
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchingMovie()
    setLoading(false)
  }, []);

  if(loading) return <ActivityIndicator size={"large"} color={color.secondary}/>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Movie</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => CardMovieItem({ navigation , item})}
        keyExtractor={(_, index) => index}
      />
      <View style={styles.card}></View>
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
  card: {
    margin: 10,
  },
});

export default Movies;
