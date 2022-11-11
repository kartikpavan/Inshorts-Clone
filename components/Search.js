import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useGlobalContext } from "../api/context";

const Search = () => {
  const { news, darkTheme } = useGlobalContext();
  const [search, setSearch] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const handleModal = (news) => {
    setModalOpen(true);
    setCurrentNews(news);
  };

  const handleChange = (text) => {
    if (!text) {
      setSearch([]);
      return;
    }
    setSearch(news.filter((article) => article.title.includes(text)));
  };
  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        style={{ ...styles.search, backgroundColor: darkTheme ? "#D8E9A8" : "#1E5128" }}
        placeholder="Search here"
        placeholderTextColor={darkTheme ? "#191A19" : "#D8E9A8"}
        onChangeText={(text) => handleChange(text)}
      />
      <View style={styles.searchResult}>
        {search.slice(0, 10).map((item) => (
          <TouchableOpacity key={item.title}>
            <Text style={styles.singleSearchResult}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: "100%",
    borderRadius: 5,
    padding: 5,
    fontSize: 18,
    marginVertical: 10,
  },
  searchResult: {
    position: "absolute",
    zIndex: 1,
    top: 50,
  },
  singleSearchResult: {
    borderRadius: 10,
    padding: 10,
    margin: 1,
    shadowColor: "black",
    elevation: 5,
    backgroundColor: "#191A19",
    color: "#D8E9A8",
  },
});

export default Search;
