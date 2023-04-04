import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../constants/colors";

function ProfileImage(props) {
  return (
    <View
      style={{
        height: props.size,
        width: props.size,
        borderRadius: props.size / 2,
        backgroundColor: colors.gray,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: props.size, width: props.size }}
        source={require("../assets/profile.png.webp")}
      />
    </View>
  );
}

export default ProfileImage;

const Styles = StyleSheet.create({});
