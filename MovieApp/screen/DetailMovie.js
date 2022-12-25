import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";
import { instance } from "../bin/axios";
import { color } from "../bin/default/color";
import CardMovieDetail from "../components/CardMovieDetail";

const DetailMovie = ({ route, navigation }) => {
  const { itemid } = route.params;
  const [keyId, setKeyId] = useState("");
  const [movieById, setMovieById] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [casts, setCasts] = useState([]);

  const fetchMovieById = async (id) => {
    try {
      const movie = await instance(`/movie/${id}`);
      const casts = await instance(`/movie/${id}/credits`);
      setLoading(false);
      setMovieById(movie.data);
      setCasts(casts.data.cast);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (itemid !== keyId) setLoading(true);

    if (loading || itemid !== keyId) {
      fetchMovieById(itemid);
      setKeyId(itemid);
    }
  }, [itemid]);

  if (loading)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (error) return <Text>Error : {error}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView>
        <CardMovieDetail
          casts={casts}
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
