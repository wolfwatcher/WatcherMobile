import '../../global.css';
import React, {useEffect, useState} from 'react';
import {Page, Text} from '@/components';
import {useAppDispatch} from '@/hooks';
import {logout} from '@/store/slices/authSlice';
import {supabase} from '@/services/supabase';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Image} from 'expo-image';
import {Octicons} from '@expo/vector-icons';
import {colors} from '@/styles/theme';
import {store} from '@/store/configureStore';
import {getDiscoverMovies, getMovieGenres} from '@/services/tmdb';

const Home = () => {
  const dispatch = useAppDispatch();

  const {session} = store.getState().session;

  const handlePress = () => {
    dispatch(logout());
  };

  const [movies, setMovies] = useState<any>([]);
  const [moviesByGenre, setMoviesByGenre] = useState<{[id: number]: any}>({});
  const [genres, setGenres] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (session) {
      getProfile();
      //getMovies();
      getGenres();
      getDiscover();
      getMoviesByGenre();
    }
  }, [session]);

  const getMovies = async () => {
    try {
      const {data, error, status} = await supabase
        .from('movies')
        .select(
          'imdb_id, title, popularity, vote_average, vote_count, genres, embedding',
        )
        .range(0, 25);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setMovies(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getDiscover = async () => {
    try {
      const data = await getDiscoverMovies(true);

      if (data) {
        setMovies(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getGenres = async () => {
    try {
      const data = await getMovieGenres();
      if (data) {
        setGenres(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getMoviesByGenre = async () => {
    if (genres) {
      for (const genre of genres) {
        try {
          const data = await getDiscoverMovies(
            true,
            true,
            'fr-FR',
            1,
            'popularity.desc',
            genre.id,
          );

          if (data) {
            let newMoviesByGenre = moviesByGenre;
            newMoviesByGenre[genre.id] = data;
            setMoviesByGenre(newMoviesByGenre);
          }
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message);
          }
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const getProfile = async () => {
    try {
      setLoading(true);
      if (!session?.user)
        throw new Error('Aucune utilisateur dans la session !');

      const {data, error, status} = await supabase
        .from('profiles')
        .select(`username, avatar_url`)
        .eq('user_uuid', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async ({
    username,
    avatar_url,
  }: {
    username: string;
    avatar_url: string;
  }) => {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        username,
        avatar_url,
        updated_at: new Date(),
      };

      const {error} = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

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
        <ScrollView
          contentContainerStyle={{
            width: '100%',
            gap: 16,
            alignItems: 'center',
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              gap: 16,
            }}>
            <Text
              style={{
                fontFamily: 'avenir-light',
                color: colors.rabbit,
              }}>
              Bienvenue {username} !
            </Text>
            <Text
              style={{
                fontFamily: 'avenir-black',
                fontSize: 24,
              }}>
              Vos recommandations du jour
            </Text>
          </View>
          <View
            style={{
              gap: 36,
              marginBottom: 32,
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderRadius: 8,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: 'rgba(175, 175, 175, 0.3)',
              }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                  backgroundColor: colors.shark,
                  width: '50%',
                }}>
                <Text style={styles.tabText}>Film</Text>
              </View>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                  width: '50%',
                }}>
                <Text style={styles.tabText}>Série</Text>
              </View>
            </View>
            <View
              style={{
                height: 450,
                width: 335,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(175, 175, 175, 0.7)',
                  width: '90%',
                  height: 450,
                  borderRadius: 8,
                }}></View>
              <View
                style={{
                  backgroundColor: 'rgba(175, 175, 175, 0.7)',
                  width: '95%',
                  height: 450,
                  borderRadius: 8,
                  marginTop: -436,
                }}></View>
              <Image
                style={{
                  width: '100%',
                  height: 450,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: 'white',
                  marginTop: -436,
                }}
                source={
                  process.env.EXPO_PUBLIC_TMDB_POSTER_URL +
                  movies[0]?.poster_path
                }
                contentFit="cover"
                transition={1000}></Image>
            </View>
          </View>
          {genres && genres.length > 0 ? (
            genres
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((genre: any, key: any) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      paddingVertical: 8,
                      alignSelf: 'flex-start',
                      gap: 12,
                      marginBottom:
                        key === genres.slice(0, 3).length - 1 ? 32 : 0,
                    }}
                    key={key}>
                    <Text
                      style={{
                        fontFamily: 'avenir-black',
                        fontSize: 24,
                      }}>
                      {genre.name}
                    </Text>
                    <ScrollView
                      horizontal={true}
                      style={{
                        paddingHorizontal: 0,
                        flexGrow: 1,
                      }}>
                      {genre && moviesByGenre[genre?.id] ? (
                        moviesByGenre[genre?.id].map((movie: any, key: any) => {
                          return (
                            <Image
                              key={key}
                              style={{
                                width: 125,
                                height: 175,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: 'white',
                                marginRight: 32,
                              }}
                              source={
                                process.env.EXPO_PUBLIC_TMDB_POSTER_URL +
                                movie?.poster_path
                              }
                              contentFit="cover"
                              transition={500}
                            />
                          );
                        })
                      ) : (
                        <Text>Rien</Text>
                      )}
                    </ScrollView>
                  </View>
                );
              })
          ) : (
            <Text>Rien</Text>
          )}
        </ScrollView>
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
  globalView: {
    flex: 1,
    alignItems: 'center',
    gap: 26,
  },
  topView: {
    marginTop: 56,
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
  tabText: {
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default Home;
