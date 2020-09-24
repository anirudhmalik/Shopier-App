import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
} from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";

function AppBottomBar({ acc_clr, hm_clr, odr_clr, navigation }) {
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("appBuilder")}
      >
        <View style={styles.container}>
          <Icon
            name="office-building"
            size={200}
            borderWidth={2}
            iconColor={hm_clr}
            borderColor={colors.green}
            backgroundColor={colors.white}
          ></Icon>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("account")}>
        <View style={styles.containerHome}>
          <Icon
            name="account"
            size={50}
            borderWidth={2}
            iconColor={colors.white}
            backgroundColor={acc_clr}
            borderColor={colors.green}
          ></Icon>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("cart")}>
        <View style={styles.containerOrder}>
          <Icon
            name="cart-arrow-down"
            size={50}
            borderWidth={2}
            iconColor={colors.white}
            backgroundColor={odr_clr}
            borderColor={colors.green}
          ></Icon>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 720,
    alignSelf: "center",
    position: "absolute",
  },
  containerHome: {
    marginTop: 750,
    marginLeft: 85,
    position: "absolute",
  },
  containerOrder: {
    marginTop: 750,
    marginLeft: 259,
    position: "absolute",
  },
});

export default AppBottomBar;
