import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import { Feather, Fontisto, MaterialIcons } from "@expo/vector-icons";

function Header(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Feather name="arrow-left" color={colors.darkGray} size={23} />

        <Text style={Styles.title}>{props.title}</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Fontisto name="search" color={colors.darkGray} size={18} />
        <MaterialIcons name="notifications" color={colors.darkGray} size={23} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.grey,
    marginTop: 30,
    height: 50,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
    marginBottom: 6,
  },
  title: {
    color: colors.orange,
    // fontWeight: "700",
    fontFamily: "texla-bold",
    fontSize: 18,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "35%",
    justifyContent: "space-around",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "22%",
    marginLeft: "auto",
    marginRight: 13,
    justifyContent: "space-around",
  },
});

export default Header;
