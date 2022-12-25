import { useQuery } from "@apollo/client";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { color } from "../bin/default/color";
import { GET_CAST_BY_ID } from "../bin/query";
import CardCastDetail from "../components/CardCastDetail";

const DetailArtist = ({ navigation, route }) => {
  const { castid } = route.params;
  const { loading, error, data } = useQuery(GET_CAST_BY_ID, {
    variables: { getCastByIdId: castid },
  });

  if (loading)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (error) return <Text>error </Text>;

  const castById = data.getCastById;

  return (
    <View style={styles.container}>
      <ScrollView>
        <CardCastDetail
          cast={castById}
          route={route}
          castInMovie={castById.movie}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    maxHeight: 500,
    padding: 10,
    elevation: 3,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailArtist;
