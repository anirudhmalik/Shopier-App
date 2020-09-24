import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";
import CustomerNavigation from "./app/navigation/CustomerNavigation";
import AuthNavigation from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import JwtDecode from "jwt-decode";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(JwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? (
          user.userType == "seller" ? (
            <AppNavigation />
          ) : (
            <CustomerNavigation />
          )
        ) : (
          <AuthNavigation />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
