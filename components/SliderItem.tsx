import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";
import { SharedValue } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  slideItem: NewsDataType;
  index: number;
  srcollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ slideItem, index, srcollX }: Props) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: slideItem.image_url }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8"]}
        style={styles.background}
      >
        <View>
          <View>
            {slideItem.source_icon && (
              <Image
                source={{ uri: slideItem.source_icon }}
                style={styles.sourceIcon}
              />
            )}
          </View>

          <Text>{slideItem.title}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemWrapper: {
    position: "relative",
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 60,
    height: 180,
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    // left: 30,
    top: 0,
    right: 0,
    width: width - 60,
    height: 180,
    borderRadius: 20,
    padding: 20,
  },
  sourceIcon: {},
});
