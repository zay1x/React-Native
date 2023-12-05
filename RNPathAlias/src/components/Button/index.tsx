import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import styles from './styles';

interface Props extends PropsWithChildren, TouchableOpacityProps {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}

const Button = ({
  children,
  containerStyle,
  label = 'Button',
  labelStyle,
  ...restProps
}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...restProps}>
      {children ?? <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
