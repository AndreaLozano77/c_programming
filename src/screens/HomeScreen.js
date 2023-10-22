import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const {navigation} = props
    const goToLogin = () => 
        navigation.navigate('Inicia sesión')
    const goToCrear = () =>
        navigation.navigate('Crear cuenta')

    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold',  marginTop:10, marginBottom:10,}}> Esta es la página del Home</Text>
            <Button onPress={goToLogin} title='ir a Login'/>
            <Button onPress={goToCrear} title='ir a Crear'/>
        </View>
    )

}