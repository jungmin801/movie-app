import { View } from "react-native";
import NowPlaying from "../components/unit/home/nowPlaying";
import Popular from "../components/unit/home/popular";

export default function Home() {
  return (
    <View>
      <Popular />
      <NowPlaying />
    </View>
  );
}
