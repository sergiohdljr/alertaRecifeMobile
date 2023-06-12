import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/routes/StackRoutes";
import { DrawerRoutes } from "./src/routes/drawerRoutes";
import Login from "./src/pages/Login";

export default function App() {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerRoutes /> : <Login />}
    </NavigationContainer>
  );
}
