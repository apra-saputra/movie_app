import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStack from "./stack/MyStack";
import { NavigationContainer } from "@react-navigation/native";
import store from "./app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <MyStack />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
