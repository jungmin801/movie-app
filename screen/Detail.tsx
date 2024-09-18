import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IMAGE_URL } from "@env";
import { Button, IconButton, MD3Theme, useTheme } from "react-native-paper";
import detailData from "../mock/detail.json";
import castData from "../mock/cast.json";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Detail: { movieId: number };
};

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProp;
};

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
    },
    backgroundImage: {
      flex: 1,
      width: "100%",
      height: 200,
      position: "relative",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "50%",
      height: 250,
    },
    cardContainer: {
      width: "85%",
      height: 424,
      backgroundColor: "#fff",
      borderRadius: 12,
      marginTop: 10,
      marginBottom: 20,
    },
    infoContainer: {
      flex: 0.6,
      padding: 20,
      flexShrink: 0,
    },
    castContainer: {
      flex: 0.4,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: theme.colors.secondaryContainer,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    titleContainer: {
      flexDirection: "row",
      gap: 10,
      justifyContent: "space-between",
      marginBottom: 10,
    },
    overViewContainer: {
      minHeight: 90,
      maxHeight: 100,
      overflow: "hidden",
    },
    overView: {
      fontSize: 12,
    },
    poster: {
      flex: 0.35,
      aspectRatio: 2 / 3,
    },
    textContainer: {
      flex: 0.65,
      paddingLeft: 10,
    },
    cast: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 10,
      color: theme.colors.primary,
    },
    profileContainer: {
      width: 60,
      marginRight: 20,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginBottom: 6,
    },
    castName: {
      fontSize: 12,
      textAlign: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.colors.primary,
    },
    voteContainer: {
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
    },
    voteAvg: {
      backgroundColor: theme.colors.primaryContainer,
      borderRadius: 50,
      padding: 4,
      color: theme.colors.primary,
      fontWeight: "700",
    },
    voteCnt: {
      color: theme.colors.secondary,
      fontSize: 12,
    },
    infoText: {
      fontSize: 12,
    },
    backBtn: {
      width: 30,
      height: 30,
      backgroundColor: theme.colors.secondaryContainer,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default function Detail({ navigation }: DetailScreenProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const actors = castData.cast
    .filter((v) => v.known_for_department === "Acting")
    .slice(0, 10);
  const director = castData.crew.filter((v) => v.job === "Director");

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ width: undefined, height: 200, resizeMode: "cover" }}
        style={styles.backgroundImage}
        source={{ uri: `${IMAGE_URL}/w500/${detailData.backdrop_path}` }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.background}
        />
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "85%" }}>
            <IconButton
              icon="chevron-left"
              size={30}
              onPress={() => navigation.navigate("Home")}
              style={styles.backBtn}
              mode="contained"
            />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.titleContainer}>
                <Image
                  style={styles.poster}
                  source={{ uri: `${IMAGE_URL}/w92/${detailData.poster_path}` }}
                />
                <View style={styles.textContainer}>
                  <View style={styles.voteContainer}>
                    <Text style={styles.voteAvg}>
                      {Number(detailData.vote_average).toFixed(1)}
                    </Text>
                    <Text style={styles.voteCnt}>{detailData.vote_count}</Text>
                  </View>
                  <Text
                    style={styles.title}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {detailData.title}
                  </Text>
                  {director.map((v) => (
                    <Text key={v.id} style={styles.infoText}>
                      {v.name}
                    </Text>
                  ))}
                  <Text
                    style={styles.infoText}
                  >{`${detailData.runtime} min`}</Text>
                  <Text style={styles.infoText}>{detailData.release_date}</Text>
                </View>
              </View>
              <View style={styles.overViewContainer}>
                <Text
                  style={styles.overView}
                  numberOfLines={6}
                  ellipsizeMode="tail"
                >
                  {detailData.overview}
                </Text>
              </View>
            </View>
            <View style={styles.castContainer}>
              <Text style={styles.cast}>CAST</Text>
              <ScrollView horizontal={true}>
                {actors.map((v) => (
                  <View style={styles.profileContainer} key={v.id}>
                    <Image
                      style={styles.profileImage}
                      source={{ uri: `${IMAGE_URL}/w92/${v.profile_path}` }}
                    />
                    <Text style={styles.castName}>{v.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <Button
            mode="contained"
            buttonColor={theme.colors.primary}
            textColor="white"
            contentStyle={{ width: "100%" }}
          >
            Watch Now
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
