import React, {FC} from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const FacebookIcon: FC<SvgProps> = ({...props}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 11 21" fill="none" {...props}>
      <Path
        d="M0.781871 11.2104H2.96922V20.2154C2.96922 20.3932 3.11328 20.5372 3.29107 20.5372H6.99981C7.1776 20.5372 7.32165 20.3932 7.32165 20.2154V11.2528H9.8362C9.9997 11.2528 10.1373 11.1301 10.1559 10.9677L10.5378 7.65254C10.5483 7.56133 10.5194 7.46998 10.4584 7.40156C10.3973 7.33307 10.3099 7.29387 10.2182 7.29387H7.32178V5.21575C7.32178 4.5893 7.65908 4.27163 8.32441 4.27163C8.41923 4.27163 10.2182 4.27163 10.2182 4.27163C10.396 4.27163 10.54 4.12751 10.54 3.94978V0.906751C10.54 0.728961 10.396 0.584901 10.2182 0.584901H7.60829C7.58988 0.584 7.54901 0.58252 7.48876 0.58252C7.03592 0.58252 5.46188 0.671414 4.21851 1.81527C2.84087 3.08284 3.03237 4.60056 3.07814 4.86371V7.2938H0.781871C0.604082 7.2938 0.460022 7.43786 0.460022 7.61565V10.8885C0.460022 11.0663 0.604082 11.2104 0.781871 11.2104Z"
        fill="white"
      />
    </Svg>
  );
};

export default FacebookIcon;