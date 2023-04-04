import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";
import UserScreen from "../pages/UserScreen";

import { getHeaderTitle } from "@react-navigation/elements";
import Header from "./Header";
import ProfileImage from "./ProfileImage";

const Icon = ({ children, focused }) => {
  return (
    <View
      style={{
        ...Styles.iconContainer,
        borderColor: focused ? colors.orange : colors.background,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
};

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <Header title={title} style={options.headerStyle} />;
          },
          headerShown: true,
          tabBarStyle: {
            backgroundColor: colors.background,
            height: 70,
            paddingTop: 7,
            borderTopWidth: 0,
            paddingBottom: 7,
            elevation: 0,
          },
          tabBarItemStyle: {
            justifyContent: "space-around",
          },
          tabBarLabelStyle: {
            fontSize: 14,
            // fontWeight: "600",
            fontFamily: "texla-bold",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconType;
            let iconColor;
            let isFocused;
            iconColor = colors.darkGray;
            if (route.name === "Home") {
              return (
                <Icon focused={focused}>
                  <FontAwesome name="home" size={25} color={iconColor} />
                </Icon>
              );
            } else if (route.name === "My Team") {
              return (
                <Icon focused={focused}>
                  <FontAwesome name="group" color={iconColor} size={21} />
                </Icon>
              );
            } else if (route.name === "Settings") {
              return (
                <Icon focused={focused}>
                  <FontAwesome name="cog" size={23} color={iconColor} />
                </Icon>
              );
            } else if ((route.name = "My Space")) {
              return (
                <View
                  style={{
                    borderRadius: 1000,
                    borderWidth: 1.5,
                    borderColor: focused ? colors.orange : colors.background,
                  }}
                >
                  <ProfileImage size={38} />
                </View>
              );
            }

            return (
              <Icon
                iconType={iconType}
                iconName={iconName}
                focused={isFocused}
              />
            );
          },
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.darkGray,
        })}
      >
        <Tab.Screen component={UserScreen} name="Home" />
        <Tab.Screen component={UserScreen} name="My Space" />
        <Tab.Screen component={UserScreen} name="My Team" />
        <Tab.Screen component={UserScreen} name="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 35 / 2,
    borderWidth: 1.5,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});

export default Navigation;
