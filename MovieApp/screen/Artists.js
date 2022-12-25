import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { instance } from "../bin/axios";
import { color } from "../bin/default/color";
import CardCastItem from "../components/CardCastItem";

const Artists = ({ navigation }) => {
  const [casts, setCasts] = useState([]);
  const [loadingCasts, setLoadingCasts] = useState(true);
  const [errorCasts, setErrorCasts] = useState("");

  const fetchCasts = async () => {
    try {
      const { data } = await instance("/person/popular");
      setLoadingCasts(false);
      setCasts(data.results);
    } catch (error) {
      setErrorCasts(error);
    }
  };

  useEffect(() => {
    fetchCasts();
  }, []);

  if (loadingCasts)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (errorCasts) return <Text>error : {errorCasts}</Text>;

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
