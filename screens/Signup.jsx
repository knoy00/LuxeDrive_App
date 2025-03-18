import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

function Signup() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/woman.png')}/>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background_img: {
        
    }
})