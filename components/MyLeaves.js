import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SubHeader from "./SubHeader";
import LeaveCard from "./LeaveCard";
import colors from "../constants/colors";

function MyLeaves() {
  const leaveData = [
    {
      id: 1,
      heading: "Earned Leaves",
      left: 12,
      current: "00",
      balance: "00",
      availed: "00",
      headingColor: colors.orange,
      backgroundColor: colors.lightOrange,
    },
    {
      id: 2,
      heading: "Casual Leaves",
      left: 12,
      Current: "00",
      balance: "00",
      availed: "00",
      headingColor: colors.cyan,
      backgroundColor: "#def5f9",
    },
    {
      id: 3,
      heading: "Medical Leaves",
      left: 12,
      Current: "00",
      balance: "00",
      availed: "00",
      headingColor: colors.darkBlue,
      backgroundColor: "#def5f9",
    },
  ];
  return (
    <View style={Styles.container}>
      <View style={{ paddingRight: 10 }}>
        <SubHeader heading="My Leaves" />
      </View>
      <View style={Styles.LeaveCardContainer}>
        <FlatList
          data={leaveData}
          renderItem={({ item }) => <LeaveCard data={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
        {/* <LeaveCard /> */}
      </View>
    </View>
  );
}

export default MyLeaves;

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingLeft: 10,
  },
  LeaveCardContainer: {
    marginTop: 10,
    height: "100%",
  },
});
