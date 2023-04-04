import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AttendanceCard from "./AttendanceCard";
import SubHeader from "./SubHeader";

function MyAttendance(props) {
  const RuppeStrike = () => {
    return (
      <View>
        <FontAwesome name="rupee" size={18} color="#ff66fa" />
        <View
          style={{
            width: 3,
            backgroundColor: "#ff66fa",
            height: 18,
            position: "absolute",
            justifyContent: "center",
            alignContent: "center",
            transform: [{ rotate: "45deg" }],
            top: -3,
            left: 2,
          }}
        ></View>
      </View>
    );
  };

  const AttendanceData = [
    {
      icon: {
        tag: <FontAwesome5 name="calendar" size={17} color="#00b8d9" />,
        borderColor: "#86d8e8",
      },
      backgroundColor: "#f3fbfc",
      days: 20,
      text: "Total Day in Dec",
    },
    {
      icon: {
        tag: <FontAwesome name="rupee" size={17} color="#a9e42a" />,
        borderColor: "#e5ffae",
      },
      backgroundColor: "#f9ffee",
      days: 20,
      text: "Payable Days in Dec",
    },
    {
      icon: {
        tag: <Ionicons name="ios-checkmark-circle" size={21} color="#00c964" />,
        borderColor: "#ccffe7",
      },
      backgroundColor: "#f4fffa",
      days: 20,
      text: "Payment",
    },
    {
      icon: {
        tag: (
          <MaterialCommunityIcons
            name="bag-checked"
            size={20}
            color="#e86100"
          />
        ),
        borderColor: "#ffc89f",
      },
      backgroundColor: "#fff9f5",
      days: 20,
      text: "On Duty",
    },
    {
      icon: {
        tag: (
          <MaterialCommunityIcons
            name="calendar-week-begin"
            size={18}
            color="#6eadff"
          />
        ),
        borderColor: "#c3ddff",
      },
      backgroundColor: "#f9fbff",
      days: 20,
      text: "Week Off",
    },
    {
      icon: {
        tag: <Fontisto name="holiday-village" size={16} color="#dfd712" />,
        borderColor: "#fcff69",
      },
      backgroundColor: "#feffeb",
      days: 20,
      text: "Holiday",
    },
    {
      icon: {
        tag: <AntDesign name="exclamation" size={21} color="#f63d7d" />,
        borderColor: "#f5dde0",
      },
      backgroundColor: "#fdf8f8",
      days: 20,
      text: "Leave",
    },
    {
      icon: {
        tag: <RuppeStrike />,
        borderColor: "#fed3ff",
      },
      backgroundColor: "#fef6ff",
      days: 20,
      text: "Leave Without Pay",
    },
    {
      icon: {
        tag: <MaterialIcons name="cancel" size={21} color="#ff2e2e" />,
        borderColor: "#ffcaca",
      },
      backgroundColor: "#fff4f4",
      days: 20,
      text: "Abscent",
    },
  ];
  return (
    <View style={Styles.container}>
      <SubHeader
        heading="My Attendance"
        subHeading={props.month + " " + `(${props.day}Days)`}
      />
      <View style={Styles.cardContainer}>
        {AttendanceData.map((value, index) => {
          return (
            <AttendanceCard
              key={index}
              icon={value.icon.tag}
              backgroundColor={value.backgroundColor}
              borderColor={value.icon.borderColor}
              days={value.days}
              text={value.text}
            />
          );
        })}
      </View>
    </View>
  );
}

export default MyAttendance;

const Styles = StyleSheet.create({
  container: {
    height: 320,
    width: "100%",
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 6,
  },

  cardContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: 28,
    flexWrap: "wrap",
  },
});
