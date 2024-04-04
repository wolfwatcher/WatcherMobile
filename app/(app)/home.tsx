import '../../global.css';
import React, {useEffect, useState} from 'react';
import {Button, Page, Text} from '@/components';
import {useAppDispatch} from '@/hooks';
import {logout} from '@/store/slices/authSlice';
import {supabase} from '@/services/supabase';
import {StyleSheet, View} from 'react-native';
import {Octicons} from '@expo/vector-icons';
import {colors} from '@/styles/theme';

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
      <View style={styles.globalView}>
        <View style={styles.topView}>
          <View style={styles.topIconBackground}>
            <Octicons
              name="person"
              size={28}
              color="white"
              style={{
                left: 0,
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={styles.topIconBackground}>
            <Octicons
              name="search"
              size={24}
              color="white"
              style={{
                left: 0,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <Text>Bienvenue </Text>
        <Button onPress={handlePress} variant="primary">
          <Text>Déconnexion</Text>
        </Button>
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
  },
  globalView: {},
  topView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  topIconBackground: {
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    width: 48,
    height: 48,
    backgroundColor: colors.shark,
    borderRadius: 9999,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default Home;
