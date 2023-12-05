import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>{Config.ENV}</Text>
    </View>
  );
}

export default App;
