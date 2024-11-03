import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "./SliderItem";
import {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
  const [data, setData] = useState(newsList);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();

  const onScrollHander = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>、
      <View style={styles.slideWrapper}></View>
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({ item, index }) => (
          <SliderItem slideItem={item} index={index} srcollX={scrollX}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHander}
        scrollEventThrottle={16}
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
