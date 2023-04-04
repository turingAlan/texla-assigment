import { StyleSheet, Text, View, ViewBase } from "react-native";
import PageContainer from "./components/PageLayout";
import Navigation from "./components/Navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "texla-bold": require("./assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
    "texla-medium": require("./assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    "texla-light": require("./assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    "texla-regular": require("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
