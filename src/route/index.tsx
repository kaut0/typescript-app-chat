import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
