import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//Logo class component 
export default class Logo extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={require('../Images/Logo1.png')}
                />
            </View>
        )
    }
}
//You can modify the looks of your code here.
const styles = StyleSheet.create({
    
    tinyLogo: {
        width: 160,
        height: 280,
    },
    logo: {
        width: 66,
        height: 58,
    },
});