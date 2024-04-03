import "@/../global.css"

import React, {FC, useState} from 'react';
import {Button, Link, Text, TextInput} from '@/components';
import {Alert, View, ViewProps} from 'react-native';
import {useAppDispatch} from '@/hooks';
import {login} from '@/store/slices/authSlice';
import {supabase} from '@/services';
import {useRouter} from "expo-router";

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
    router.navigate('/(auth)/register');
  };

  return (
    <View className="w-full" {...props}>
      <Text className="font-avenir-black mb-2">Adresse mail</Text>
      <TextInput
        className="mb-4 p-2"
        placeholder="Adresse mail"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize={'none'}
      />
      <Text className="font-avenir-black mb-2">Mot de passe</Text>
      <TextInput
        className="mb-4 p-2"
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize={'none'}
      />
      <Button className="mb-4" variant="primary" onPress={handleLogin}>
        <Text>Connexion</Text>
      </Button>
      <Link onPress={handleRegister}>Créer un compte</Link>
    </View>
  );
};

export default LoginForm;
