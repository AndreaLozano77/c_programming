import { View, Text } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'


export default function LoginScreen() {
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold',  marginTop:10, marginBottom:10, }}>Inicia Sesión</Text>
            <LoginForm></LoginForm>
        </View>
    )
}