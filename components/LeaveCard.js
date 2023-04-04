import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

function LeaveCard({ data }) {
  return (
    <View style={Styles.container}>
      <View
        style={{
          ...Styles.headingContainer,
          backgroundColor: data.headingColor,
        }}
      >
        <Text style={Styles.headerText}>{data.heading}</Text>
      </View>
      <View
        style={{
          ...Styles.lowerContainer,
          backgroundColor: data.backgroundColor,
        }}
      >
        <View style={Styles.leftContainer}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "texla-bold",
            }}
          >
            {data.left}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "texla-medium",
              color: "#79868f",
            }}
          >
            Left
          </Text>
        </View>
        <View style={Styles.descriptionContainer}>
          <View style={Styles.descriptionList}>
            <Text
              style={{
                color: "#79868f",
                fontSize: 14,
                fontFamily: "texla-regular",
              }}
            >
              Current Year
            </Text>
            <Text style={{ fontFamily: "texla-bold", fontSize: 15 }}>
              {data.current}
            </Text>
          </View>
          <View style={Styles.descriptionList}>
            <Text
              style={{
                color: "#79868f",
                fontSize: 14,
                fontFamily: "texla-regular",
              }}
            >
              Availed
            </Text>
            <Text style={{ fontFamily: "texla-bold", fontSize: 15 }}>
              {data.availed}
            </Text>
          </View>
          <View
            style={{
              height: 0,
              width: 168,
              alignSelf: "center",
              borderWidth: 0.5,
              borderColor: "#cccccc",
              marginBottom: 9,
            }}
          ></View>
          <View style={Styles.descriptionList}>
            <Text
              style={{
                color: "#79868f",
                fontSize: 14,
                fontFamily: "texla-regular",
              }}
            >
              Balanced
            </Text>
            <Text style={{ fontFamily: "texla-bold", fontSize: 15 }}>
              {data.balance}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LeaveCard;

const Styles = StyleSheet.create({
  container: {
    width: 180,
    height: "100%",
    marginRight: 16,
  },
  headingContainer: {
    // backgroundColor: colors.orange,
    width: "100%",
    height: "20%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  lowerContainer: {
    // backgroundColor: colors.lightOrange,
    height: "80%",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerText: {
    color: colors.whiteText,
    fontSize: 17,
    // fontWeight: "400",
    fontFamily: "texla-medium",
  },
  leftContainer: {
    alignItems: "center",
    width: "35%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  descriptionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
});
