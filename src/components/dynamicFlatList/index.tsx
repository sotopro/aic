import React from 'react';
import {StatusBar, View, Text, FlatList, ViewToken} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Artwork} from '../../types';
import {styles} from './styles';

type DynamicFlatListProps = {
  data?: Artwork[];
};

type ItemProps = {
  item: Artwork;
  viewableItems: SharedValue<ViewToken[]>;
};

const Item = ({item, viewableItems}: ItemProps): React.ReactElement => {
  const stylez = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(element => element.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.5),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[styles.item, stylez]}>
      <Text style={styles.artistTitle}>{item.artist_title}</Text>
    </Animated.View>
  );
};

export const DynamicFlatList = ({data}: DynamicFlatListProps) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={data as Artwork[]}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={16}
        onViewableItemsChanged={({viewableItems: visibleItems}) => {
          viewableItems.value = visibleItems;
        }}
        renderItem={({item}) => {
          return <Item item={item as Artwork} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
};
