import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Button, Text} from '@components';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Hello this is my tutorial about setup path alias in React Native
      </Text>
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
});

export default App;
