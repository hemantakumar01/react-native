import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoriesScreen = () => {
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

export default CategoriesScreen;

const styles = StyleSheet.create({});
