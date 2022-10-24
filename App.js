import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import LoginScreen from './src/screens/auth/LoginScreen';
import { COLORS } from './src/constants/Global';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import CourseScreen from './src/screens/CourseScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CourseContentScreen from './src/screens/CourseContentScreen';
import { StatusBar } from 'react-native';
import { useFonts } from "@use-expo/font";



const customFonts = {
  Bold: require("./assets/fonts/Raleway-Bold.ttf"),
  Light: require("./assets/fonts/Raleway-Light.ttf"),
  Medium: require("./assets/fonts/Raleway-Medium.ttf"),
  Regular: require("./assets/fonts/Raleway-Regular.ttf"),
  SemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
};

export default function App() {

  let barHeight = StatusBar.currentHeight;
  const Stack = createNativeStackNavigator();
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null;
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerTitleAlign:'center',
            contentStyle:{
              backgroundColor: COLORS.white,
              paddingTop: Platform.OS === "android" ? barHeight  : 0
            }
          }}      
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
          <Stack.Screen name="CourseScreen" component={CourseScreen} options={{headerShown:false}} />
          <Stack.Screen 
            name="CourseContent" 
            component={CourseContentScreen} 
            options={{headerShown:false}} />
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
}