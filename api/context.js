import React, { useContext, createContext, useState, useEffect } from "react";
import { getSourceAPI, getNewsAPI } from "./api";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);

  const fetchNews = async (reset = category) => {
    const response = await fetch(getNewsAPI(reset));
    const data = await response.json();
    setNews(data.articles);
    setIndex(1); //* when changing category go back to NEWS SCREEN
  };

  const fetchNewsFromSource = async () => {
    try {
      const response = await fetch(getSourceAPI(source));
      const data = await response.json();
      setNews(data.articles.slice(0, 20));
      setIndex(1); //* when changing Source go back to NEWS SCREEN
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNewsFromSource();
  }, [source]);

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider
      value={{ index, setIndex, news, setCategory, fetchNews, setSource, setDarkTheme, darkTheme }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useGlobalContext = () => useContext(NewsContext);

export default NewsContextProvider;
