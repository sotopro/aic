import React from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {DetailsScreenProps} from '../../navigation/type';
import {styles} from './styles';
import {useFetch} from '../../hooks';
import {ARTWORKS_API, IMAGE_URL, IMAGE_URL_PARAMS} from '../../constants';
import {ArtworkResponse} from '../../types';
import {THEME} from '../../constants/theme';
import {getTimestamp} from '../../functions';
import Animated, {
  FadeInUp,
  FadeIn,
  FadeOut,
  FadeOutUp,
} from 'react-native-reanimated';
import {Button} from '../../components';

function Details({route}: DetailsScreenProps): React.JSX.Element {
  const {id} = route.params;
  const {data, error, loading} = useFetch<ArtworkResponse>(
    `${ARTWORKS_API}/${id}`,
  );

  const {data: artistData} = data || {};

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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.Image
          source={{
            uri: `${IMAGE_URL}${artistData?.image_id}${IMAGE_URL_PARAMS}`,
          }}
          style={styles.image}
          resizeMode="cover"
          entering={FadeIn}
          exiting={FadeOut}
        />
        <Animated.ScrollView
          style={styles.detailContainer}
          entering={FadeInUp}
          exiting={FadeOutUp}>
          <Text style={styles.title}>{artistData?.title}</Text>
          <Text style={styles.artistTitle}>
            Artist Title: {artistData?.artist_title || 'Unknown'}
          </Text>
          <Text style={styles.description}>
            {artistData?.description
              ? `Description: ${artistData?.description}`
              : 'No description'}
          </Text>
          <Text style={styles.artworkType}>
            Type: {artistData?.artwork_type_title}
          </Text>
          <Text style={styles.copyright}>
            {artistData?.copyright_notice || '© none'}
          </Text>
          <Text style={styles.timestamp}>
            {getTimestamp(artistData?.timestamp)}
          </Text>
        </Animated.ScrollView>
        <Button onPress={() => {}} text="Add to calendar" />
      </View>
    </SafeAreaView>
  );
}

export default Details;
