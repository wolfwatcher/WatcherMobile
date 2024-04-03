import '@/../global.css';
import React, {FC, ReactNode} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '@/styles/theme';

interface BoxCheckboxProps extends TouchableOpacityProps {
  children: ReactNode;
  color: string;
  checked: boolean;
  onPress: () => void;
}

const BoxCheckbox: FC<BoxCheckboxProps> = ({
  style,
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
      style={[styles(checked, color).checkbox, style]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = (checked: boolean, color: string) =>
  StyleSheet.create({
    checkbox: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
      borderRadius: 10,
      backgroundColor: checked
        ? color === 'success'
          ? colors.success
          : colors.error
        : colors.shark,
    },
  });

export default BoxCheckbox;
