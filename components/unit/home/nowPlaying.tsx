import { Image, ScrollView, Text, View } from "react-native";
import { MD3Theme, useTheme } from "react-native-paper";
import nowPlaying from "../../../mock/nowPlaying.json";

const createStyles = (theme: MD3Theme) => ({
  container: {
    padding: 16,
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700" as "700",
    marginBottom: 10,
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 92,
    aspectRatio: 2 / 3,
  },
});

export default function NowPlaying() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const imageUrl = "https://image.tmdb.org/t/p/w92";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      <ScrollView horizontal={true}>
        {nowPlaying.results.map((movie) => {
          return (
            <View style={styles.item} key={movie.id}>
              <Image
                style={styles.image}
                source={{ uri: `${imageUrl}${movie.poster_path}` }}
              ></Image>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
