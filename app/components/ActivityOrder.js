import React from "react";
import LottieView from "lottie-react-native";
function ActivityOrder({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      source={require("../assets/animation/orderPlaced2.json")}
    />
  );
}

export default ActivityOrder;
