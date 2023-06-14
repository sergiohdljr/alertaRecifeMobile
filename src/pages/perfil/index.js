import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Post } from "../../components/post";
import { api } from "../../service/api";

const Perfil = () => {
  const Usuario = JSON.parse(localStorage.getItem("usuario"));
  const [userOcorrencias, setUserOcorrencias] = useState();

  const getOcorrencia = async () => {
    api
      .get(`/ocorrencias/${Usuario.email}`)
      .then((ocorrencias) => setUserOcorrencias(ocorrencias.data));
  };
  useEffect(() => {
    getOcorrencia();
    
  }, []);

  const deleteOcorrencia = async (idOcorrencia) => {
  await api.delete( `/delete/ocorrencia/${idOcorrencia}`).then((deletar) => {
      console.log(deletar.status);
      getOcorrencia();
    });
  };
  

  const OcorrenciasDoUsuario = userOcorrencias?.Ocorrencias.slice(0).reverse();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.perfilHead}>
        <Image style={styles.image} source={{ uri: Usuario.foto }}></Image>
        <Text style={styles.textNome}>{Usuario.nome}</Text>
        <Text style={styles.textUser}>{Usuario.email}</Text>
        <Text style={styles.textOcorrencias}>Suas Ocorrências</Text>
      </View>
      <View>
        {OcorrenciasDoUsuario &&
          OcorrenciasDoUsuario.map((ocorrencia) => (
            <Post
              id={ocorrencia.id}
              key={ocorrencia.id}
              descricaoDaOcorrencia={ocorrencia.descricaoDaOcorrencia}
              fotoOcorrencia={ocorrencia.fotoOcorrencia}
              displayName={Usuario.nome}
              email={Usuario.email}
              photoURL={Usuario.foto}
              enderecoOcorrencia={ocorrencia.enderecoOcorrencia}
              tipoOcorrencia={ocorrencia.tipoDaOcorrencia}
              deletarOcorrencia={() => deleteOcorrencia(ocorrencia.id)}
              getOcorrencias={() => getOcorrencia()}
              
            />
          ))}
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
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 6,
  },
  textUser: {
    paddingLeft: 10,
    fontSize: 10,
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
