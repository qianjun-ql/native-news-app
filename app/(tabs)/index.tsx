import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { NewsDataType } from "@/types";
import BreakingNews from "@/components/BreakingNews";

type Props = {};

const Page = (props: Props) => {
  const { top: safeTop } = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      // const URL = `${API_URL}/articles`;
      const URL = "http://192.168.1.5:3000/articles";
      const response = await axios.get<NewsDataType[]>(URL);
      console.log(response);

      if (response && response.data) {
        setBreakingNews(response.data);
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: safeTop }]}>
      <Header />
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <BreakingNews newsList={breakingNews} />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
