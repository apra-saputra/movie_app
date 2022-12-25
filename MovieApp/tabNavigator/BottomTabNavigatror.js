import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import Artists from "../screen/Artists";
import HeaderCustom from "../components/HeaderCustom";
import { color } from "../bin/default/color";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigatror = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: color.secondary,
        tabBarInactiveTintColor: color.primary,
        headerTitle: () => HeaderCustom(),
      })}>
      <Tab.Screen
        name="Movie"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" size={30} color={color} />
          ),
          tabBarInactiveTintColor: color.primary,
        }}
      />
      <Tab.Screen
        name="Artist"
        component={Artists}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigatror;
