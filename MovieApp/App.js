import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStack from "./stack/MyStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
