import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import logo from "../../../assets/logo_resized.png";
import { GoogleChromeLogo } from "phosphor-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../home/index";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../service/firebase.config";
import { UserStore } from "../../store/userStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
 
  const SignIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        console.log({
          nome: user.displayName,
          email: user.email,
          foto: user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#E1CCFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Image
          source={{
            uri: logo,
            width: 300,
            height: 300,
          }}
        ></Image>
        {console.log(userDados)}
        <TouchableOpacity
          style={{
            width: "65%",
            height: "40px",
            display: "flex",
            gap: "0.5rem",
            backgroundColor: "#8B3DFF",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
          onPress={SignIn}
        >
          <GoogleChromeLogo size={24} color="#ffff" />
          <Text style={{ color: "#ffff" }}>Entre com o Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
