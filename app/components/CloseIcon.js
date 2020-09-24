import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function CloseIcon({
  name,
  size = 0,
  backgroundColor = colors.transparent,
  iconColor = "#fff",
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: "100%",
          height: size,
          backgroundColor,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CloseIcon;
