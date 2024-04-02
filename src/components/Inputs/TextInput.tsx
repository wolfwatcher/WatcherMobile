import React, {FC} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {colors} from '@/styles/theme';

interface TextInputProps extends RNTextInputProps {}

const TextInput: FC<TextInputProps> = ({...props}) => {
  return (
    <RNTextInput
      className="font-avenir rounded-lg bg-white text-black p-2"
      {...props}
      placeholderTextColor={colors.rabbit}
    />
  );
};

export default TextInput;
