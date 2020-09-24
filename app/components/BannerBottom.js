import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function BannerBottom({
  bannerBottom1,
  bannerBottom2,
  setBottom1,
  setBottom2,
  setModal2Visible,
}) {
  const [text1, setText1] = useState(bannerBottom1);
  const [text2, setText2] = useState(bannerBottom2);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppText>Edit Here</AppText>
      </View>
      <View style={styles.input}>
        <TextInput
          defaultValue={bannerBottom1}
          placeholder="Enter Line"
          maxLength={40}
          onChangeText={(value) => setText1(value)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          defaultValue={bannerBottom2}
          placeholder="Enter Line"
          maxLength={40}
          onChangeText={(value) => setText2(value)}
        />
      </View>
      <View style={styles.button}>
        <View style={styles.choice}>
          <Button title={"Cancel"} onPress={() => setModal2Visible(false)} />
        </View>
        <View style={styles.choice}>
          <Button
            title={"Save"}
            onPress={() => {
              setBottom1(text1), setBottom2(text2), setModal2Visible(false);
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

export default BannerBottom;
