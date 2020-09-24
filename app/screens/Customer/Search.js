import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import AppText from "../../components/AppText";

function Search({ navigation }) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.green, colors.blue]}
        style={styles.container}
      >
        <Screen style={styles.safeArea}>
          <View style={styles.appbar}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("home")}
            >
              <View style={styles.logoLeft}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={30}
                  color={colors.medium}
                />
              </View>
            </TouchableWithoutFeedback>
            <TextInput
              style={styles.text}
              placeholder="Find Shops Near You And More..."
              placeholderTextColor={colors.medium}
              maxLength={16}
              onChangeText={(value) => console.log(value)}
            />
            <View style={styles.logoRight}>
              <MaterialCommunityIcons
                name="search-web"
                size={30}
                color={colors.medium}
              />
            </View>
          </View>
        </Screen>
      </LinearGradient>
      <AppText style={styles.text1}>{"RECENT SEARCHES"}</AppText>
      <View style={styles.recentSearch}>
        <MaterialCommunityIcons
          name="search-web"
          size={30}
          color={colors.medium}
        />
        <AppText style={styles.text}>{"Haldirams"}</AppText>
      </View>
      <View style={styles.recentSearch}>
        <MaterialCommunityIcons
          name="search-web"
          size={30}
          color={colors.medium}
        />
        <AppText style={styles.text}>{"Malik Sweets"}</AppText>
      </View>
      <View style={styles.recentSearch}>
        <MaterialCommunityIcons
          name="search-web"
          size={30}
          color={colors.medium}
        />
        <AppText style={styles.text}>{"Ankit Supplements"}</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: "95%",
    height: 40,
    backgroundColor: colors.light,
    borderRadius: 5,
    marginLeft: 10,
    flexDirection: "row",
  },
  safeArea: {
    justifyContent: "center",
  },
  container: { height: 100 },
  logoLeft: {
    paddingLeft: 10,
    alignSelf: "center",
  },
  logoRight: {
    marginLeft: 50,
    alignSelf: "center",
  },
  recentSearch: {
    marginTop: 30,
    paddingLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 15,
    fontSize: 18,
    alignSelf: "center",
    color: colors.medium,
  },
  text1: {
    marginTop: 20,
    marginLeft: 25,
    fontSize: 14,
    color: colors.medium,
  },
});

export default Search;
