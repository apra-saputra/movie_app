import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "../bin/default/color";

const CardCastMovieDetail = ({ item, navigation }) => {
  //   console.log(item);
  return (
    <View>
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          navigation.navigate("DetailArtist", { itemid: item.id })
        }>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>As</Text>
        <Text style={styles.text}>{item.character}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
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
  },
});

export default CardCastMovieDetail;
