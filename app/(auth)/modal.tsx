import {Alert, StyleSheet, View} from 'react-native';
import {useRouter} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {Button, Text, TextInput} from '@/components';
import React, {useState} from 'react';
import {supabase} from '@/services';
import {login} from '@/store/slices/authSlice';
import {useAppDispatch} from '@/hooks';

const Modal = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    if (password !== confirmPassword)
      alert('Les mots de passe ne correspondent pas');

    const {error, data} = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
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

    router.replace('/(app)/home');
  };

  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'avenir-black',
          fontSize: 24,
          lineHeight: 28,
          marginBottom: 32,
        }}
      >
        Quelques infos pour finir...
      </Text>
      <Text style={styles.label}>Pseudonyme</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Pseudonyme"
        value={name}
        onChangeText={text => setName(text)}
        autoCapitalize={'none'}
      />
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
      <Text style={styles.label}>Confirmation du mot de passe</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Confirmer le mot de passe"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        autoCapitalize={'none'}
      />
      <Button
        style={{
          marginTop: 16,
        }}
        variant="primary"
        onPress={handleSubmit}
      >
        <Text>Inscription</Text>
      </Button>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'avenir-black',
    marginBottom: 8,
  },
  textInput: {
    marginBottom: 24,
  },
});

export default Modal;
