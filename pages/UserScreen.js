import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PageLayout from "../components/PageLayout";
import AboutMe from "../components/AboutMe";
import MyAttendance from "../components/MyAttendance";
import MyLeaves from "../components/MyLeaves";
import RouteCard from "../components/RouteCard";

function UserScreen() {
  return (
    <ScrollView>
      <PageLayout>
        <View>
          <AboutMe name="Sarthak Jain" role="UI Designer" phone="9119065994" />
        </View>
        <View style={Styles.attendanceContainer}>
          <MyAttendance day={31} month="March" />
        </View>
        <View style={Styles.MyLeavesContainer}>
          <MyLeaves />
        </View>
      </PageLayout>
      <View>
        <RouteCard
          heading="My Holidays"
          background={require("../assets/party.jpg")}
        />
        <RouteCard
          heading="My Task"
          background={require("../assets/My-task.png")}
        />
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  attendanceContainer: {
    marginBottom: 13,
    marginTop: 7,
  },
  MyLeavesContainer: {
    height: 200,
  },
});

export default UserScreen;
