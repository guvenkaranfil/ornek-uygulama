import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Themes
import { Images } from "../themes";

const Header = ({ navigation, showBackButton = false }) => {
  return (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image style={{ width: 16, height: 14 }} source={Images.backIcon} />
        </TouchableOpacity>
      ) : null}
      <View style={styles.logo}>
        <Image
          source={Images.logo}
          style={{ width: 125, height: 38 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    marginTop: 20
  },
  backButton: {
    width: 30,
    height: 30,
    marginTop: 10
  },
  logo: {
    flex: 1,
    alignItems: "center"
  }
});
