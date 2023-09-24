import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import JobCard from './cardJob';
import JopForm from './JobForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JobCard" component={JobCard} />
        <Stack.Screen name="JopForm" component={JopForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;