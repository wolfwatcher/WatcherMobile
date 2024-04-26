import '@/../global.css';

import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SocialNetworkButtonProps extends TouchableOpacityProps {}

const SocialNetworkButton: FC<SocialNetworkButtonProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.network, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  network: {
    backgroundColor: 'rgb(255 255 255 / 0.3)',
    borderRadius: 9999,
    padding: 12,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
  },
});

export default SocialNetworkButton;
