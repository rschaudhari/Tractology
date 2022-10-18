import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import LoginScreen from './src/screens/auth/LoginScreen';
import { COLORS } from './src/constants/Global';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import CourseScreen from './src/screens/CourseScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

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
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{title:'Register',headerBackVisible:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" 
          component={ProfileScreen} 
          options={{
            title: 'Profile',
            headerBackVisible:false,
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}