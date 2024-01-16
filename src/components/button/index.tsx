import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const Button = ({onPress, text}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
