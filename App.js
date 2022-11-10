import { StyleSheet, Text, View, StatusBar } from "react-native";
import NewsContextProvider from "./api/context";
import Tabs from "./components/Tabs";

function App() {
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

export default () => {
  return (
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  );
};
