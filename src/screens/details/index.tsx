import React from 'react';
import {Text, View} from 'react-native';
import {DetailsScreenProps} from '../../navigation/type';
import {styles} from './styles';

function Details({}: DetailsScreenProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
}

export default Details;
