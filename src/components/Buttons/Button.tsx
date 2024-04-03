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

const Button: FC<ButtonProps> = ({style, children, variant, ...props}) => {
  return (
    <TouchableOpacity
      className={variant}
      style={[styles.button, variant && styles[variant], style]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
  },
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
});

export default Button;
