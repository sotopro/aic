import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/index';

export type MainNavigatorParamList = {
  Home: undefined;
  Details: {id: number; title: string};
};

export type HomeScreenProps = NativeStackScreenProps<
  MainNavigatorParamList,
  ROUTES.HOME
>;

export type DetailsScreenProps = NativeStackScreenProps<
  MainNavigatorParamList,
  ROUTES.DETAILS
>;
