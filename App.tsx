import { PaperProvider } from "react-native-paper";
import Home from "./screen/Home";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  rootContainer: {
    height: "100%",
    backgroundColor: "black",
  },
});

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.rootContainer}>
        <Home />
      </View>
    </PaperProvider>
  );
}
