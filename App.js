import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/dashboard/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChapterScreen from './src/chapterContent/ChapterScreen';
import LoginScreen from './src/auth/LoginScreen';
import { COLORS } from './src/constants/Global';
import RegisterScreen from './src/auth/RegisterScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitleAlign:'center',
          contentStyle:{backgroundColor: COLORS.white}
        }}      
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{title:'Sign in'}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Register',headerBackVisible:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title:'Tractology'}} />
        <Stack.Screen name="ChapterScreen" component={ChapterScreen} options={{title:'Tractology'}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}