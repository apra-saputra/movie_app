import { useQuery } from "@apollo/client";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { color } from "../bin/default/color";
import { GET_ALL_CASTS } from "../bin/query";
import CardCastItem from "../components/CardCastItem";

const Artists = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ALL_CASTS);

  if (loading)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (error) return <Text>error</Text>;

  const casts = data.getCast;

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {casts?.map((item) => {
            return (
              <CardCastItem key={item.id} navigation={navigation} item={item} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    shadowColor: "#000",
    shadowOpacity: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Artists;
