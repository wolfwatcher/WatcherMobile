import "@/../global.css"

import React, {FC} from 'react';
import {TextProps, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from '@/components/Texts/Text';

interface LinkProps extends TouchableOpacityProps {
    textStyle?: TextProps['style'];
}

const Link: FC<LinkProps> = ({style, children, textStyle, ...props}) => {
    return (
        <TouchableOpacity {...props} style={style}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Link;
