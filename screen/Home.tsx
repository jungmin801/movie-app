import { StyleSheet, View } from "react-native";
import NowPlaying from "../components/unit/home/nowPlaying";
import Popular from "../components/unit/home/popular";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Detail: { movieId: number };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default function Home({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Popular navigation={navigation} />
      <NowPlaying />
    </View>
  );
}
