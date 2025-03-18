import { View, Text } from 'react-native';
import SplashScreen from '@/SplashScreen'
import Home from '@/screens/Home'
import AuthScreen from '@/screens/AuthScreen'
import Signin from '@/screens/SignIn'

import { useState, useEffect } from 'react';

export default function HomeScreen() {

  const [isSplashScreeen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 4000)
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* {isSplashScreeen ? <SplashScreen /> : <Home />} */}
      <Signin />
    </View>
  );
}
