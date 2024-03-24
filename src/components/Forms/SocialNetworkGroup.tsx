import React, {FC} from 'react';
import {Alert, Linking, View, ViewProps} from 'react-native';
import {SocialNetworkButton} from 'components';
import {DiscordIcon, GoogleIcon} from 'assets/icons';
import {supabase} from 'services/supabase.ts';

interface SocialNetworkGroupProps extends ViewProps {}

const SocialNetworkGroup: FC<SocialNetworkGroupProps> = props => {
  //const dispatch = useAppDispatch();

  const handleGoogle = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    console.log(data);

    if (error) {
      Alert.alert(error.message);
      return;
    } else {
      console.log(data);
      Linking.openURL(data.url);
      return 'success';
    }

    /*dispatch(
      login({
        token: 'allo',
        refreshToken: 'random',
      }),
    );*/
  };

  const handleDiscord = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    });

    console.log(data);

    if (error) {
      Alert.alert(error.message);
      return;
    } else {
      console.log(data);
      Linking.openURL(data.url);
      return 'success';
    }

    /*dispatch(
      login({
        token: 'allo',
        refreshToken: 'random',
      }),
    );*/
  };

  return (
    <View className="flex-row gap-9" {...props}>
      <SocialNetworkButton onPress={handleGoogle}>
        <GoogleIcon width={24} height={24} />
      </SocialNetworkButton>
      <SocialNetworkButton onPress={handleDiscord}>
        <DiscordIcon width={24} height={24} />
      </SocialNetworkButton>
      {/*<SocialNetworkButton>
        <FacebookIcon width={24} height={24} />
      </SocialNetworkButton>*/}
    </View>
  );
};

export default SocialNetworkGroup;
