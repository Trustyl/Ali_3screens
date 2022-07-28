import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from '../ali-screens/src/screens/Screen1'
import Screen2 from '../ali-screens/src/screens/Screen2'
import Screen3 from '../ali-screens/src/screens/Screen3'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Starter"}>
      <Stack.Screen name="Home" component={Screen1} options={{ title: 'Overview', headerShown: false }}  />
      <Stack.Screen name="Slides" component={Screen2} options={{ title: 'Overview', headerShown: false }}  />
      <Stack.Screen name="Starter" component={Screen3} options={{ title: 'Overview', headerShown: false }}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

