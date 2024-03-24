import React, {FC} from 'react';
import {Button, Page, Text} from 'components';
import {StyleSheet, View} from 'react-native';
import {RegisterStackParamList} from 'types';
import {PersonalInfosSvg} from 'assets/images';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {AppleIcon, FacebookIcon, GoogleIcon} from 'assets/icons';
import MailIcon from '../../../assets/icons/MailIcon.tsx';

const PersonalInfos: FC<
  NativeStackScreenProps<RegisterStackParamList, 'PersonalInfosScreen'>
> = ({navigation}) => {
  const handleNext = (choice: string) => {
    if (choice === 'mail') {
      navigation.navigate('PersonalInfosDetailScreen');
      return;
    }
    // @TODO proper logic
    if (choice === 'apple') {
    } else if (choice === 'google') {
    } else if (choice === 'facebook') {
    }
  };

  return (
    <Page className="px-0 pt-8 pb-8">
      <PersonalInfosSvg className="self-center mb-24" />
      <View className="flex" style={styles.buttonsContainer}>
        <Button variant="neutral" onPress={() => handleNext('apple')}>
          <View className="flex flex-row items-center">
            <AppleIcon />
            <Text className="ml-6">Continuer avec Apple</Text>
          </View>
        </Button>
        <Button variant="neutral" onPress={() => handleNext('google')}>
          <View className="flex flex-row items-center">
            <GoogleIcon />
            <Text className="ml-6">Continuer avec Google</Text>
          </View>
        </Button>
        <Button variant="neutral" onPress={() => handleNext('facebook')}>
          <View className="flex flex-row items-center">
            <FacebookIcon />
            <Text className="ml-6">Continuer avec Facebook</Text>
          </View>
        </Button>
        <Button variant="neutral" onPress={() => handleNext('mail')}>
          <View className="flex flex-row items-center">
            <MailIcon />
            <Text className="ml-6">Continuer avec votre email</Text>
          </View>
        </Button>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 24,
  },
});

export default PersonalInfos;
