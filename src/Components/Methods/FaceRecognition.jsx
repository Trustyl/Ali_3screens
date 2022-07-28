import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//Logo class component 
export default class Face extends Component {
    render() {
        return (
            <View>
               <View style={{marginTop:40,marginLeft:-60}}>
                  <Image
                    style={styles.Face}
                    source={require('C:/Users/trust/OneDrive/Documents/Upwork/Customers/@Ali Usama, Plabesk/ali-screens/src/Images/Face.png')}
                />  
                <Image
                    style={styles.recong}
                    source={require('C:/Users/trust/OneDrive/Documents/Upwork/Customers/@Ali Usama, Plabesk/ali-screens/src/Images/recognition.png')}
                />
                </View>
                </View>
        )
    }
}
//You can modify the looks of your code here.
const styles = StyleSheet.create({
    Face:{
        marginLeft:15,
        width:53,
        height:53
    },
    recong:{
        marginTop:20,
        width:85,
        height:26

    },
    
  
});