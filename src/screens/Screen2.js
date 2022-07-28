import { StyleSheet, Text,View, SafeAreaView, ScrollView, StatusBar,Image, TouchableOpacity, Touchable } from 'react-native';
import React from 'react'
import SmallLogo from '../Components/SmallLogo'
import { AntDesign } from '@expo/vector-icons';
export default function Screen2() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={{flex:5,flexDirection:"row"}}>
                <View style={{marginTop:70,marginLeft:150}}>
                    <SmallLogo />
                </View>
            </View>
            <View>
            <Image
                    style={styles.tinyLogo}
                    source={require('../Images/Main.png')}
                />
                <View>
                    <Text style={{width:428,height:48,fontWeight:"700",fontSize:34,lineHeight:40,textAlign:"center",letterSpacing:-0.02,marginTop:70,marginLeft:-20}}>
                        Welcome!
                    </Text>
                    <Image
                    style={{marginLeft:30}}
                    source={require('../Images/create.png')}
                />
                <Image
                    style={{marginLeft:90,marginTop:40,width:195,height:12}}
                    source={require('../Images/Radio.png')}
                />
                <AntDesign name="arrowright" size={24} color="black" style={{position:"absolute",marginTop:270,marginLeft:320,color:"#007BC1"}}/>
                <Text style={{fontWeight:"700",fontSize:14,color: "#007BC1",marginTop:30,marginLeft:170}}>Skip</Text>
                </View>
            </View>
      </ScrollView>
    </SafeAreaView>
      
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    scrollView: {
      backgroundColor: 'white',
      
    },
    text: {
      fontSize: 42,
    },
    tinyLogo: {
        width: 390,
        height: 273,
        marginLeft: -5,
marginTop: 20,

    }
    
    
  });