import React from 'react';
import {Text, View} from 'react-native';
import {HomeScreenProps} from '../../navigation/type';

import {styles} from './styles';

function Home({}: HomeScreenProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
