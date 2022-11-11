import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Linking from "expo-linking";
import { useGlobalContext } from "../api/context";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SingleNews = ({ item, index }) => {
  const { darkTheme } = useGlobalContext();
  return (
    <View
      style={{
        justifyContent: "space-between",
        height: windowHeight - 70,
        width: windowWidth,
        backgroundColor: darkTheme ? "#191A19" : "#D8E9A8",
      }}
    >
      <View>
        <Image
          source={{ uri: item.urlToImage }}
          style={{ ...styles.mainImage, width: windowWidth }}
        />
        <Text style={{ ...styles.title, color: darkTheme ? "#f6f2e8" : "#191A19" }}>
          {item.title}
        </Text>
        <Text style={{ ...styles.content, color: darkTheme ? "#f6f2e8" : "#191A19" }}>
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "#f6f2e8" : "#191A19", margin: 5 }}>
          Source:
          <Text style={{ color: darkTheme ? "#D8E9A8" : "#1E5128" }}>
            {item.author ?? "Unknown"}
          </Text>
        </Text>
      </View>
      <ImageBackground blurRadius={50} style={styles.footer} source={{ uri: item.urlToImage }}>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ color: "white" }}>'{item.title.slice(0, 45)}...'</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>Read more </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25,
    margin: 5,
  },
  mainImage: {
    height: "45%",
    resizeMode: "cover",
  },
  content: {
    margin: 5,
    fontSize: 18,
    paddingBottom: 10,
  },
  footer: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});

export default SingleNews;
