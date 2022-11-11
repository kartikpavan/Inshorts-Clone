import { StyleSheet, Text, View, StatusBar } from "react-native";
import NewsContextProvider, { useGlobalContext } from "./api/context";
import Tabs from "./components/Tabs";

function App() {
  const { darkTheme } = useGlobalContext();
  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? "#191A19" : "#D8E9A8" }}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  );
};
