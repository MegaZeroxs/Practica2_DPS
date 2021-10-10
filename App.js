import React from 'react';
import {
  Text,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { SumaScreen } from './components/SumaScreen';
import { RestaScreen } from './components/RestaScreen';
import { MultiScreen } from './components/MultiScreen';
import { DivScreen } from './components/DivScreen';
import { FactorialScreen } from './components/FactorialScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Sum"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#FFF' }}

      >
        <Tab.Screen
          name="Suma"
          component={SumaScreen}
          options={{
            tabBarLabel: 'Sumar',
            tabBarIcon: ({ color }) => (
              <Text style={{color: '#e91e63',fontSize: 18}}>+</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Resta"
          component={RestaScreen}
          options={{
            tabBarLabel: 'Restar',
            tabBarIcon: ({ color }) => (
              <Text style={{color: '#e91e63',fontSize: 18}}>-</Text>
            ),
          }}
        />
    
        <Tab.Screen
          name="Multiplicar"
          component={MultiScreen}
          options={{
            tabBarLabel: 'Multiplicar',
            tabBarIcon: ({ color }) => (
              <Text style={{color: '#e91e63',fontSize: 18}}>*</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Dividir"
          component={DivScreen}
          options={{
            tabBarLabel: 'División',
            tabBarIcon: ({ color }) => (
              <Text style={{color: '#e91e63',fontSize: 18}}>/</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Factorial"
          component={FactorialScreen}
          options={{
            tabBarLabel: 'Factorial',
            tabBarIcon: ({ color }) => (
              <Text style={{color: '#e91e63',fontSize: 18}}>Fa</Text>
            ),
          }}
        />
    
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;