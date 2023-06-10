import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import { PencilSimpleLine, Trash , BellRinging } from "phosphor-react-native";

const Perfil = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.perfilHead}>
        <Image style={styles.image}></Image>

        <Text style={styles.textNome}>Scarllet Valentim</Text>
        <Text style={styles.textUser}>@scarlletrvs34</Text>
        <Text style={styles.textOcorrencias}>Suas Ocorrências</Text>
      </View>

      <View style={styles.postOcorrencia}>
        <View style={styles.postItens}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              with: "100%",
              alignItens:'center',
              gap:8
            }}
          >
            <View style={{display:'flex',flexGrow:1}}>
              <Image style={styles.imagePost}></Image>
            </View>
            <BellRinging size={22} color="red"/> 

            <View style={{marginRight:5}}>

            <Text style={{color:'red', fontSize:12, fontWeight:'bold'}}>Assalto!</Text>
            </View>
            <PencilSimpleLine size={24} color="blue" />
            <Trash size={24} color="red" />
            

         
          </View>
          
          <View style={styles.textUsuario}>
            <Text style={styles.textNomePost}>Scarllet Valentim</Text>
            <Text style={styles.textUserPost}>@scarlletrvs34</Text>
          </View>
          <Text style={styles.TextOcorrenciaDescricao}>Roubo de caneta!!</Text>
          <Text style={styles.localizacao}>Localização</Text>
        </View>
      </View>
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
  postOcorrencia: {
    marginTop: 6.5,
    height: 220,
    paddingTop: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    display: "flex",
    padding: 9,
    paddingLeft: 10,
    justifyContent: "flex-start",
  },
  imagePost: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "2px solid black",
    display: "flex",
    justifyContent: "flex-start",

  },
  postItens: {
    display: "flex",
    justifyContent: "flex-start",
  },
  textNomePost: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 8,
  },
  textUserPost: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#a0a0a0",
  },
  textUsuario: {
    display: "flex",
  },
  TextOcorrenciaDescricao: {
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 8,
    paddingLeft: 5,
  },
  localizacao:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#a0a0a0",
    marginTop:17
  }
});
export default Perfil;
