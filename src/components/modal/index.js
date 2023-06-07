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
      <View style={styles.content}>
        <TouchableOpacity
          style={{ flex: 1, zIndex: 9, backgroundColor: "#fff" }}
          onPress={handleClose}
        ></TouchableOpacity>
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
              marginLeft:200,
              marginBottom:25
            }}
          >
            <X size={20} color="black" />
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
            marginBottom: 16,
          }}
        >
          Reporte uma Ocorrência
        </Text>

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
            marginBottom: 14,
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

        <TextInput style={styles.input}></TextInput>

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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    paddingVertical: 80,
    paddingHorizontal: 40,
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
    paddingVertical: 15,
    display: "flex",
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
  },
  input: {
    width: 220,
    height: 70,
    borderColor: "rgba(0,0,0,0.5)",
    backgroundColor: "white",
    borderSize: "4px",
    borderRadius: 8,
    color: "black",
    justifyContent: "center",
    display: "flex",
    alignSelf: "center",
    marginBottom: 10,
    display: "flex",
    fontSize: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
  },
});
