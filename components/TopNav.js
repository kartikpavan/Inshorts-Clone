import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../api/context";

function TopNav({ index, setIndex }) {
  const { fetchNews, setDarkTheme, darkTheme } = useGlobalContext();
  return (
    <View style={styles.container}>
      {index === 0 ? (
        <TouchableOpacity style={styles.leftIcon} onPress={() => setDarkTheme((prev) => !prev)}>
          <Text style={styles.text}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#D8E9A8" />
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity style={styles.leftIcon} onPress={() => setIndex(index === 0 ? 1 : 0)}>
            <MaterialIcons name="keyboard-arrow-left" size={20} color="#D8E9A8" />
            <Text style={styles.text}>Discover</Text>
          </TouchableOpacity>
        </>
      )}
      <Text style={styles.textCenter}>{index ? "All News" : "Discover"} </Text>
      {index ? (
        <TouchableOpacity style={styles.rightIcon} onPress={() => fetchNews("general")}>
          <Text>
            <AntDesign name="reload1" size={20} color="#D8E9A8" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.leftIcon} onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={styles.text}>All News</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#D8E9A8" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0,
    shadowColor: "black",
    elevation: 10,
    backgroundColor: "#1E5128",
  },
  leftIcon: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  rightIcon: {
    width: 80,
    alignItems: "flex-end",
  },
  text: {
    color: "#D8E9A8",
    fontSize: 16,
    marginHorizontal: 0,
  },
  textCenter: {
    color: "#d8d8d8",
    fontSize: 18,
    paddingBottom: 2,
    borderBottomColor: "#D8E9A8",
    borderBottomWidth: 3,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default TopNav;
