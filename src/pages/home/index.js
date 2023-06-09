import { View, SafeAreaView, TouchableOpacity, Text, TextInput, StyleSheet,Image , Picker } from "react-native";
import { BellRinging, List } from "phosphor-react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ 
      flex: 1, 
      paddingTop:6.5 , 
      paddingBottom:6.5 , 
      backgroundColor:'#a0a0a0a0'}}>
    <View style  = {styles.container}>
      <View style={styles.containerItens}>
<Image style={styles.image}></Image>
<TextInput style={styles.TextInput} placeholder="Digite uma ocorrencia"></TextInput></View>
<View>
  <TextInput style={styles.TextInputLocalizacao} placeholder="informa a localização"></TextInput>
</View>
<View style={{
  flexDirection:'row',
  paddingTop:8, 
  display:'flex',
  justifyContent:'center',
  gap:15}}>

      <Picker
          style={{
            height: 40,
            width: 110,
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: 12,
            display: "flex",
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: { 
              width: 0,
              height: 2 },
            elevation: 5,
            shadowRadius: 4,
            borderSize:2,
            borderColor:'#8b3DFFFF'
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#8B3DFFFF",
              borderRadius: 8,
              marginBottom: 30,
              justifyContent: "center",
              alignSelf: "center",
            
              width: 130,
            }}
          >
            <BellRinging size={20} color="white" />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                paddingLeft: 15,
                color: "white",
              }}
            >
              Alertar
            </Text>
          </View>
        </TouchableOpacity>
 
</View>

    </View>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container:{
    height:200,
    width:'100%',
    borderRadius:8,
    backgroundColor:'#fff',
    paddingLeft: 10,
    flexDirection:'column',
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { 
      width: 0,
      height: 2 },
    elevation: 5,
    shadowRadius: 4,
  
  },
  image:{
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid black",
    display: "flex",
    justifyContent: "flex-start",
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 2, height: 2 },
    elevation: 6,
    display: "flex",
    padding: 9,
    justifyContent: "flex-start",
    
  },
  containerItens:{
    padding:8,
    display:'flex',
    flexDirection:'row',
    display:'flex',
    gap:5
  }, 
  TextInput:{
    width:'100%',
    height:90,
    border:'1px solid gray', 
    fontWeight:'bold',
    fontSize:12,
    borderRadius:8,
    display:'flex',
    justifyContent:'flex-start',
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { 
      width: 0,
      height: 2 },
    elevation: 5,
    shadowRadius: 4,

  },
  TextInputLocalizacao:{
    width:'83%',
    marginLeft:53,
    height:40, 
    fontWeight:'bold',
    fontSize:12,
    borderRadius:8,
    border:'1px solid gray', 
    display:'flex',
    justifyContent:'flex-start',
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { 
      width: 0,
      height: 2 },
    elevation: 5,
    shadowRadius: 4,

  }
})
export default Home;
