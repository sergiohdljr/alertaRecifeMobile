import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/routes/StackRoutes";
import { DrawerRoutes } from "./src/routes/drawerRoutes";
import Login from "./src/pages/Login";
import { UserStore } from "./src/store/userStore";

export default function App() {
  const user = UserStore((state) => state.user);
  return (
    <NavigationContainer>
      {user === "" ? <DrawerRoutes /> : <Login />}
    </NavigationContainer>
  );
}
