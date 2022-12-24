import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigatror from "../tabNavigator/BottomTabNavigatror";
import DetailArtist from "../screen/DetailArtist";
import DetailMovie from "../screen/DetailMovie";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigatror}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="Artist" component={DetailArtist} />
      <Stack.Screen name="Movie" component={DetailMovie} />
    </Stack.Navigator>
  );
};

export default MyStack;
