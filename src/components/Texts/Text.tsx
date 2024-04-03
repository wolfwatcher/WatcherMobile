import '@/../global.css'
import React, {FC} from 'react';
import {StyleSheet, Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {}

const variantStyles = {
  primary: 'bg-primary',
  secondary: 'bg-white text-orca',
};

const Text: FC<TextProps> = ({children, ...props}) => {
  return (
    <RNText style={styles.text} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "avenir",
    color: "white"
  }
})

export default Text;
