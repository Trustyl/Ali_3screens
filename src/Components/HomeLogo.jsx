import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//Logo class component 
export default class Logo2 extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{}}
                    source={require('../Images/Logo2.png')}
                />
            </View>
        )
    }
}
//You can modify the looks of your code here.
const styles = StyleSheet.create({
    
    tinyLogo: {
        width: 62.9,
        height: 94.6,
    },
    logo: {
        width: 66,
        height: 58,
    },
});