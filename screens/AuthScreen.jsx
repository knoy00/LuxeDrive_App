import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
function AuthScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/LuxeDrive_logo.png')} style={styles.logo_img} />
        <View style={styles.text_container}>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.text_title_signin}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.text_title_signup}>Sign Up</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.text_version}>LuxeDrive Group - V 1.1.2</Text>
            </View>

        </View>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        width: '100%',
        padding: 20
        
        
    },
    logo_img: {
        width: 300,
        height: 100,
        marginTop: 80,
        marginBottom: 0,
        resizeMode: 'contain',

    },
    text_container:{
        marginTop: '95%',
        width: '100%',
        

    },
    text_title_signin: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 100,
        width: '100%',
        textAlign: 'center',

    },
    text_title_signup: {
        color: '#fff',
        fontSize: 17,    
        fontWeight: 'bold',
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#f40808',
        paddingVertical: 20,
        paddingHorizontal: 100,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#f40808',
        opacity: 0.8,
        marginBottom: 20,

    },
    text_version: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 100,
        width: '100%',
        textAlign: 'center',
    },
    
  
    
})