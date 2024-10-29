import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {};

const BreakingNews = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BreakingNews</Text>
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
});
