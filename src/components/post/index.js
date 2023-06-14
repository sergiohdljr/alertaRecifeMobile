import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Modal,
} from "react-native";

import { ActionModalEdit } from "../modalEdit/index";
import { PencilSimpleLine, Trash, BellRinging } from "phosphor-react-native";
import { api } from "../../service/api";

export const Post = ({
  descricaoDaOcorrencia,
  enderecoOcorrencia,
  photoURL,
  displayName,
  email,
  tipoOcorrencia,
  id,
  deletarOcorrencia,
  getOcorrencias,
}) => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const Usuario = JSON.parse(localStorage.getItem("usuario"));
  return (
    <View style={styles.postOcorrencia}>
      <View style={styles.postItens}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            with: "100%",
            alignItens: "center",
            gap: 8,
          }}
        >
          <View style={{ display: "flex", flexGrow: 1 }}>
            <Image
              source={{
                uri: photoURL,
              }}
              style={styles.imagePost}
            ></Image>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <BellRinging size={22} color="red" />
            <Text style={{ color: "red" }}>{tipoOcorrencia}</Text>
            {Usuario.email === email ?  (
              <>
                <TouchableOpacity onPress={() => setVisibleModalEdit(true)}>
                  <PencilSimpleLine size={24} color="blue" />
                </TouchableOpacity>

                <TouchableOpacity onPress={deletarOcorrencia}>
                  <Trash size={24} color="red" />
                </TouchableOpacity>
              </>
            ): null  }
          </View>
        </View>

        <Modal
          visible={visibleModalEdit}
          transparent={true}
          onRequestClose={() => setVisibleModalEdit(false)}
        >
          <ActionModalEdit
            getOcorrencias={getOcorrencias}
            id={id}
            handleClose={() => setVisibleModalEdit(false)}
          />
        </Modal>

        <View style={styles.textUsuario}>
          <Text style={styles.textNomePost}>{displayName}</Text>
          <Text style={styles.textUserPost}>@{email}</Text>
        </View>
        <Text style={styles.TextOcorrenciaDescricao}>
          {descricaoDaOcorrencia}
        </Text>
        <Text style={styles.localizacao}>{enderecoOcorrencia}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  localizacao: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#a0a0a0",
    marginTop: 17,
  },
});
