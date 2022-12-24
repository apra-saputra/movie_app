import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CardMovieItem from "../components/CardMovieItem";

const Movies = ({navigation}) => {
  const DATA = ["1", "2", "3"];
  return (
    <View>
      <Text>ini movie list</Text>
      <View style={styles.card} >
        <FlatList
          data={DATA}
          renderItem={()=> CardMovieItem({navigation})}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,

  },
});

export default Movies;
