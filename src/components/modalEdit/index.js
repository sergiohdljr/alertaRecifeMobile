import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";

import { X, Warning } from "phosphor-react-native";

export  function ActionModalEdit({ handleClose }) {
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
              alignItems: "right",
            }}
          >
            <TouchableOpacity
              onPress={handleClose}
              style={{
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "right",
                alignSelf: "right",
                marginLeft: 250,
                marginBottom: 25,
              }}
            >
              <X size={22} color="black" />
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
            Edite sua ocorrência
          </Text>
          <TextInput
            placeholder="Edite sua ocorrência"
            style={styles.input}
          ></TextInput>
          <TouchableOpacity>
            <View style={styles.actionButton}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Salvar
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
  },
  content: {
    height: "50%",
    width: "90%",
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
    marginTop: 200,
    zIndex: 99,
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
    height: 40,
    display: "flex",
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    marginTop: 15,
  },
  input: {
    width: "80%",
    height: 70,
    borderColor: "rgba(0,0,0,0.5)",
    backgroundColor: "white",
    borderSize: "4px",
    borderRadius: 8,
    color: "black",
    justifyContent: "center",
    display: "flex",
    alignSelf: "center",
    display: "flex",
    fontSize: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    paddingLeft: 5,
    marginTop: 5,
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
    marginTop: 10
  }
})
