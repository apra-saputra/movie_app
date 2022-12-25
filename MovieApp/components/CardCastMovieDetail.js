import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { color } from "../bin/default/color";
import { imageLink } from "../bin/default/constant";

const CardCastMovieDetail = ({ item, navigation, route }) => {
  const { name } = route;
  return (
    <View>
      {name === "DetailMovie" ? (
        <TouchableOpacity
          style={styles.boxArtist}
          onPress={() =>
            navigation.navigate("DetailArtist", { castid: item.id })
          }>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>As</Text>
          <Text style={styles.text}>{item.character}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.box}
          onPress={() =>
            navigation.navigate("DetailMovie", { itemid: item.id })
          }>
          <Image
            source={{ uri: imageLink.imglink + item.poster_path }}
            style={{
              height: 100,
              width: 60,
              resizeMode: "contain",
              textAlign: "center",
            }}
          />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 180,
    margin: 5,
    minWidth: "100%",
    maxWidth: 80,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  boxArtist: {
    height: 65,
    backgroundColor: color.primary,
    margin: 5,
    maxWidth: "100%",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    flexWrap: "wrap",
  },
});

export default CardCastMovieDetail;
