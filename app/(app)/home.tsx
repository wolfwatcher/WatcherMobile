import '../../global.css';
import React, {useEffect, useState} from 'react';
import {Button, Page, Text} from '@/components';
import {useAppDispatch} from '@/hooks';
import {logout} from '@/store/slices/authSlice';

import {supabase} from '@/services/supabase';
import {StyleSheet} from 'react-native';

const Home = () => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(logout());
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const {data: movies} = await supabase
        .from('movies')
        .select('*')
        .range(0, 25);
      // @ts-ignore
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  // console.log(JSON.stringify(movies, null, 2));

  return (
    <Page style={styles.page}>
      <Text
        style={{
          marginBottom: 16,
        }}>
        HomeScreen
      </Text>
      <Button onPress={handlePress} variant="primary">
        <Text>Déconnexion</Text>
      </Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
