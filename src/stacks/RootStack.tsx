import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import HomeTabStack from './tabs/HomeTabStack';
import CategoriesTabs from './tabs/CategoriesTabs';
import OrderTabs from './tabs/OrderTabs';
import AccountsTabs from './tabs/AccountsTabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {/* All Tabs Starts From Here */}

      <Stack.Screen name="Home" component={TabsStack} />
      {/* The Bellow includes All Screens which are not included in Tabs and thoes not have Tab bars in it  */}
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const TabsStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{headerShown: true}}>
      <Tabs.Screen
        options={{title: 'Home'}}
        name="HomeTabs"
        component={HomeTabStack}
      />
      <Tabs.Screen
        name="CategoriesTabs"
        component={CategoriesTabs}
        options={{title: 'Categories'}}
      />
      <Tabs.Screen name="OrderTabs" component={OrderTabs} />
      <Tabs.Screen name="AccountsTabs" component={AccountsTabs} />
    </Tabs.Navigator>
  );
};
export default RootStack;

const styles = StyleSheet.create({});
