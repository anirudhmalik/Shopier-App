import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/Button";
import cache from "../utility/cache";
function WelcomeScreen({ navigation }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const data = await cache.get("user");
    setUser(data);
  };
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Shopier</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          color="green"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Register"
          color="blue"
          onPress={() => {
            if (user == "buyer") {
              navigation.navigate("Location");
            } else {
              navigation.navigate("ShopCategory");
            }
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
