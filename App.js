import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen2 from "./screens/HomeScreen2";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Zomato"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome name="home" size={20} color={focused ? color : "grey"} />
            ),
          }}
          component={HomeScreen} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome5 name="images" size={20} color={focused ? color : "grey"} />
            ),
          }}
          name="More Images" component={HomeScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
