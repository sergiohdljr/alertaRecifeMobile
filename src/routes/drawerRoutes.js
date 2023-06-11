import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/home/index";
import Feed from "../pages/feed/index";
import Perfil from "../pages/perfil/index";
import CustomDrawer from "../components/customDrawer";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (


<Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: "slide",
        drawerPosition: "right",
        headerStyle: {
          backgroundColor: "#8B3DFF",
          alignItems: "center",
        },
        drawerItemPress: true,
        headerTitleAlign: "center",
        headerTintColor: "#FFf",
        drawerStyle: {
          width: 250,
        },
        headerTitle: false,
        overlayColor: 0.8,
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: "#8B3DFFFF",
        drawerActiveBackgroundColor: "#8B3DFFff",
        drawerInactiveTintColor: "#000",
        drawerItemStyle: {
          alignItems: "center",
          letterSpacing: 1,
          fontSize: 16,
          fontFamily: "bold",
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>

    
  );
};
