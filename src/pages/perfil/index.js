import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Post } from "../../components/post";

const Perfil = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.perfilHead}>
        <Image style={styles.image}></Image>
        <Text style={styles.textNome}>Scarllet Valentim</Text>
        <Text style={styles.textUser}>@scarlletrvs34</Text>
        <Text style={styles.textOcorrencias}>Suas Ocorrências</Text>
      </View>
      <Post />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 10,
    backgroundColor: "#a0a0a0",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  perfilHead: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  image: {
    width: 95,
    height: 95,
    borderRadius: "50%",
    marginTop: 3,
    marginLeft: 18,
    border: "2px solid black",
  },
  textNome: {
    paddingLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 6,
  },
  textUser: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
    color: "#a0a0a0",
  },
  textOcorrencias: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    letterSpacing: 2,
    color: "#8B3DFFFF",
  },
});
export default Perfil;
