import React, {FC, useState} from 'react';
import Text from '@/components/Texts/Text';
import Page from '@/components/Pages/Page';
import Button from '@/components/Buttons/Button';
import Link from '@/components/Buttons/Link';
import BoxCheckbox from '@/components/Checkboxes/BoxCheckbox';
import {FlatList, Image, ListRenderItem, StyleSheet, View} from 'react-native';
import {RegisterStepPropsType, SubscriptionType} from '@/types';
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

const Subscriptions: FC<RegisterStepPropsType> = ({
  onNext,
  progression: {subscriptions, onlySubscriptions},
}) => {
  const [selected, setSelected] = useState(subscriptions);
  const [isOnlySubscriptions, setIsOnlySubscriptions] =
    useState(onlySubscriptions);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    onNext({subscriptions: selected, onlySubscriptions: isOnlySubscriptions});
  };

  const renderItem: ListRenderItem<SubscriptionType> = ({item}) => {
    return (
      <BoxCheckbox
        color="success"
        checked={selected.includes(item.id)}
        onPress={() => handleSelect(item.id)}
        style={styles.boxCheckbox}>
        {<item.component />}
      </BoxCheckbox>
    );
  };

  return (
    <Page style={styles.page}>
      <SubscriptionsSvg style={styles.header} />
      <FlatList
        style={styles.subscriptionsList}
        contentContainerStyle={styles.rows}
        columnWrapperStyle={styles.columns}
        data={SubscriptionsList}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
      />
      <View style={styles.subscriptionsOptions}>
        <View>
          <BouncyCheckbox
            style={styles.checkbox}
            text="Recommandations uniquement selon mes abonnements"
            textStyle={styles.checkboxText}
            innerIconStyle={styles.checkboxContent}
            iconStyle={styles.checkboxContent}
            fillColor={isOnlySubscriptions ? colors.success : 'white'}
            disableBuiltInState
            isChecked={isOnlySubscriptions}
            onPress={() => setIsOnlySubscriptions(!isOnlySubscriptions)}
          />
          {/* TODO */}
          <Link textStyle={styles.skipButton} onPress={handleNext}>
            Je ne suis abonné à aucune plateforme
          </Link>
        </View>

        <Button
          style={styles.nextButton}
          variant="primary"
          onPress={handleNext}>
          <Text>Suivant</Text>
        </Button>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 0,
    paddingVertical: 32,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  columns: {
    gap: 24,
  },
  rows: {
    gap: 16,
  },
  subscriptionsList: {
    flexGrow: 0,
    marginBottom: 16,
  },
  subscriptionsOptions: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  checkboxText: {
    textDecorationLine: 'none',
    color: 'white',
  },
  checkbox: {
    marginBottom: 16,
  },
  checkboxContent: {
    borderRadius: 4,
  },
  boxCheckbox: {
    height: 48,
    padding: 0,
    borderWidth: 1,
    borderColor: 'white',
  },
  nextButton: {
    marginTop: 24,
  },
  skipButton: {
    fontSize: 16,
    color: colors.info,
  },
});

export default Subscriptions;
