import React from "react";
import { View, StyleSheet, Image } from "react-native";

const HeaderCustom = () => {
  return (
    <View
      style={styles.container}>
      <Image
        source={require("../assets/head_logo.png")}
        style={{ height: 120, width: 100 , resizeMode: "contain"}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: 350,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
});

export default HeaderCustom;
