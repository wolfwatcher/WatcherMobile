import React, {FC, useState} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from 'styles/theme';

interface LineCheckboxProps extends ViewProps {
  text: string;
  onPress: () => void;
}

const LineCheckbox: FC<LineCheckboxProps> = ({text, onPress, ...props}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onPress();
  };

  return (
    <View className="w-full bg-swan/30 rounded-lg px-4 py-3" {...props}>
      <BouncyCheckbox
        text={text}
        fillColor={isChecked ? colors.success : colors.swan + '50'}
        unfillColor={colors.swan + '50'}
        iconStyle={styles.iconStyle}
        innerIconStyle={styles.iconStyle}
        textStyle={styles.textStyle}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    borderRadius: 5,
  },
  textStyle: {
    color: colors.white,
    textDecorationLine: 'none',
  },
});

export default LineCheckbox;
