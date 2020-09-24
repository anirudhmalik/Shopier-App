import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function BannerHeader({ bannerHeader, setBannerHeader, setModal1Visible }) {
  const [text, setText] = useState(bannerHeader);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppText>Enter Shop Banner </AppText>
      </View>
      <View style={styles.input}>
        <TextInput
          defaultValue={bannerHeader}
          placeholder="Shop Banner"
          maxLength={25}
          onChangeText={(value) => setText(value)}
        />
      </View>
      <View style={styles.button}>
        <View style={styles.choice}>
          <Button title={"Cancel"} onPress={() => setModal1Visible(false)} />
        </View>
        <View style={styles.choice}>
          <Button
            title={"Save"}
            onPress={() => {
              setBannerHeader(text), setModal1Visible(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginHorizontal: 30,
  },
  choice: {
    marginRight: 20,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  heading: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 5,
    marginTop: 20,
    marginHorizontal: 25,
  },
});

export default BannerHeader;
