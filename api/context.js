import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { BASE_URL, categories, getNewsAPI } from "./api";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(1);

  const fetchNews = async () => {
    const { data } = axios.get(getNewsAPI(category));
    setNews(data);
    setIndex(1); //* when changing category go back to NEWS SCREEN
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{ index, setIndex, news, setNews, category, setCategory, fetchNews }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useGlobalContext = () => useContext(NewsContext);

export default NewsContextProvider;
