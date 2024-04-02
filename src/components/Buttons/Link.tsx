import React, {FC} from 'react';
import {TextProps, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Text} from '@/components';

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

export default Link;