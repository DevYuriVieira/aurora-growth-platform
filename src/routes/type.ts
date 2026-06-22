import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  ComunidadeHome: undefined;
};

export type AdminStackParamList = {
  AdminDashboard: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;