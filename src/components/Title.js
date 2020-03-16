import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Themes
import { Colors, Metrics } from "../themes";

const Title = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingTop: (Metrics.DEVICE_HEIGHT * 6.7) / 100
  },
  title: {
    fontSize: 30,
    color: Colors.darkBlue,
    letterSpacing: 0.24
  },
  content: {
    paddingTop: 10,
    fontSize: 14,
    letterSpacing: 0.37,
    color: Colors.darkGray
  }
});
