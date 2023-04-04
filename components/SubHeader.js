import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function SubHeader(props) {
  return (
    <>
      <View style={Styles.topContainer}>
        <View style={Styles.topTextContainer}>
          <Text style={Styles.headingText}>{props.heading}</Text>
          <Text style={Styles.daysText}>{props.subHeading}</Text>
        </View>
        <View style={Styles.iconContainer}>
          <Feather name="arrow-right" size={23} color={colors.orange} />
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 6,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  topTextContainer: {
    width: 230,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: "auto",
  },
  headingText: {
    // fontWeight: "600",
    fontFamily: "texla-medium",
    fontSize: 15,
  },
  daysText: {
    // fontWeight: "500",
    fontFamily: "texla-medium",
    color: "#909ba5",
    fontSize: 13,
  },
});
