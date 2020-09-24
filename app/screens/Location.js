import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as location from "expo-location";
import cache from "../utility/cache";
function Location({ navigation }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const data = await cache.get("user");
    setUser(data);
  };
  const getLocation = async () => {
    const { granted } = await location.requestPermissionsAsync();
    if (!granted) {
      console.log("denied");
      return;
    }
    const {
      coords: { latitude, longitude },
    } = await location.getCurrentPositionAsync();
    await cache.store("lat", latitude);
    await cache.store("lngt", longitude);
    navigation.navigate("Register");
    //const result = await dataApi.addData("/gps", { latitude, longitude });
    //if (result.ok) {
    //  console.log(result.data);
    // } else console.log(result.problem);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/map.jpg")} />
      <AppText style={styles.text}>
        {user == "seller"
          ? "Where Is Your Shop ?"
          : "Where do you want to Buy ?"}
      </AppText>
      <TouchableHighlight
        style={styles.button}
        underlayColor={colors.green}
        onPress={() => getLocation()}
      >
        <>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="send"
              size={20}
              color={colors.white}
            />
          </View>
          <AppText style={styles.buttonText}>{"Around me"}</AppText>
        </>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: colors.blue,
    borderRadius: 5,
    marginTop: 30,
    width: "85%",
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    marginTop: 40,
    flex: 1,
  },
  icon: {
    transform: [{ rotate: "-35deg" }],
    marginTop: 10,
  },
  image: {
    height: 300,
    width: "100%",
  },
  text: {
    marginTop: 40,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.dark,
  },
});

export default Location;
