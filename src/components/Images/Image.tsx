import React from 'react';
import {Image as RNImage, ImageProps, StyleSheet} from 'react-native';

const Image = ({source, style}: ImageProps) => {
  return <RNImage source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
  },
});

export default Image;
