import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import registerApi from "../api/auth";
import Screen from "../components/Screen";
import cache from "../utility/cache";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [id, setId] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const data = await cache.get("user");
    const data1 = await cache.get("lat");
    const data2 = await cache.get("lngt");
    setLatitude(data1);
    setLongitude(data2);
    setId(data);
  };
  const handleSubmit = async ({ name, email, password }) => {
    const result = await registerApi.register(
      id,
      latitude,
      longitude,
      name,
      email,
      password
    );
    if (!result.ok) {
      console.log(result.problem);
    } else {
      console.log(result.status);
      navigation.navigate("Login");
    }
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
