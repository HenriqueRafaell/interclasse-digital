import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ titulo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1976D2",
    padding: 15,
    alignItems: "center"
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});