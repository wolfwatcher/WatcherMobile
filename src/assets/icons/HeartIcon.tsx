import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const HeartIcon: FC<SvgProps> = ({fill, ...props}) => {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
      <Path
        d="M13.018.285C11.358.285 9.906 1 9 2.205 8.094 1 6.642.285 4.982.285A4.988 4.988 0 000 5.268c0 5.625 8.34 10.178 8.695 10.366a.642.642 0 00.61 0C9.66 15.446 18 10.892 18 5.268A4.988 4.988 0 0013.018.285zM9 14.332c-1.467-.855-7.714-4.75-7.714-9.064A3.701 3.701 0 014.982 1.57c1.563 0 2.875.833 3.423 2.17a.643.643 0 001.19 0c.548-1.34 1.86-2.17 3.423-2.17a3.701 3.701 0 013.696 3.697c0 4.307-6.248 8.208-7.714 9.064z"
        fill={fill || '#fff'}
      />
    </Svg>
  );
};

export default HeartIcon;
