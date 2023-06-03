import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "/src/pages/home/index";
import Feed from "/src/pages/feed/index";
import Perfil from "/src/pages/perfil/index"


const Drawer = createDrawerNavigator();


export default function App(){
    return(

    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={Home}/>
<Drawer.Screen name="Feed" component={Feed}/>
<Drawer.Screen name="Perfil" component={Perfil}/>

    </Drawer.Navigator>
    </NavigationContainer>
    );
}