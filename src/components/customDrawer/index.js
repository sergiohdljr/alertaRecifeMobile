import  {useState} from "react";
import { View, Text, Image, TouchableOpacity,Modal } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";



import {ActionModal} from '/src/components/modal/index';
import { SignOut, BellRinging, MoonStars} from "phosphor-react-native";


const CustomDrawer = (props) => {

  const[visibleModal, setVisibleModal]= useState(false);
 

  return (
    <>
      <View
        style={{
          backgroundColor: "#8B3DFF",
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 10,
            marginTop: 18,
            marginLeft: 15,
            border: "2px solid black",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
            marginLeft: 15,
          }}
        >
          Scarllet Valentim
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
              marginBottom: 14,
              marginLeft: 15,
            }}
          >
            Ver Perfil
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#a0a0a0",
        }}
      >
        <DrawerContentScrollView {...props}  style={{backgroundColor:'#a0a0a0'}}>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>





        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 12,
              backgroundColor: "#8B3DFFFF",
              borderRadius: 8,
              marginBottom: 30,
              justifyContent: "center",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <MoonStars size={22} color="white" />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                paddingLeft: 15,
                color: "white",
              }}
            >
              Tema 
            </Text>
          </View>
        </TouchableOpacity>







        <TouchableOpacity onPress={()=> setVisibleModal(true)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              backgroundColor: "black",
              borderRadius: 8,
              marginBottom: 80,
              justifyContent: "center",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <BellRinging size={22} color="white" />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                paddingLeft: 15,
                color: "white",
              }}
            >
              Alertar
            </Text>
          </View>
        </TouchableOpacity>

      
      
      
<Modal 
visible={visibleModal} 
transparent={true} 
onRequestClose={ ()=> setVisibleModal(false)} >
<ActionModal handleClose={()=>setVisibleModal(false)}/>

  </Modal>
        

        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              marginBottom: 20,
              marginLeft: 14,
            }}
          >
            <SignOut size={20} />

            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Sair
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#8B3DFFFF",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "black",
              paddingLeft: 4,
            }}
          >
            Alerta Recife
          </Text>
        </View>
      </View>
    </>
  );
};
export default CustomDrawer;
