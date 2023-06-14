import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/routes/StackRoutes";
import { DrawerRoutes } from "./src/routes/drawerRoutes";
import Login from "./src/pages/Login";
import { UserStore } from "./src/store/userStore";

export default function App() {
  const UsuarioAuth = JSON.parse(localStorage.getItem("usuario"));
  return (
    <NavigationContainer>
      {UsuarioAuth   ? <DrawerRoutes /> : <Login />}
    </NavigationContainer>
  );
}
