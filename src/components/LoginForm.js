import {TextInput, Button, Text, View} from 'react-native'

export default function LoginForm() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder='email' style={{ width: 200, height: 40, borderColor: '#ccc', borderWidth: 1, marginTop:10, marginBottom:10 }}></TextInput>
            <TextInput placeholder='password' style={{ width: 200, height: 40, borderColor: '#ccc', borderWidth: 1, marginTop:10, marginBottom:20 }}></TextInput>
            <Button title='Enviar' onPress={() => console.log
            ('Presionado')} />
        </View>
    )

}