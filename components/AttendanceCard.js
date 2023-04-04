import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../constants/colors";

function AttendanceCard(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        ...Styles.cardContainer,
        width: (windowWidth - 24) / 3,
        backgroundColor: props.backgroundColor,
      }}
    >
      <View style={{ ...Styles.iconContianer, borderColor: props.borderColor }}>
        {props.icon}
      </View>
      <View style={Styles.textContainer}>
        <View style={Styles.topTextContainer}>
          <Text style={Styles.daysText}>{props.days}</Text>
        </View>
        <View style={Styles.lowerTextContainer}>
          <Text style={Styles.lowerText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
}

export default AttendanceCard;

const Styles = StyleSheet.create({
  cardContainer: {
    height: 73,
    borderRadius: 4,
    paddingHorizontal: 3,
    flexDirection: "row",
    marginHorizontal: 2,
    marginVertical: 4,
  },
  iconContianer: {
    height: 35,
    width: 35,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 40 / 2,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 4,
    width: 68,
    alignItems: "center",
    alignContent: "center",
  },
  topTextContainer: {
    marginTop: 8,
    height: 28,
    justifyContent: "center",
  },
  daysText: {
    fontFamily: "texla-medium",

    // fontWeight: "700",
    fontSize: 19,
  },
  lowerTextContainer: {
    height: 34,
    width: "100%",
    padding: 0,
  },
  lowerText: {
    textAlign: "center",
    fontSize: 11,
    color: colors.darkGray,
    fontFamily: "texla-medium",
    // fontWeight: "500",
  },
});
