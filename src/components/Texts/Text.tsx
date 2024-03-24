import React, {FC} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

interface TextProps extends RNTextProps {}

const variantStyles = {
  primary: 'bg-primary',
  secondary: 'bg-white text-orca',
};

const Text: FC<TextProps> = ({children, ...props}) => {
  return (
    <RNText className={'font-avenir text-white'} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
