import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import popular from "../../../mock/popular.json";
import { Button, useTheme } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 260,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  controls: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default function Popular() {
  const theme = useTheme();
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${imageUrl}${popular.results[0].poster_path}` }}
        style={styles.image}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.background}
      />
      <View style={styles.controls}>
        <Text style={styles.title}>{popular.results[0].title}</Text>
        <View style={styles.btnContainer}>
          <Button
            mode="contained"
            buttonColor={theme.colors.primary}
            textColor="white"
            contentStyle={{ width: 100 }}
          >
            Play
          </Button>
          <Button
            mode="elevated"
            textColor={theme.colors.primary}
            contentStyle={{ width: 100 }}
          >
            Detail
          </Button>
        </View>
      </View>
    </View>
  );
}
