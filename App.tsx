import { Text, View } from "react-native";
import { MD3Theme, PaperProvider, useTheme } from "react-native-paper";

const createStyles = (theme: MD3Theme) => ({
  container: {
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 18,
  },
});

export default function App() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
    </PaperProvider>
  );
}
