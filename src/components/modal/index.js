import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Image,
  StyleSheet,
  Picker,
} from "react-native";

import { Warning, X } from "phosphor-react-native";

export function ActionModal({ handleClose }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9, backgroundColor: "rgb(0,0,0,0.5)" }}
      >
        <View style={styles.content}>
          <View
            style={{
              justifyContent: "flex-start",
              display: "flex",
            }}
          >
            <TouchableOpacity
              onPress={handleClose}
              style={{
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "right",
                alignSelf: "right",
                marginLeft: 220,
                maginBottom: 50,
              }}
            >
              <X size={25} color="black" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: 19,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Reporte uma Ocorrência
          </Text>

          <TextInput
            placeholder="Reporte uma ocorrência"
            style={styles.input}
          ></TextInput>
          <TextInput
            placeholder="Informe a localização"
            style={styles.TextInputLocalizacao}
          ></TextInput>
          <Picker
            style={{
              height: 40,
              width: 140,
              borderRadius: 8,
              fontWeight: "bold",
              fontSize: 14,
              alignItems: "center",
              alignSelf: "center",
              display: "flex",
              marginTop: 14,
              justifyContent: "center",

              fontSize: 15,
              shadowColor: "rgba(0,0,0,0.5)",
              shadowOffset: { width: 0, height: 2 },
              elevation: 5,
              shadowRadius: 4,
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

          <TouchableOpacity>
            <View style={styles.actionButton}>
              <Warning size={22} color="white" />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#fff",
                  marginLeft: 4,
                }}
              >
                Reportar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    height: "54%",
    width: "80%",
    backgroundColor: "#D7BBEC",
    justifyContent: "center",
    alignSelf: "center",
    display: "flex",
    borderRadius: 8,
    display: "flex",
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    shadowRadius: 4,
    zIndex: 99,
    marginTop: 180,
  },
  actionButton: {
    zIndex: 10,
    flexDirection: "row",
    backgroundColor: "#8B3DFFFF",
    borderRadius: 8,
    width: "50%",
    padding: 8,
    justifyContent: "center",
    display: "flex",
    alignSelf: "center",
    paddingVertical: 15,
    display: "flex",
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    marginTop: 14,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
  },
  input: {
    width: "80%",
    height: 85,
    borderColor: "rgba(0,0,0,0.5)",
    backgroundColor: "white",
    borderSize: "4px",
    borderRadius: 8,
    color: "black",
    justifyContent: "center",
    display: "flex",
    alignSelf: "center",
    marginTop: 10,
    display: "flex",
    fontSize: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    paddingLeft: 5,
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
    marginTop: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    paddingLeft: 5,
  },
});
