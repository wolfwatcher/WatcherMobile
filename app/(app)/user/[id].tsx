import {Button, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {router, useLocalSearchParams} from 'expo-router';
import {useAppDispatch} from '@/hooks';
import {logout} from '@/store/slices/authSlice';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(logout());
    router.replace('/(auth)/login');
  };

  const {id} = useLocalSearchParams();

  return (
    <Page style={styles.page}>
      <View style={styles.globalView}>
        <Text
          style={{
            color: 'white',
          }}>
          <Button onPress={handlePress} variant="primary">
            <Text>Se déconnecter du compte de {id}</Text>
          </Button>
        </Text>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
  },
  globalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
