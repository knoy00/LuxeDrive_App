import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.icon_wrapper}>
        <Icon name="angle-left" color="white" size={30}/>
      </View>
      
      <View style={styles.welcome_text_wrapper}>
        <Text style={styles.welcome_text}>Welcome Back</Text>
      </View>

      <View style={styles.input_wrapper}>
        <TextInput
            style={styles.input_text}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
        />

        <TextInput
            style={styles.input_text}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />
      </View>

      <Text style={styles.forgot_password}>Forgot Password?</Text>

      <TouchableOpacity style={styles.sign_in_button}>
        <Text style={styles.text_sign_in}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.seperator_wrapper}>
        <View style={styles.seperator}></View>
        <Text style={styles.seperator_text}>Or sign in with</Text>
        <View style={styles.seperator}></View>
      </View>

    </View>
  )
}

export default SignIn
// <Icon color="white" name="copyright" size={15}/>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        width: '100%',
    },
    welcome_text_wrapper: {
        width: '100%',
        paddingHorizontal: 20
    },
    welcome_text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 400,
        marginTop: 120,
        textAlign: 'left'
    },
    icon_wrapper: {
        position: 'absolute',
        top: 40,
        left: 20,
        borderWidth: 1,
        borderColor: '#5d5d5d',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 40
    },
    input_text: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#cecece',
        borderRadius: 10,
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 17,
        fontWeight: 400,
        marginBottom: 20,
    },
    forgot_password: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 400,
        marginTop: 0,
        marginLeft: '60%',
        marginBottom: 30,

    },
    sign_in_button: {
        width: '90%',
        height: 50,
        backgroundColor: '#f40808',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text_sign_in: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 400,
    },
    seperator_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    seperator: {
        width: '30%',
        height: 1,
        backgroundColor: '#fff',
    },
    seperator_text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 400,
        marginHorizontal: 10,
    }
});