import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "./SliderItem";

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>、
      <View style={styles.slideWrapper}></View>
      <FlatList
        data={newsList}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({ item, index }) => <SliderItem />}
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
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
});
