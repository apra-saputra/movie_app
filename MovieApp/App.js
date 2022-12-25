import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStack from "./stack/MyStack";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import { client } from "./bin/query";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
