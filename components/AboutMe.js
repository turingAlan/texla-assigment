import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Profile from "./ProfileImage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AboutMe(props) {
  return (
    <View style={Styles.container}>
      <Profile size={100} />
      <View style={Styles.infoContainer}>
        <Text style={Styles.name}>{props.name}</Text>
        <Text style={Styles.info}>{props.role}</Text>
        <Text style={Styles.info}>{props.phone}</Text>
      </View>
      <MaterialCommunityIcons name="eye" color={colors.orange} size={23} />
    </View>
  );
}

export default AboutMe;

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.lightOrange,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
  },
  infoContainer: {
    marginLeft: 40,
    marginRight: "auto",
    marginTop: 14,
  },
  name: {
    fontFamily: "texla-bold",
    color: colors.orange,
    fontSize: 20,
    // fontWeight: "700",
    marginBottom: 3,
  },
  info: {
    // fontWeight: "500",
    fontFamily: "texla-medium",
    marginBottom: 1,
  },
});
