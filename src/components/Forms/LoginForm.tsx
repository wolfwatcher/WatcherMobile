import '@/../global.css';

import React, {FC, useState} from 'react';
import {Button, Link, Text, TextInput} from '@/components';
import {Alert, StyleSheet, View, ViewProps} from 'react-native';
import {useAppDispatch} from '@/hooks';
import {login} from '@/store/slices/authSlice';
import {supabase} from '@/services';
import {useRouter} from 'expo-router';

interface LoginFormProps extends ViewProps {}

const LoginForm: FC<LoginFormProps> = ({...props}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const {error, data} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      Alert.alert(error.message);
      return;
    }

    dispatch(
      login({
        token: data.session?.access_token,
        refreshToken: data.session?.refresh_token,
      }),
    );
  };

  const handleRegister = () => {
    router.navigate('birthdate');
  };

  return (
    <View
      style={{
        width: '100%',
      }}
      {...props}>
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
        onPress={handleLogin}>
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
    padding: 8,
  },
});

export default LoginForm;
