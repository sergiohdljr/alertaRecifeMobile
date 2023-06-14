import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Picker,
  Modal,
} from "react-native";
import { BellRinging } from "phosphor-react-native";
import { Post } from "../../components/post";
import { api } from "../../service/api";
import { useForm } from "react-hook-form";
import { UserStore } from "../../store/userStore";

const Feed = () => {
  const Usuario = JSON.parse(localStorage.getItem("usuario"));
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [ocorrecia, setOcorrencia] = useState();
  const [buscar, setBuscar]= useState();

  const getOcorrencia = async () => {
    api
      .get("/ocorrencias")
      .then((ocorrencias) => setOcorrencia(ocorrencias.data));
  };

  useEffect(() => {
    register("descricaoDaOcorrencia");
    register("localizacaoDaOcorrencia");
    register("tipoDaOcorrencia");
    getOcorrencia();
  }, [register]);

  const deleteOcorrencia = async (idOcorrencia) => {
    await api.delete(`/delete/ocorrencia/${idOcorrencia}`).then((deletar) => {
      console.log(deletar.status);
      getOcorrencia();
    });
  };

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    const user = {
      
      nome: Usuario.nome,
      email: Usuario.email,
      fotoPerfil: Usuario.foto,
    };
    
    
    await api
      .post("/ocorrencia", {
        descricaoDaOcorrencia: data.descricaoDaOcorrencia,
        tipoDaOcorrencia: data.tipoDaOcorrencia,
        enderecoOcorrencia: data.localizacaoDaOcorrencia,
        email: user.email,
        nome: user.nome,
        fotoPerfil: user.fotoPerfil,
      })
      .then((ocorreciaPost) => {
        console.log(ocorreciaPost.status);
        getOcorrencia();
      }).catch(Error=>console.log(Error) );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#a0a0a0a0" }}>
      <View style={styles.containerbp}>
      <View style={styles.contentbp}>
        <TextInput
          placeholder="Digite uma localização"
          style={styles.InputPesquisabp}
          onChangeText={(text)=> setBuscar(text)}
        ></TextInput>
    
      </View>
    </View>
      <View style={styles.postOcorrencia}>
        <View style={styles.itensPost}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={styles.imagepost}
              source={{
                uri: Usuario.foto,
              }}
            ></Image>

            <TextInput
              placeholder="Digite aqui sua ocorrência"
              style={styles.TextInputOcorrencia}
              label={"descricaoDaOcorrencia"}
              onChangeText={(text) => setValue("descricaoDaOcorrencia", text)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Informe a localização"
              style={styles.TextInputLocalizacao}
              label={"localizacaoOcorrencia"}
              onChangeText={(text) => setValue("localizacaoDaOcorrencia", text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 10,
              gap: 10,
              justifyContent: "space-evenly",
            }}
          >
            <Picker
              onValueChange={(tipoDaOcorrencia) =>
                setValue("tipoDaOcorrencia", tipoDaOcorrencia)
              }
              style={{
                height: 40,
                width: 100,
                borderRadius: 8,
                fontWeight: "bold",
                alignItems: "center",
                alignSelf: "center",
                display: "flex",
                marginBottom: 14,
                justifyContent: "center",

                fontSize: 12,
                shadowColor: "rgba(0,0,0,0.5)",
                shadowOffset: { width: 0, height: 2 },
                elevation: 5,
                shadowRadius: 4,
                marginLeft: 50,
                bordeSize: 1,
                borderColor: "#8D3DFFFF",
              }}
            >
              <Picker.Item label="Assalto" value="Assalto" />
              <Picker.Item label="Assédio" value="Assédio" />
              <Picker.Item label="Arrastão" value="Arrastão" />
              <Picker.Item
                label="Acidente de trânsito"
                value="Acidente de trânsito"
              />
              <Picker.Item label="Agressão" value="Agressão" />
              <Picker.Item label="Racismo" value="Racismo" />
            </Picker>

            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <View style={styles.actionButton}>
                <BellRinging size={22} color="white" />
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "#fff",
                    marginLeft: 4,
                  }}
                >
                  Alertar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        {ocorrecia &&
          ocorrecia
            .slice(0)
            .reverse()
            .filter(({ enderecoOcorrencia }) => {
              const valorBusca = buscar?.toLowerCase();
              const filtro = enderecoOcorrencia.toLowerCase();
              return filtro.includes(valorBusca);
            })
            .map((ocorrencias) => {
              return (
                <Post
                  id={ocorrencias.id}
                  displayName={ocorrencias.autor.nome}
                  email={ocorrencias.autor.email}
                  photoURL={ocorrencias.autor.fotoPerfil}
                  tipoOcorrencia={ocorrencias.tipoDaOcorrencia}
                  descricaoDaOcorrencia={ocorrencias.descricaoDaOcorrencia}
                  enderecoOcorrencia={ocorrencias.enderecoOcorrencia}
                  key={ocorrencias.id}
                  deletarOcorrencia={() => deleteOcorrencia(ocorrencias.id)}
                  getOcorrencias={() => getOcorrencia()}
                />
              );
            })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postOcorrencia: {
    width: "100%",
    height: 220,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#fff",
    paddingTop: 6.5,
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    paddingLeft: 5,
    marginTop: 2,
  },
  imagepost: {
    border: "2px solid black",
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginLeft: 4,
  },
  textNomePost: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 6,
  },
  textUserPost: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
    color: "#a0a0a0",
  },
  textDescricaoOcorrencia: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: 16,
    paddingLeft: 9,
  },
  TextInputOcorrencia: {
    width: "80%",
    height: 100,
    borderRadius: 8,
    border: "1px solid gray",
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    marginLeft: 8,
    padding: 2,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    wordBreak: "break-all",
  },
  TextInputLocalizacao: {
    width: "80%",
    height: 35,
    borderRadius: 8,
    border: "1px solid gray",
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    marginLeft: 62,
    padding: 2,
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: "#8B3DFFFF",
    borderRadius: 8,
    width: 130,
    height: 42,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 28,
  },containerbp: {
    height: 47,
    width: "100%",
    backgroundColor: "#D7BBEC",
  },
  contentbp: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: 1,
  },
  InputPesquisabp: {
    width: "60%",
    height: 35,
    backgroundColor: "#fff",
    borderSize: 1,
    borderColor: "rgb(0,0,0,0.5)",
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    color: "#000",
    padding: 3,
    paddingLeft: 6,
    fontSize: 13,
    fontWeight: "lighter",
    borderRadius: 20,
  },
});
export default Feed;
