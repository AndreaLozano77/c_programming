import { SafeAreaView, StyleSheet, Text, View } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from './src/components/LoginForm';
import SignForm from './src/components/SignForm';
import Saludar from './src/components/Saludar';


const LoginScreen = () => {
  return (
    <NavigationContainer>
      <NavigationStack>
      </NavigationStack>
    </NavigationContainer>
  );
}

const SignScreen = () => {
  return (
    <NavigationContainer>
      <NavigationStack>
      </NavigationStack>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title:{
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
// });

export default LoginScreen

