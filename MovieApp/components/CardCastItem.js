import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { imageLink } from "../bin/default/constant";

const CardCastItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailArtist", { castid: item.id })}>
      <View style={styles.card}>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={styles.contentCard}>{item.name}</Text>
        </View>
        <Image
          style={styles.imgCard}
          source={{
            uri: imageLink.imglink + item.profile_path,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: "#fff",
    height: 250,
    width: 175,
    padding: 7,
    margin: 5,
    borderRadius: 7,
  },
  contentCard: {
    fontWeight: "700",
    textTransform: "uppercase",
    textAlignVertical: "center",
    textAlign: "center",
  },
  imgCard: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
    marginRigth: 50,
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default CardCastItem;
