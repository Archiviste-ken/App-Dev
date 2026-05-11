  import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "green" }}>
      {items.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
