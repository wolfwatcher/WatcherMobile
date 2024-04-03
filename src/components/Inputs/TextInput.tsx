import React, {FC} from 'react';
import {
    StyleSheet,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from 'react-native';
import {colors} from '@/styles/theme';

interface TextInputProps extends RNTextInputProps {
}

const TextInput: FC<TextInputProps> = ({style, ...props}) => {
    return (
        <RNTextInput style={[styles.input, style]} {...props} placeholderTextColor={colors.rabbit}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        fontFamily: "avenir",
        paddingHorizontal: 32,
        paddingVertical: 6,
        color: "black",
        borderRadius: 10
    }
})

export default TextInput
