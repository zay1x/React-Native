import React, {PropsWithChildren} from 'react';
import {StyleProp, Text as TextBase, TextProps, TextStyle} from 'react-native';

import styles from './styles';

interface Props extends PropsWithChildren, TextProps {
  style?: StyleProp<TextStyle>;
}

const Text = ({children, style, ...restProps}: Props) => {
  return (
    <TextBase style={[styles.container, style]} {...restProps}>
      {children}
    </TextBase>
  );
};

export default Text;
