import '@/../global.css';
import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface PageProps extends ViewProps {}

const Page: FC<PageProps> = ({style, children, ...props}) => {
  return (
    <View style={[styles.view, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 6,
  },
});

export default Page;
