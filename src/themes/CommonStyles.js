import Constants from "expo-constants";

import Colors from "./Colors";

export default {
  screenContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.white
  },
  fullButton: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  fullButtonText: {
    fontSize: 15,
    letterSpacing: -0.24,
    color: Colors.white
  }
};
