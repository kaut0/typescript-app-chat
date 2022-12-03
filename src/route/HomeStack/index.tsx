import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatScreen, Home} from '../../screen';

const Stack = createNativeStackNavigator();

const HomeStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
