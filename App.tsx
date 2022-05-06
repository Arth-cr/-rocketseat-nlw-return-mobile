import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
import { theme } from "./src/theme";
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import Widget from "./src/components/Widget";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
