import React from 'react';
import {
  StatusBar,
  View,
  Text,
  FlatList,
  ViewToken,
  Image,
  Pressable,
} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Artwork} from '../../types';
import {styles} from './styles';
import {IMAGE_URL, IMAGE_URL_PARAMS} from '../../constants';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type DynamicFlatListProps = {
  data?: Artwork[];
  onSelected: (id: number) => void;
};

type ItemProps = {
  item: Artwork;
  viewableItems: SharedValue<ViewToken[]>;
  onSelected: (id: number) => void;
};

const Item = ({
  item,
  viewableItems,
  onSelected,
}: ItemProps): React.ReactElement => {
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
    <AnimatedPressable
      style={[styles.item, stylez]}
      onPress={() => onSelected(item.id)}>
      <Image
        source={{uri: `${IMAGE_URL}${item.image_id}${IMAGE_URL_PARAMS}`}}
        style={styles.image}
      />
      <Text style={styles.artistTitle} numberOfLines={1} lineBreakMode="tail">
        {item.title}
      </Text>
    </AnimatedPressable>
  );
};

export const DynamicFlatList = ({data, onSelected}: DynamicFlatListProps) => {
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
          return (
            <Item
              item={item as Artwork}
              viewableItems={viewableItems}
              onSelected={onSelected}
            />
          );
        }}
      />
    </View>
  );
};
