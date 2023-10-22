import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginForm from '../components/LoginForm'
import LoginScreen from '../screens/LoginScreen';
import SignScreen from '../screens/SignScreen';
import SignForm from '../components/SignForm';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name= 'Home' component={HomeScreen} />
            <Stack.Screen name= 'Inicia sesión' component={LoginScreen} />
            <Stack.Screen name= 'Crear cuenta' component={SignScreen} />
        </Stack.Navigator>
    )
}