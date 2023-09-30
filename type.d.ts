import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackNavigatorParamList = {
  Home: undefined;
  Wallet: undefined;
  Profile: undefined;
  DetailRiwayat: undefined;
  ListRiwayat: undefined;
  EditProfile: undefined;
};
export type RootStackNavigatorProps = NativeStackScreenProps<
  RootStackNavigatorParamList,
  Home,
  Wallet,
  Profile,
  DetailRiwayat,
  ListRiwayat,
  EditProfile
>;
