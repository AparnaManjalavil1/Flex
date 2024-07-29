/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    // parent container takes all space and distribure available space
    <View style={styles.container}>
      {/* child elements */}
      <View style={styles.square} />
      <View style={styles.square} />
      <View style={styles.square} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  square: {
    backgroundColor: '#2D31FA',
    width: 100,
    height: 100,
    margin: 4,
  },
});

export default App;
