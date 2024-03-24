import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const MailIcon: FC<SvgProps> = ({...props}) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M23.077 3.27H.923A.923.923 0 000 4.191v15.693a1.846 1.846 0 001.846 1.846h20.308A1.846 1.846 0 0024 19.885V4.192a.923.923 0 00-.923-.923zM12 13.093L3.297 5.115h17.406L12 13.095zM8.62 12.5L1.846 18.71V6.29l6.774 6.21zm1.367 1.252l1.384 1.275a.923.923 0 001.249 0l1.384-1.275 6.693 6.133h-17.4l6.69-6.133zM15.38 12.5l6.774-6.21v12.42L15.38 12.5z"
        fill="#fff"
      />
    </Svg>
  );
};

export default MailIcon;
