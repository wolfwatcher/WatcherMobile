import '../../global.css';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {WatcherIcon} from '@/assets/icons';
import {Page, Text} from '@/components';
import {LoginForm, SocialNetworkGroup} from '@/components/Forms';

const LoginScreen = () => {
  return (
    <Page style={styles.page}>
      <WatcherIcon
        style={{
          marginBottom: 48,
          alignSelf: 'center',
        }}
      />
      <LoginForm
        style={{
          marginBottom: 64,
        }}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>Connectez-vous avec</Text>
        <SocialNetworkGroup />
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'avenir-black',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 32,
  },
});

export default LoginScreen;
