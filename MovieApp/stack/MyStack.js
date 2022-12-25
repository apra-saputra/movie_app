import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigatror from "../tabNavigator/BottomTabNavigatror";
import DetailArtist from "../screen/DetailArtist";
import DetailMovie from "../screen/DetailMovie";
import { color } from "../bin/default/color";

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
      <Stack.Screen
        name="DetailArtist"
        component={DetailArtist}
        options={() => ({
          title: "Artist",
          headerStyle: { backgroundColor: color.secondary }
        })}
      />
      <Stack.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={() => ({
          title: "Movie",
          headerStyle: { backgroundColor: color.secondary },
        })}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
