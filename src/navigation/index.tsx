import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './main';

function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
