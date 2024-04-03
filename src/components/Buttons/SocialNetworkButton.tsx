import "@/../global.css"

import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface SocialNetworkButtonProps extends TouchableOpacityProps {}

const SocialNetworkButton: FC<SocialNetworkButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      className="bg-white/30 rounded-full p-3 border-white border-solid border-2"
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default SocialNetworkButton;
