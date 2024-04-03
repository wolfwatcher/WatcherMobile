import React, {useState} from 'react';
import {BoxCheckbox, Button, Page, Text} from '@/components';
import {FlatList, Image, ListRenderItem, StyleSheet, View} from 'react-native';
import {SubscriptionType} from '@/types';
import {
  AppleTVSvg,
  CrunchyrollSvg,
  DisneyPlusSvg,
  NetflixSvg,
  PrimeVideoSvg,
  SubscriptionsSvg,
} from '@/assets/images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '@/styles/theme';
import {useRouter} from 'expo-router';
import '../../../global.css';

const SubscriptionsList: SubscriptionType[] = [
  {
    id: 'netflix',
    component: NetflixSvg,
  },

  {
    id: 'disney',
    component: DisneyPlusSvg,
  },
  {
    id: 'prime',
    component: PrimeVideoSvg,
  },
  {
    id: 'crunchyroll',
    component: CrunchyrollSvg,
  },
  {
    id: 'canal',
    component: () => (
      <Image
        width={70}
        height={20}
        source={require('@/assets/images/mycanal.png')}
      />
    ),
  },
  {
    id: 'apple',
    component: AppleTVSvg,
  },
];

const Subscriptions = () => {
  const [selected, setSelected] = useState([] as string[]);
  const [onlySubscriptions, setOnlySubscriptions] = useState(false);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const router = useRouter();

  const handleNext = () => {
    // @TODO: proper logic
    router.navigate('/(auth)/(tabs)/recommendations');
  };

  const renderItem: ListRenderItem<SubscriptionType> = ({item}) => {
    return (
      <BoxCheckbox
        color="success"
        checked={selected.includes(item.id)}
        onPress={() => handleSelect(item.id)}
        className="h-12 p-0 border border-white">
        {<item.component />}
      </BoxCheckbox>
    );
  };

  return (
    <Page className="px-0 w-full h-full pt-8 pb-8">
      <SubscriptionsSvg className="self-center mb-28" />
      <FlatList
        className="grow-0 mb-4"
        contentContainerStyle={styles.rows}
        columnWrapperStyle={styles.columns}
        data={SubscriptionsList}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
      />
      <View className="flex flex-1 w-full h-full justify-between">
        <BouncyCheckbox
          text="Recommandations uniquement selon mes abonnements"
          textStyle={styles.checkboxText}
          innerIconStyle={styles.checkbox}
          iconStyle={styles.checkbox}
          fillColor={onlySubscriptions ? colors.success : 'white'}
          disableBuiltInState
          isChecked={onlySubscriptions}
          onPress={() => setOnlySubscriptions(!onlySubscriptions)}
        />
        <Button className="mt-6" variant="primary" onPress={handleNext}>
          <Text>Suivant</Text>
        </Button>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  columns: {
    gap: 24,
  },
  rows: {
    gap: 16,
  },
  checkboxText: {
    textDecorationLine: 'none',
    color: 'white',
  },
  checkbox: {
    borderRadius: 4,
  },
});

export default Subscriptions;
