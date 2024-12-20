import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,} from "react-native";

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';




const Home = () => {
    
    const navigation = useNavigation();

    
    


    return(
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../../images/img2.jpg')}
            />
            <Text
            style={{
                marginTop:90,
                marginBottom:50,
                fontSize:40,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 15, 
                color: '#3a026c'
                
            
            }}
            >Caculadora de IMC</Text>
            <TouchableOpacity
            style={{
                borderWidth: 1,
                padding: 10,
                borderRadius:8,
                backgroundColor: '#3a026c',
                
            }}
            >
            <Text onPress={() => navigation.navigate("Imc")} style={{color: '#FFF', fontWeight: 'bold'}}>Vamos Calcular</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
        height:300,
        width:380
    }
  });


export {Home}