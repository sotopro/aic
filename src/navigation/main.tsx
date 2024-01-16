import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home';
import Details from '../screens/details';
import {MainNavigatorParamList} from './type';
import {ROUTES} from '../constants';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

function MainNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        presentation: 'modal',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={Details}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
