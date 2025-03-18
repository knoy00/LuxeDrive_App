import React from 'react'
import {View, StyleSheet, Image} from "react-native"

function SplashScreen() {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../LuxeDrive/assets/images/LuxeDrive_logo.png')}
            style={{width: 300, height: 300}}
            resizeMode='contain'
        />        
    </View>

  )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#000',
        height: '100%',
    }
})