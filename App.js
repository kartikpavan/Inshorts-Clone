import { StyleSheet, Text, View, StatusBar } from "react-native";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#191A19",
  },
});
