import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

function Home() {
  return (
      <LinearGradient
      colors={['#ffffff', '#000000']}
      style={styles.container}
      >
        <Text>Home</ Text>
      </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});