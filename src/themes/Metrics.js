import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
export default Metrics = {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,

  // paddings
  containerHorizontalPadding: 30
};
