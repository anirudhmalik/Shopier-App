import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  AsyncStorage,
} from "react-native";
import AppAccount from "../../components/Customer/AppAccount";
import AppBottomBar from "../../components/Customer/AppBottomBar";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";
import Icon from "../../components/Icon";

function Account({ navigation }) {
  const authContext = useContext(AuthContext);
  const handleLogout = async () => {
    authContext.setUser(null);
    authStorage.removeToken();
    await AsyncStorage.clear();
  };
  return (
    <>
      <AppAccount></AppAccount>
      <View style={styles.container}>
        <AppText style={styles.text}>Your Orders</AppText>
        <AppText style={styles.text}>Edit Profile</AppText>
        <AppText style={styles.text}>Settings</AppText>
        <AppText style={styles.text}>Security</AppText>
        <AppText style={styles.text}>Privacy</AppText>
      </View>
      <TouchableWithoutFeedback onPress={handleLogout}>
        <View style={styles.logout}>
          <AppText style={{ color: colors.medium }}>Logout</AppText>
          <Icon name="power" iconColor={colors.medium}></Icon>
        </View>
      </TouchableWithoutFeedback>
      <AppBottomBar
        navigation={navigation}
        hm_clr={colors.black}
        hrt_clr={colors.black}
        acc_clr={colors.white}
      ></AppBottomBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    justifyContent: "center",
  },
  logout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginLeft: 20,
    marginVertical: 10,
    color: colors.medium,
  },
});

export default Account;
