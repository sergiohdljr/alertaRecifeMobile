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
import BarraPesquisa from "../../components/barraPesquisa";
import { Post } from "../../components/post";
import { api } from "../../service/api";
import { useForm } from "react-hook-form";

const Feed = () => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [ocorrecia, setOcorrencia] = useState();

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
    const dados = {
      email: "scarllet@gmail.com",
      nome: "Scarllet Valentim",
      fotoPerfil: "https://avatars.githubusercontent.com/u/125518211?v=4",
    };

    await api
      .post("/ocorrencia", {
        descricaoDaOcorrencia: data.descricaoDaOcorrencia,
        tipoDaOcorrencia: data.tipoDaOcorrencia,
        enderecoOcorrencia: data.localizacaoDaOcorrencia,
        email: dados.email,
        nome: dados.nome,
        fotoPerfil: dados.fotoPerfil,
      })
      .then((ocorreciaPost) => {
        console.log(ocorreciaPost.status);
        getOcorrencia();
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#a0a0a0a0" }}>
      <BarraPesquisa />
      <View style={styles.postOcorrencia}>
        <View style={styles.itensPost}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image style={styles.imagepost}></Image>
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
          ocorrecia.map((ocorrencias) => {
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
  },
});
export default Feed;
