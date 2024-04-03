import "@/../global.css"

import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'error' | 'success' | 'neutral';
}

const variantStyles = {
  primary: 'bg-primary',
  secondary: 'bg-white',
  error: 'bg-error',
  success: 'bg-success',
  neutral: 'bg-shark border border-white',
};

const Button: FC<ButtonProps> = ({children, variant, ...props}) => {
  return (
    <TouchableOpacity
      className={`rounded-lg py-4 w-full items-center ${
        variant && variantStyles[variant]
      }`}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;
