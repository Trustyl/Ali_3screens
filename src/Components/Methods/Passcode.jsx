import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//Logo class component 
export default class Passcode extends Component {
    render() {
        return (
            <View>
               <View style={{marginTop:40,marginLeft:-60}}>
                  <Image
                    style={styles.Face}
                    source={require('C:/Users/trust/OneDrive/Documents/Upwork/Customers/@Ali Usama, Plabesk/ali-screens/src/Images/Group.png')}
                />  
                <Image
                    style={styles.recong}
                    source={require('C:/Users/trust/OneDrive/Documents/Upwork/Customers/@Ali Usama, Plabesk/ali-screens/src/Images/Passcode.png')}
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
        width:50,
        height:50
    },
    recong:{
        marginTop:24,
        
       
        width:85,
        height:23

    },
    
  
});