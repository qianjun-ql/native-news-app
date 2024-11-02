import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "./SliderItem";

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {

  const [data, setData] = useState(newsList)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>、
      <View style={styles.slideWrapper}></View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({ item, index }) => (
          <SliderItem slideItem={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.black,
    marginBottom: 20,
    marginLeft: 20,
  },
  slideWrapper: {
    // width: "100%",
    // flex: 1,
    justifyContent: "center",
  },
});
