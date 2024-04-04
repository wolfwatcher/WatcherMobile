import React from 'react';
import {Button, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import {PersonalInfosSvg} from '@/assets/images';
import {AppleIcon, FacebookIcon, GoogleIcon} from '@/assets/icons';
import MailIcon from '@/assets/icons/MailIcon';
import {useRouter} from 'expo-router';

const Personal = () => {
  const router = useRouter();
  const handleNext = (choice: string) => {
    if (choice === 'mail') {
      router.navigate('/subscriptions');
      return;
    }
    // @TODO proper logic
    if (choice === 'apple') {
    } else if (choice === 'google') {
    } else if (choice === 'facebook') {
    }
  };

  return (
    <Page style={styles.page}>
      <PersonalInfosSvg style={styles.header} />
      <View style={styles.buttonsContainer}>
        <Button variant="neutral" onPress={() => handleNext('apple')}>
          <View style={styles.buttonContainer}>
            <AppleIcon />
            <Text style={styles.buttonText}>Continuer avec Apple</Text>
          </View>
        </Button>
        <Button variant="neutral" onPress={() => handleNext('google')}>
          <View style={styles.buttonContainer}>
            <GoogleIcon />
            <Text style={styles.buttonText}>Continuer avec Google</Text>
          </View>
        </Button>
        <Button variant="neutral" onPress={() => handleNext('facebook')}>
          <View style={styles.buttonContainer}>
            <FacebookIcon />
            <Text style={styles.buttonText}>Continuer avec Facebook</Text>
          </View>
        </Button>
        <Button variant="neutral" onPress={() => handleNext('mail')}>
          <View style={styles.buttonContainer}>
            <MailIcon />
            <Text style={styles.buttonText}>Continuer avec votre email</Text>
          </View>
        </Button>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 0,
    paddingVertical: 32,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 96,
  },
  buttonsContainer: {
    gap: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 24,
  },
});

export default Personal;
