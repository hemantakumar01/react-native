import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountsScreen from '../../screens/AccountsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AccountsTabs = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={AccountsScreen} />
    </Stack.Navigator>
  );
};

export default AccountsTabs;

const styles = StyleSheet.create({});
