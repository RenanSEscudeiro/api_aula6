import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigations
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation /stack';  

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Páginas
import Login from './Pages/Login';
import Home from './Pages/Home';
const Autenticado = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
