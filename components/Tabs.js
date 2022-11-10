import React, { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNav from "./TopNav";

const renderScene = SceneMap({
  first: DiscoverScreen,
  second: NewsScreen,
});

function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNav index={index} setIndex={setIndex} />}
    />
  );
}

export default Tabs;
