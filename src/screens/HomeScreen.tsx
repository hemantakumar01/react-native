import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <Button title="Go to Home" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
