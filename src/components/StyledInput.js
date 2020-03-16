import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

// Themes
import { Colors, Metrics } from "../themes";

const StyledInput = ({ ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH - Metrics.containerHorizontalPadding * 2,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightBlack,
    borderStyle: "solid",
    marginBottom: 30
  },
  input: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 24,
    fontSize: 14,
    color: Colors.lightBlack
  },
  errorText: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 12,
    color: Colors.orange
  }
});
