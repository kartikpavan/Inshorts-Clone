import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useGlobalContext } from "../api/context";
import Carousel from "react-native-new-snap-carousel";
import SingleNews from "../components/SingleNews";

function NewsScreen() {
  const [activeIndex, setActiveIndex] = useState();
  const { news, darkTheme } = useGlobalContext();
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={{ ...styles.carousel, backgroundColor: darkTheme ? "#191A19" : "#D8E9A8" }}>
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
  carousel: {
    flex: 1,
  },
});

export default NewsScreen;
