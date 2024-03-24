import React from 'react';
import {LoginForm, Page, SocialNetworkGroup, Text} from 'components';
import {WatcherIcon} from 'assets/icons';

const LoginScreen = () => {
  return (
    <Page className="items-center justify-center">
      <WatcherIcon className="mb-12" />
      <LoginForm className="mb-16" />
      <Text className="font-avenir-black text-lg mb-8">
        Connectez-vous avec
      </Text>
      <SocialNetworkGroup />
    </Page>
  );
};

export default LoginScreen;
