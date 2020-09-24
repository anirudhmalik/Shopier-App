import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Customer/Home";
import Account from "../screens/Customer/Account";
import Heart from "../screens/Customer/Heart";
import Search from "../screens/Customer/Search";
import AppBuilder from "../screens/Customer/AppBuilder";
import SubCategory from "../screens/Customer/SubCategory";
import AppProduct from "../screens/Customer/AppProduct";
import Order from "../screens/Customer/Order";
import Notification from "../screens/Customer/Notification";

const Stack = createStackNavigator();
const CustomerNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="heart"
      component={Heart}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="account"
      component={Account}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="search"
      component={Search}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="appbuilder"
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
      name="order"
      component={Order}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="notification"
      component={Notification}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default CustomerNavigation;
