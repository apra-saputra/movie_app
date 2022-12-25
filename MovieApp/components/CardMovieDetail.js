import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import { color } from "../bin/default/color";
import { imageLink } from "../bin/default/constant";
import CardCastMovieDetail from "./CardCastMovieDetail";

const CardMovieDetail = ({ movieById, navigation, route, casts }) => {
  const [isRate, setIsRate] = useState(false);

  const postMovieCreadit = async () => {
    try {
      // await instance.post(`/movie/${itemid}/rating`);
      setIsRate((prev) => setIsRate(!prev));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{movieById.title}</Text>
      </View>
      <View style={styles.row}>
        <Image
          source={{ uri: imageLink.imglink + movieById.poster_path }}
          style={styles.img}
        />
        <View style={{ height: 230, width: 200, justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(movieById.homepage)}>
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
              Website
            </Text>
          </TouchableOpacity>
          {isRate ? (
            <TouchableOpacity
              style={styles.buttonFalse}
              onPress={() => postMovieCreadit()}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "600",
                }}>
                You has been rate this movie
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => postMovieCreadit()}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "600",
                }}>
                Rate
              </Text>
            </TouchableOpacity>
          )}
          <View style={styles.tag}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "600",
              }}>
              Statistic:
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "600",
              }}>
              Vote Average : {movieById.vote_average}
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "600",
              }}>
              Total Vote : {movieById.vote_count}
            </Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "600",
              }}>
              Popularity : {movieById.popularity}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Synopsis : </Text>
        <Text>{movieById.overview}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Synopsis : </Text>
        <Text>{movieById.release_date}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Genre :</Text>
        <View style={styles.contentGenre}>
          {movieById.genres?.map((item) => {
            return <Text key={item.id}> {item.name},</Text>;
          })}
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Cast :</Text>
        <FlatList
          data={casts}
          horizontal={true}
          renderItem={({ item }) =>
            CardCastMovieDetail({ item, navigation, route })
          }
          keyExtractor={(_, idx) => idx}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    padding: 5,
    margin: 5,
  },
  card: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 3,
    // overflow: "hidden",
  },
  content: {
    padding: 10,
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
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
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

export default CardMovieDetail;
