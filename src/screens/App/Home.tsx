import React, {useEffect, useState} from 'react';
import {Button, Page, Text} from '@/components';
import {useAppDispatch} from '@/hooks';
import {logout} from '@/store/slices/authSlice';
import {supabase} from '@/services/supabase';

const HomeScreen = () => {
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
    <Page className="items-center justify-center">
      <Text className="mb-4">HomeScreen</Text>
      <Button onPress={handlePress} variant="primary">
        <Text>Déconnexion</Text>
      </Button>
    </Page>
  );
};

export default HomeScreen;
