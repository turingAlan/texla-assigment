import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import SubHeader from "./SubHeader";

function RouteCard(props) {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={props.background}
        resizeMode="cover"
        style={Styles.backgroundImage}
      >
        <SubHeader heading={props.heading} />
      </ImageBackground>
    </View>
  );
}

export default RouteCard;

const Styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    height: 160,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
});
