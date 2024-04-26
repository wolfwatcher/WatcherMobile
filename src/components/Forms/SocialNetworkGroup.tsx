import '@/../global.css';

import React, {FC, useEffect, useState} from 'react';
import {Alert, Linking, View, ViewProps} from 'react-native';
import {SocialNetworkButton} from '@/components';
import {DiscordIcon, GoogleIcon} from '@/assets/icons';
import {supabase} from '@/services/supabase';
import {Provider} from '@supabase/supabase-js';
import {useAppDispatch} from '@/hooks';

interface SocialNetworkGroupProps extends ViewProps {}

const useInitialURL = () => {
  const [url, setUrl] = useState<string | undefined>();
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl ?? '');
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return {url, processing};
};

const SocialNetworkGroup: FC<SocialNetworkGroupProps> = props => {
  const {url: initialUrl, processing} = useInitialURL();
  const linking = 'com.watchermobile://login';
  const dispatch = useAppDispatch();

  const handleProvider = async (
    provider: Provider,
    options?:
      | {
          redirectTo?: string | undefined;
          scopes?: string | undefined;
          queryParams?: {[p: string]: string} | undefined;
          skipBrowserRedirect?: boolean | undefined;
        }
      | undefined,
  ) => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: options,
    });

    if (error) {
      Alert.alert(error.message);
      throw error;
    }

    const res = await Linking.openURL(data.url);
    console.log(res);

    if (res.type === 'success') {
      const {url} = res;
      console.log(url);
    }

    /*dispatch(
              login({
                token: 'allo',
                refreshToken: 'random',
              }),
            );*/
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 36,
      }}
      {...props}>
      <SocialNetworkButton
        onPress={() =>
          handleProvider('google', {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
            redirectTo: linking,
            skipBrowserRedirect: true,
          })
        }>
        <GoogleIcon width={24} height={24} />
      </SocialNetworkButton>
      <SocialNetworkButton
        onPress={() =>
          handleProvider('discord', {
            redirectTo: linking,
          })
        }>
        <DiscordIcon width={24} height={24} />
      </SocialNetworkButton>
      {/*<SocialNetworkButton>
        <FacebookIcon width={24} height={24} />
      </SocialNetworkButton>*/}
    </View>
  );
};

export default SocialNetworkGroup;
