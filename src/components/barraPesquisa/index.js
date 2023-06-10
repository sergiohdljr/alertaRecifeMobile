import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';
 import {MagnifyingGlass} from 'phosphor-react-native';



 
const BarraPesquisa = () => {

return(
<SafeAreaView style={styles.container}>
<View style={styles.content}>

<TextInput placeholder='Digite uma localização' style={styles.InputPesquisa}>


</TextInput>


</View>


</SafeAreaView>
);





}
const styles= StyleSheet.create({
container:{
    height:47,
    width:'100%',
    backgroundColor:'#D7BBEC'
},
content:{
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    marginTop:6,
    marginBottom:1
},
InputPesquisa:{
    width:'60%',
    height:35,
    backgroundColor:'#fff',
    borderSize:1,
    borderColor:'rgb(0,0,0,0.5)',
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 4,
    color:'#000',
    padding:3,
    paddingLeft:6,
    fontSize:13,
    fontWeight:'lighter',
    borderRadius:20,
    

 
}


})
export default BarraPesquisa;