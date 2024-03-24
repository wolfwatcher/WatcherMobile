import React, {FC} from 'react';
import {TextProps, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Text} from 'components';
import {styled} from 'nativewind';

interface LinkProps extends TouchableOpacityProps {
  textStyle?: TextProps['style'];
}

const Link: FC<LinkProps> = ({children, textStyle, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

// The styled function can take multiple arguments
// but seems to be unable to find the proper declaration
// noinspection TypeScriptValidateTypes
export default styled(Link, {props: {textStyle: true}});
