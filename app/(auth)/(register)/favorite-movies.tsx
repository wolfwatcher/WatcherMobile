import React, {FC, useState} from 'react';
import {Button, Page, Text, TMDBContentCheckbox} from '@/components';
import {FlatList, ListRenderItem} from 'react-native';
import {MOVIES} from '@/data/constants';
import {RegisterStackParamList, TMDBMovieType} from '@/types';
import {FavoriteMoviesSvg} from '@/assets/images';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {useRouter} from "expo-router";
import "../../../global.css"

const FavoriteMovies = () => {
    const [selected, setSelected] = useState([] as number[]);
    const router = useRouter();

    const handleSelect = (value: number) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
        } else {
            setSelected(prevState => [...prevState, value]);
        }
    };

    const handleNext = () => {
        // @TODO save selected movies and stuff
        router.replace('/(auth)/(register)/favorite-series');
    };

    const renderItem: ListRenderItem<TMDBMovieType> = ({item}) => {
        return (
            <TMDBContentCheckbox
                item={item}
                isChecked={selected.includes(item.id)}
                onPress={() => handleSelect(item.id)}
            />
        );
    };

    return (
        <Page className="px-0 w-full h-full pt-8 pb-8">
            <FavoriteMoviesSvg className="self-center mb-8"/>
            <FlatList
                data={MOVIES}
                contentContainerStyle={styles.container}
                renderItem={renderItem}
                numColumns={1}
                keyExtractor={item => item.id.toString()}
            />
            <Button className="mt-6" variant="primary" onPress={handleNext}>
                <Text>Suivant</Text>
            </Button>
        </Page>
    );
};

const styles = {
    container: {
        gap: 24,
    },
};

export default FavoriteMovies;
