import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharacterSelectScreen from './src/screens/CharacterSelectScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';

const Stack = createNativeStackNavigator();

// Dark theme for navigation
const DarkTheme = {
  dark: true,
  colors: {
    primary: '#FFD700',
    background: '#0a0a0f',
    card: '#0a0a0f',
    text: '#ffffff',
    border: '#1a1a2e',
    notification: '#FFD700',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#0a0a0f' },
        }}
      >
        <Stack.Screen 
          name="CharacterSelect" 
          component={CharacterSelectScreen}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen 
          name="Calendar" 
          component={CalendarScreen}
        />
        <Stack.Screen 
          name="Workout" 
          component={WorkoutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
