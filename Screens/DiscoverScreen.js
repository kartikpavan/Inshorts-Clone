import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { categories, sources } from "../api/api";
import { useGlobalContext } from "../api/context";
import Carousel from "react-native-new-snap-carousel";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const customItemWidth = Math.round(windowWidth / 3);

function DiscoverScreen(props) {
  const { setCategory, setSource } = useGlobalContext();

  return (
    <View style={styles.discover}>
      <Text style={{ ...styles.titleText, color: "#f6f2e8" }}>Categories</Text>
      <Carousel
        layout={"default"}
        data={categories}
        sliderHeight={100}
        sliderWidth={windowWidth}
        itemWidth={customItemWidth}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setCategory(item.name)} style={{ alignItems: "center" }}>
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text style={{ ...styles.name, color: "#f6f2e8" }}> {item.name.toUpperCase()} </Text>
          </TouchableOpacity>
        )}
      />
      <Text style={{ ...styles.titleText, color: "#f6f2e8" }}>Sources</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: windowWidth,
        }}
      >
        {sources.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSource(item.id)}
              style={{ marginHorizontal: 10 }}
            >
              <Image source={{ uri: item.pic }} style={{ height: "50%", resizeMode: "contain" }} />
              <Text style={{ color: "#f6f2e8" }}> {item.name.toUpperCase()} </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#D8E9A8",
    borderBottomWidth: 3,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  categoryImage: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default DiscoverScreen;
