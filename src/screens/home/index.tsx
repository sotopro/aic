import React from 'react';
import {View} from 'react-native';
import {HomeScreenProps} from '../../navigation/type';

import {styles} from './styles';
import {ActivityIndicator} from 'react-native';
import {useFetch} from '../../hooks';
import {ArtworksResponse} from '../../types';
import {ARTWORKS_API} from '../../constants';
import {THEME} from '../../constants/theme';
import {DynamicFlatList} from '../../components/dynamicFlatList';

function Home({}: HomeScreenProps): React.JSX.Element {
  const {data, error, loading} = useFetch<ArtworksResponse>(ARTWORKS_API);

  console.warn({data});

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
  return (
    <View style={styles.container}>
      <DynamicFlatList data={data?.data} />
    </View>
  );
}

export default Home;
