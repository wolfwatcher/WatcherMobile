import '@/../global.css';

import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '@/styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'error' | 'success' | 'neutral';
}

const variantStyles: {[key: string]: {}} = {
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: 'white',
  },
  error: {
    backgroundColor: colors.error,
  },
  success: {
    backgroundColor: colors.success,
  },
  neutral: {
    backgroundColor: colors.shark,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
  },
};

const Button: FC<ButtonProps> = ({style, children, variant, ...props}) => {
  return (
    <TouchableOpacity
      className={variant}
      style={[styles(variant).button, style]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = (variant?: string) =>
  StyleSheet.create({
    button: {
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      width: '100%',
      alignItems: 'center',
      ...variantStyles[variant ?? 'neutral'],
    },
  });

export default Button;
