import '@/../global.css';

import React, {FC, useState} from 'react';
import {Button, Link, Text, TextInput} from '@/components';
import {Alert, StyleSheet, View, ViewProps} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {login} from '@/store/slices/authSlice';
import {supabase} from '@/services';
import {useRouter} from 'expo-router';
import {AuthError} from '@/types';
import {initialState, progress} from '@/store/slices/registerSlice';

interface LoginFormProps extends ViewProps {}

const LoginForm: FC<LoginFormProps> = ({...props}) => {
  const dispatch = useAppDispatch();
  const progression = useAppSelector(state => state.register);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const {error, data} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      if (error.message === AuthError.invalidLogin.apiMessage)
        Alert.alert(AuthError.invalidLogin.translated);

      return;
    }

    dispatch(
      login({
        token: data.session?.access_token,
        refreshToken: data.session?.refresh_token,
      }),
    );

    router.replace('/(app)/home');
  };

  const handleRegister = () => {
    if (progression.step === 0) {
      router.navigate('/register');
      return;
    }
    // ask user if they want to continue their profile creation
    Alert.alert('Souhaites-tu reprendre ton inscription ?', '', [
      {
        text: 'Oui',
        onPress: () => router.navigate('/register'),
      },
      {
        text: 'Non',
        onPress: () => {
          dispatch(progress(initialState));
          router.navigate('/register');
        },
      },
    ]);
  };

  return (
    <View
      style={{
        width: '100%',
      }}
      {...props}
    >
      <Text style={styles.label}>Adresse mail</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Adresse mail"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize={'none'}
      />
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize={'none'}
      />
      <Button
        style={{
          marginBottom: 16,
        }}
        variant="primary"
        onPress={handleLogin}
      >
        <Text>Connexion</Text>
      </Button>
      <Link onPress={handleRegister}>Créer un compte</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'avenir-black',
    marginBottom: 8,
  },
  textInput: {
    marginBottom: 16,
  },
});

export default LoginForm;
