import React from 'react';
import {Text, View} from 'react-native';
import {HomeScreenProps} from '../../navigation/type';

import {styles} from './styles';
import {ActivityIndicator} from 'react-native';
import {useFetch} from '../../hooks';
import {ArtworksResponse} from '../../types';
import {ARTWORKS_API, ROUTES} from '../../constants';
import {THEME} from '../../constants/theme';
import {DynamicFlatList} from '../../components/dynamicFlatList';

function Home({navigation}: HomeScreenProps): React.JSX.Element {
  const {data, error, loading} = useFetch<ArtworksResponse>(ARTWORKS_API);

  const onSelected = (id: number) => {
    navigation.navigate(ROUTES.DETAILS, {id});
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color={THEME.colors.primary}
          accessibilityLabel="Loading..."
          size="large"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <DynamicFlatList data={data?.data} onSelected={onSelected} />
    </View>
  );
}

export default Home;
