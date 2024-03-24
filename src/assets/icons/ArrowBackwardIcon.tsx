import * as React from 'react';
import {Svg, SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
import {FC} from 'react';

const ArrowBackwardIcon: FC<SvgProps> = ({...props}) => {
  return (
    <Svg width={19} height={15} fill="none" {...props}>
      <G clipPath="url(#prefix__clip0_2674_3974)">
        <Path
          d="M0 7.402c0 .244.107.47.303.655l6.484 6.474c.195.186.4.274.635.274.478 0 .86-.352.86-.84a.855.855 0 00-.245-.615L5.85 11.123 1.982 7.598l-.205.478 3.145.195h12.353c.508 0 .86-.36.86-.869 0-.507-.352-.869-.86-.869H4.922l-3.145.196.205.488L5.85 3.682l2.187-2.227A.871.871 0 008.281.84c0-.488-.38-.84-.86-.84-.234 0-.439.078-.653.293L.303 6.748A.895.895 0 000 7.402z"
          fill="#fff"
          fillOpacity={0.85}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_2674_3974">
          <Path fill="#fff" d="M0 0h18.496v14.815H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowBackwardIcon;
