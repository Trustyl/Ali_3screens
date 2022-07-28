import { StyleSheet, Text,View, SafeAreaView, ScrollView, StatusBar,Image, TouchableOpacity, Touchable } from 'react-native';
import React from 'react'
import Logo from '../Components/Logo'
import Authentic from '../Components/AuthenticationMethod';
import Face from '../Components/Methods/FaceRecognition'
import Fingerprint from '../Components/Methods/Fingerprint';
import Passcode from '../Components/Methods/Passcode';
export default function Screen1() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={{flex:5,flexDirection:"row"}}>
                <View style={{marginTop:110,marginLeft:120}}>
                    <Logo />
                </View>
                
                
            </View>
            <View style={{flex:4}}>
                <View style={{marginTop:120,marginLeft:100}}>
                <Authentic />
                <View style={{flexDirection:"row"}}>
                    <View >
                        <TouchableOpacity>
                            <Face />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{marginLeft:80}}>
                    <TouchableOpacity>
                            <Passcode /> 
                        </TouchableOpacity>
                     
                    </View>
                    <View style={{marginLeft:80}}>
                        <TouchableOpacity>
                          <Fingerprint />  
                        </TouchableOpacity>
                    
                    </View>
                    </View>
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
    
    
  });