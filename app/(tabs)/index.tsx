import { View, Text } from 'react-native';
import SplashScreen from '@/SplashScreen'
import Home from '@/screens/Home'
import Signup from '@/screens/Signup'

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
      <Signup />
    </View>
  );
}
