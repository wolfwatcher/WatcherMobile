import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

interface PageProps extends ViewProps {}

const Page: FC<PageProps> = ({children, ...props}) => {
  return (
    <View className="flex-1 container px-6 " {...props}>
      {children}
    </View>
  );
};

export default Page;
