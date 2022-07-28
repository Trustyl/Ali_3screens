import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//Logo class component 
export default class Authentic extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../Images/Securely.png')}
                />
                
                
                
                
            </View>
        )
    }
}
//You can modify the looks of your code here.
const styles = StyleSheet.create({
    Face:{
        marginLeft:10
    },
    recong:{
        marginTop:20

    },
    Text:{
        position:" absolute",
width: 96,
height: 33,
left: 169,
top: 682,

fontFamily: 'Lato',
fontStyle: "normal",
fontWeight: 600,
fontSize: 12,
lineHeight: "120%",
/* or 14px */

textAlign: "center",
letterSpacing: "-0.02em",

color: "#737373",
    }
  
});