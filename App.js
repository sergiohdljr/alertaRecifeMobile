import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { temaDark } from "./src/styles/theme/darkTheme";

export default function App() {
  return (
    <ThemeProvider theme={temaDark}>
      <View style={styles.container}>
        <TextStyle>test</TextStyle>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
