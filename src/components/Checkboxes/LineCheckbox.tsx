import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '@/styles/theme';

interface LineCheckboxProps extends ViewProps {
  text: string;
  onPress: () => void;
  isChecked: boolean;
}

const LineCheckbox: FC<LineCheckboxProps> = ({
  style,
  text,
  onPress,
  isChecked,
  ...props
}) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <View style={[styles.view, style]} {...props}>
      <BouncyCheckbox
        text={text}
        fillColor={isChecked ? colors.success : colors.swan + '50'}
        unfillColor={colors.swan + '50'}
        iconStyle={styles.iconStyle}
        innerIconStyle={styles.iconStyle}
        textStyle={styles.textStyle}
        onPress={handlePress}
        disableBuiltInState
        isChecked={isChecked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: colors.swan + '4D',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconStyle: {
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    textDecorationLine: 'none',
  },
});

export default LineCheckbox;
