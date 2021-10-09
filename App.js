import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { SumaScreen } from './components/SumaScreen';
import { RestaScreen } from './components/RestaScreen';
import { MultiScreen } from './components/MultiScreen';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#FFF' }}
      >
        <Tab.Screen
          name="Suma"
          component={SumaScreen}
          options={{
            tabBarLabel: 'Sumatoria',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Resta"
          component={RestaScreen}
          options={{
            tabBarLabel: 'Resta',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
    
        <Tab.Screen
          name="Multiplicacion"
          component={MultiScreen}
          options={{
            tabBarLabel: 'Multiplicación',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
    
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;
