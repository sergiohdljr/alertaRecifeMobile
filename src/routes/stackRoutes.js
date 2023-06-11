import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../pages/Login/index";
import Home from "../pages/home/index";
import { DrawerRoutes } from "./drawerRoutes";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false, header: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      
    </Stack.Navigator>
  );
};
export default StackRoutes;
