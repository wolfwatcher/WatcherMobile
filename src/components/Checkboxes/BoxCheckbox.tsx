import React, {FC, ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface BoxCheckboxProps extends TouchableOpacityProps {
  children: ReactNode;
  color: string;
  checked: boolean;
  onPress: () => void;
}

const BoxCheckbox: FC<BoxCheckboxProps> = ({
  children,
  checked,
  color,
  onPress,
  ...props
}) => {
  const handlePress = () => {
    // custom logic here
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`flex-1 flex-row items-center justify-center px-4 py-8 bg-shark rounded-lg ${
        checked ? (color === 'success' ? 'bg-success' : 'bg-error') : ''
      }`}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default BoxCheckbox;
