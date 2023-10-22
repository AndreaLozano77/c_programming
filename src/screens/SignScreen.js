import { View, Text } from 'react-native'
import React from 'react'
import SignForm from '../components/SignForm'


export default function SignScreen() {
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop:10, marginBottom:10, }}>Crea una Cuenta</Text>
            <SignForm></SignForm>
        </View>
    )
}