import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import Artists from "../screen/Artists";
import Login from "../screen/Login";
import HeaderCustom from "../components/HeaderCustom";
import {color} from "../bin/default/color"

const Tab = createBottomTabNavigator();

const BottomTabNavigatror = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: color.secondary,
        tabBarInactiveTintColor: color.primary,
        headerTitle: () => HeaderCustom()
      })}>
      <Tab.Screen name="Movie" component={Movies} options={() => {}} />
      <Tab.Screen name="Artist" component={Artists} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigatror;
