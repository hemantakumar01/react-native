import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../../screens/CategoriesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CategoriesTabs = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesTabs;

const styles = StyleSheet.create({});
