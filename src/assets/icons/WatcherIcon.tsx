import React, {FC} from 'react';
import {Circle, Path, Svg, SvgProps} from 'react-native-svg';

const WatcherIcon: FC<SvgProps> = ({...props}) => {
  return (
    <Svg width={78} height={78} viewBox="0 0 78 78" fill="none" {...props}>
      <Path
        d="M73 39C73 57.7777 57.7777 73 39 73C20.2223 73 5 57.7777 5 39C5 20.2223 20.2223 5 39 5C57.7777 5 73 20.2223 73 39Z"
        fill="white"
        stroke="#333333"
        strokeWidth={10}
      />
      <Circle
        cx={40}
        cy={38}
        r={7}
        fill="#333333"
        stroke="#333333"
        strokeWidth={10}
      />
      <Circle
        cx={35}
        cy={35}
        r={5}
        fill="white"
        stroke="#333333"
        strokeWidth={2}
      />
    </Svg>
  );
};

export default WatcherIcon;
