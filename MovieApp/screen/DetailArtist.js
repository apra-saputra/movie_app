import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { instance } from "../bin/axios";
import { color } from "../bin/default/color";
import CardCastDetail from "../components/CardCastDetail";

const DetailArtist = ({ navigation, route }) => {
  const { castid } = route.params;
  const [keyCastId, setKeyCastId] = useState("");
  const [castById, setCastById] = useState({});
  const [castInMovie, setCastInMovie] = useState([]);
  const [loadingCast, setLoadingCast] = useState(true);
  const [errorCast, setErrorCast] = useState("");

  const fetchCastById = async (castid) => {
    try {
      const person = await instance(`/person/${castid}`);
      const movieCreadit = await instance(`/person/${castid}/movie_credits`);
      setLoadingCast(false);
      setCastById(person.data);
      setCastInMovie(movieCreadit.data.cast);
    } catch (error) {
      setErrorCast(error);
    }
  };

  useEffect(() => {
    if (keyCastId !== castid) setLoadingCast(true);

    if (loadingCast) {
      fetchCastById(castid);
      setKeyCastId(castid);
    }
  }, [castid]);

  if (loadingCast)
    return <ActivityIndicator size={"large"} color={color.secondary} />;
  if (errorCast) return <Text>error : {errorCast}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView>
        <CardCastDetail
          cast={castById}
          route={route}
          castInMovie={castInMovie}
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
