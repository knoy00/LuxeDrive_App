import { View, Text } from 'react-native';
import SplashScreen from '@/SplashScreen'
import Home from '@/screens/Home'
import AuthScreen from '@/screens/AuthScreen'
import Signin from '@/screens/SignIn'
import SignUp from '@/screens/SignUp'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function HomeScreen() {

  const [isSplashScreeen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 4000)
  })

  function StackNavigator(){
    return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: 'Home' }} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerTitle: 'Signin' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitle: 'Signup' }} />
      </Stack.Navigator> 
    )
  }
  return (
    <>
      <StackNavigator />
    </>
  );
}
