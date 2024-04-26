import React, {FC} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {colors} from '@/styles/theme';

interface TextInputProps extends RNTextInputProps {}

const TextInput: FC<TextInputProps> = ({style, ...props}) => {
  return (
    <RNTextInput
      style={[styles.input, style]}
      {...props}
      placeholderTextColor={colors.rabbit}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    fontFamily: 'avenir',
    padding: 12,
    color: 'black',
    borderRadius: 10,
    fontSize: 18,
  },
});

export default TextInput;
