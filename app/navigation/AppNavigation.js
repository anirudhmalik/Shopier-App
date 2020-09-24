import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppBuilder from "../screens/AppBuilder";
import SubCategory from "../screens/SubCategory";
import AppProduct from "../screens/AppProduct";
import Account from "../screens/Account";

const Stack = createStackNavigator();
const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="appBuilder"
      component={AppBuilder}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="subCategory"
      component={SubCategory}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="appProduct"
      component={AppProduct}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="account"
      component={Account}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
