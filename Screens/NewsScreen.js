import React from "react";
import { Text, View, StyleSheet } from "react-native";

function NewsScreen(props) {
  return (
    <View>
      <Text style={styles.text}>News Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#d8d8d8",
  },
});

export default NewsScreen;
