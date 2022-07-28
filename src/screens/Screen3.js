import { StyleSheet, Text,View, SafeAreaView, ScrollView, StatusBar,Image, TouchableOpacity, Touchable } from 'react-native';
import React from 'react'
import Logo2 from '../Components/HomeLogo'
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TabsHome from '../Components/TabsHome'
export default function Screen1() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={{flex:2,flexDirection:"row"}}>
                <View style={{marginTop:50,marginLeft:50}}>
                    <Logo2 />
                </View>
            </View>
            <View style={{flex:4, flexDirection:"row"}}>
                <View style={{width: 150,height: 250,backgroundColor: "#FFFFFF", elevation:8,borderRadius: 8,marginLeft:30,marginTop:30}}>
                <Image
                    style={{width:150,height:150,position:"absolute"}}
                    source={require('../Images/Screen3/male.png')}
                />
                <Text style={{marginLeft:20,marginTop:170,fontWeight:"700",fontSize:20}}>Setup</Text>
                <Text style={{marginLeft:20,marginTop:5,fontWeight:"700",fontSize:11}}>My worry time schedule & place</Text>
                </View>
                <View style={{width: 150,height: 250,backgroundColor: "#FFFFFF", elevation:8,borderRadius: 8,marginLeft:20,marginTop:30}}>
                <Image
                    style={{width:150,height:150,position:"absolute"}}
                    source={require('../Images/Screen3/female.png')}
                />
                <Text style={{marginLeft:20,marginTop:170,fontWeight:"700",fontSize:20}}>My Worries</Text>
                <Text style={{marginLeft:20,marginTop:5,fontWeight:"700",fontSize:11}}>My Unsorted,solvable,Unsolvable and solved worries</Text>
                </View>
                

            </View>
            
          <View style={{flex:3, flexDirection:"row"}}>
          <View style={{width: 320,height: 75,backgroundColor: "#FFFFFF", elevation:8,borderRadius: 8,marginLeft:30,marginTop:30}}>
                <Image
                    style={{width:150,height:75,position:"absolute",borderTopLeftRadius:8,borderBottomLeftRadius:8}}
                    source={require('../Images/Screen3/Tips.png')}
                />
                <Text style={{marginLeft:170,marginTop:10,fontWeight:"700",fontSize:20}}>Tips</Text>
                <Text style={{marginLeft:170,marginTop:5,fontWeight:"700",fontSize:11}}>Tips on Solving, Accepting & Reflecting on my worries. </Text>
                
                </View>
          </View>

          <View style={{flex:4, flexDirection:"column",marginTop:30,width: 320,height: 120,backgroundColor: "#FFFFFF", elevation:8,borderRadius: 8,marginLeft:30,marginTop:30}}>
              <View style={{borderBottomColor:"#68686833",borderBottomWidth:0.4,height:40,flexDirection:"row"}}>
              <Octicons name="download" size={20} color="#007BC1" style={{marginTop:10,marginLeft:10}}/>
              <Text style={{fontWeight:"700",fontSize:16,display:"flex",alignItems:"center",marginLeft:20,marginTop:10}}>Download my Archives</Text>
              <AntDesign name="right" size={20} color="black" style={{marginLeft:90,marginTop:10}} />
              </View>
              <View style={{borderBottomColor:"#68686833",borderBottomWidth:0.4,height:40,flexDirection:"row"}}>
              <Image
                    style={{marginTop:10,marginLeft:10,}}
                    source={require('../Images/Screen3/icon.png')}
                    size="20"
                />
              <Text style={{fontWeight:"700",fontSize:16,display:"flex",alignItems:"center",marginLeft:20,marginTop:10}}>About Contain Your Brain</Text>
              <AntDesign name="right" size={20} color="black" style={{marginLeft:70,marginTop:10}} />
              </View>
              <View style={{height:40,flexDirection:"row"}}>
              <SimpleLineIcons name="eye" size={20} color="#007BC1" style={{marginTop:10,marginLeft:10}}/>
              <Text style={{fontWeight:"700",fontSize:16,display:"flex",alignItems:"center",marginLeft:20,marginTop:10}}>View instructions screens</Text>
              <AntDesign name="right" size={20} color="black" style={{marginLeft:66,marginTop:10}} />
              </View>
          </View>
          <View style={{marginTop:90}}>
            <TabsHome />
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