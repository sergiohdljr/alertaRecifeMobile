import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'; 
import {House ,DeviceMobile, MoonStars, User, SignOut, BellRinging, List} from 'phosphor-react-native';
import React, {useState} from 'react';


export default  function Aside(){



   
  

 return(

    
<SafeAreaView style={styles.container}>
<View style={{justifyContent:'flex-start',
  padding:20}}>






    <Image style={{
        width:60,
        height:60,
        borderRadius:10,
        marginTop:8,
        border: '2px solid black'}}></Image>
        <Text style={{
            fontSize :18,
            fontWeight:'bold',
            color: 'white',
            marginTop:20
        }}>Scarllet Valentim</Text>

        <TouchableOpacity>
            <Text style={{marginTop:6,
            color:'white',
            marginBottom:14
            }}>Ver Perfil
            </Text></TouchableOpacity>
        
        <View style={{flexGrow:1}} >
{
     //tab bar buttons
} 
<TouchableOpacity>
<View style={styles.button}>
    <House size={20} />
    <Text style={styles.textbutton}>Home</Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View style={styles.button}>
    <DeviceMobile size={20} />
    <Text style={styles.textbutton}>Feed</Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View style={styles.button}>
    <User size={20} />
    <Text style={styles.textbutton}>Perfil</Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View style={styles.button}>
    <MoonStars size={20} />
    <Text style={styles.textbutton}>Tema</Text>
</View>
</TouchableOpacity>

        </View>
        
 

</View>
<View style={{
    justifyContent: 'flex-end',
    alignItems:'flex-end', 
    padding: 15,
    marginBottom:20,
    flex:1,
    marginVertical:20}}>

<TouchableOpacity>
<View style={styles.buttona}>
    <BellRinging size={22}  color='white'/>
    <Text style={styles.textbuttona}>Alertar</Text>
</View>
</TouchableOpacity>

<TouchableOpacity >
<View style={styles.buttonl}>
<SignOut size={20}   />
<Text style={styles.textbuttonl}>Sair</Text>
</View>
</TouchableOpacity>

</View>
</SafeAreaView>
    );
}




    

const styles = StyleSheet.create({
    container:{
        width:'50%',
        height:'100%',
        backgroundColor:'#8B3DFF',
        alignItems:'flex-start',
        justifyContent:'flex-start'

    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:8,
        backgroundColor: 'white',
        paddingLeft:20,
        paddingRight:40,
        borderRadius:8 , 
        marginTop:21
    },
    textbutton:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:15
    },
    buttonl:{
        flexDirection:'row',
        alignItems:'flex-end',
        paddingVertical:8,
        paddingLeft:40,
        paddingRight:50,
        borderRadius:8 , 
        marginLeft:0,
        backgroundColor:'#a0a0a0'
    },
    textbuttonl:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:15,
        color:'black'
    },

    buttona:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        backgroundColor: 'black',
        paddingLeft:20,
        paddingRight:40,
        borderRadius:8 , 
        marginBottom:80
    },
    textbuttona:{
        fontSize:17,
        fontWeight:'bold',
        paddingLeft:15,
        color:'white'
    },
})