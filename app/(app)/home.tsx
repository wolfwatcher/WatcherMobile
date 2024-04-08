import '../../global.css';
import React, {useEffect, useState} from 'react';
import {Page, Text} from '@/components';
import {supabase} from '@/services/supabase';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Image} from 'expo-image';
import {Octicons} from '@expo/vector-icons';
import {colors} from '@/styles/theme';
import {Link} from 'expo-router';
import {useAppSelector} from '@/hooks';
import {TmdbSingleton} from '@/services/tmdb';
import {Genres} from 'tmdb-ts/dist/endpoints';
import {Genre, MovieDiscoverResult} from 'tmdb-ts';

const Home = () => {
  const {session} = useAppSelector(state => state.session);

  const [movies, setMovies] = useState<MovieDiscoverResult>();
  const [loadingDiscover, setLoadingDiscover] = useState(true);
  const [moviesByGenre, setMoviesByGenre] = useState(
    new Map<number, MovieDiscoverResult>(),
  );
  const [loadingMoviesByGenre, setLoadingMoviesByGenre] = useState(true);
  const [movieGenres, setMovieGenres] = useState<Genres>();
  const [loadingMovieGenres, setLoadingMovieGenres] = useState(true);
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    if (session) {
      getProfile();
    }
  }, [session]);

  useEffect(() => {
    getGenres();
    getDiscover();
    //getMovies();
  }, [loadingProfile]);

  useEffect(() => {
    getMoviesByGenre();
  }, [loadingMovieGenres]);

  /*const getMovies = async () => {
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
            }
          };*/

  const getDiscover = async () => {
    if (!session?.user) throw new Error('Aucune utilisateur dans la session !');

    try {
      const data = await TmdbSingleton.client.discover.movie({
        language: 'fr-FR',
        include_adult: true,
        include_video: true,
      });

      if (data) {
        setMovies(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoadingDiscover(false);
    }
  };

  const getGenres = async () => {
    if (!session?.user) throw new Error('Aucune utilisateur dans la session !');

    try {
      const data = await TmdbSingleton.client.genres.movies({
        language: 'fr',
      });
      if (data) {
        setMovieGenres(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoadingMovieGenres(false);
    }
  };

  const getMoviesByGenre = async () => {
    if (!session?.user) throw new Error('Aucune utilisateur dans la session !');

    if (movieGenres) {
      try {
        let map = new Map();
        await Promise.all(
          movieGenres.genres.map(async genre => {
            const data = await TmdbSingleton.client.discover.movie({
              language: 'fr-FR',
              include_adult: true,
              include_video: true,
              sort_by: 'popularity.desc',
              with_genres: `${genre.id}`,
              page: 1,
            });

            if (data) {
              map.set(genre.id, data);
            }
          }),
        );

        setMoviesByGenre(map);
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message);
        }
      } finally {
        setLoadingMoviesByGenre(false);
      }
    }
  };

  const getProfile = async () => {
    try {
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
      setLoadingProfile(false);
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
      setLoadingProfile(true);
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
      setLoadingProfile(false);
    }
  };

  return (
    <Page style={styles.page}>
      <View style={styles.globalView}>
        <View style={styles.topView}>
          <View style={styles.topIconBackground}>
            <Link
              push
              style={{
                alignSelf: 'center',
              }}
              href={{
                pathname: '/user/[id]',
                params: {id: username},
              }}>
              <Octicons
                name="person"
                size={28}
                color="white"
                style={{
                  left: 0,
                  alignSelf: 'center',
                }}
              />
            </Link>
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
        {loadingProfile ? (
          <Text>Loading Profile...</Text>
        ) : (
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
                {loadingDiscover ? (
                  <Text>Loading Discover...</Text>
                ) : (
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
                      movies?.results[0]?.poster_path!
                    }
                    contentFit="cover"
                    transition={1000}
                  />
                )}
              </View>
            </View>
            {loadingMovieGenres ? (
              <Text>Loading Genres...</Text>
            ) : (
              Array.from(moviesByGenre)
                .slice(0, 3)
                .map(([genreId, movies], index) => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        paddingVertical: 8,
                        alignSelf: 'flex-start',
                        gap: 12,
                        marginBottom:
                          index ===
                          Array.from(moviesByGenre).slice(0, 3).length - 1
                            ? 32
                            : 0,
                      }}
                      key={genreId}>
                      <Text
                        style={{
                          fontFamily: 'avenir-black',
                          fontSize: 24,
                        }}>
                        {
                          movieGenres?.genres.find(genre => genre.id == genreId)
                            ?.name
                        }
                      </Text>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                          paddingHorizontal: 0,
                          flexGrow: 1,
                        }}>
                        {loadingMoviesByGenre ? (
                          <Text>Loading MovieByGenre...</Text>
                        ) : (
                          movies.results.map((movie, key) => {
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
                        )}
                      </ScrollView>
                    </View>
                  );
                })
            )}
          </ScrollView>
        )}
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
