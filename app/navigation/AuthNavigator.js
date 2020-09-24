import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserSelector from "../screens/UserSelector";
import ShopCategory from "../screens/ShopCategory";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Location from "../screens/Location";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SelectUser"
      component={UserSelector}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ShopCategory"
      component={ShopCategory}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Location"
      component={Location}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
