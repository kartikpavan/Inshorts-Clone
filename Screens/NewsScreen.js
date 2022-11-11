import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useGlobalContext } from "../api/context";
import Carousel from "react-native-new-snap-carousel";
import SingleNews from "../components/SingleNews";

function NewsScreen() {
  const [activeIndex, setActiveIndex] = useState();
  const { news } = useGlobalContext();
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={styles.carousel}>
      <Carousel
        layout={"default"}
        layoutCardOffset={9}
        data={news}
        sliderWidth={300}
        itemWidth={300}
        vertical={true}
        sliderHeight={300}
        itemHeight={windowHeight}
        renderItem={({ item, index }) => <SingleNews item={item} index={index} />}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#191A19",
  },
  carousel: {
    flex: 1,
    backgroundColor: "#191A19",
  },
});

export default NewsScreen;
