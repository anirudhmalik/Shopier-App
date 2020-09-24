import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import colors from "../../config/colors";
import NotificationCard from "./NotificationCard";
import handlerApi from "../../api/handlerApi";

function NotificationList({ shopId, navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <NotificationCard shopId={shopId}></NotificationCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  submit: {
    width: "100%",
    height: 55,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  submit1: {
    width: "100%",
    height: 55,

    marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  submit2: {
    width: "100%",
    height: 55,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  submit3: {
    width: 180,
    height: 50,
    backgroundColor: colors.blue,
    elevation: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
  text1: {
    fontSize: 16,
    color: colors.white,
  },
});

export default NotificationList;
