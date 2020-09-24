import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import Screen from "../components/Screen";
import cache from "../utility/cache";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import JwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginError, setLoginError] = useState();
  const authContext = useContext(AuthContext);
  const [id, setId] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const data = await cache.get("user");
    setId(data);
  };
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(id, email, password);
    if (!result.ok) {
      setLoginError(result.data.error);
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const user = JwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={loginError} visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
