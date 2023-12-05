import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Font compare table</Text>
      <View style={styles.header}>
        <Text style={styles.field}>OpenSans</Text>
        <Text style={styles.field}>Default</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansLight}>OpenSans-Light</Text>
        <Text style={styles.defaultLight}>Default-Light</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansLightItalic}>OpenSans-LightItalic</Text>
        <Text style={styles.defaultLightItalic}>Default-LightItalic</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansRegular}>OpenSans-Regular</Text>
        <Text style={styles.defaultRegular}>Default-Regular</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansItalic}>OpenSans-Italic</Text>
        <Text style={styles.defaultRegularItalic}>Default-Italic</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansMedium}>OpenSans-Medium</Text>
        <Text style={styles.defaultMedium}>Default-Medium</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansMediumItalic}>OpenSans-MediumItalic</Text>
        <Text style={styles.defaultMediumItalic}>Default-MediumItalic</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansSemiBold}>OpenSans-SemiBold</Text>
        <Text style={styles.defaultSemiBold}>Default-SemiBold</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansSemiBoldItalic}>
          OpenSans-SemiBoldItalic
        </Text>
        <Text style={styles.defaultSemiBoldItalic}>Default-SemiBoldItalic</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansBold}>OpenSans-Bold</Text>
        <Text style={styles.defaultBold}>Default-Bold</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansBoldItalic}>OpenSans-BoldItalic</Text>
        <Text style={styles.defaultBoldItalic}>Default-BoldItalic</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansExtraBold}>OpenSans-ExtraBold</Text>
        <Text style={styles.defaultExtraBold}>Default-ExtraBold</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.openSansExtraBoldItalic}>
          OpenSans-ExtraBoldItalic
        </Text>
        <Text style={styles.defaultExtraBoldItalic}>
          Default-ExtraBoldItalic
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {fontSize: 30, textAlign: 'center', fontWeight: 'bold'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#efefef',
    padding: 10,
  },
  field: {fontWeight: '600', fontSize: 20},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  openSansLight: {fontFamily: 'OpenSans-Light'},
  openSansLightItalic: {fontFamily: 'OpenSans-LightItalic'},
  openSansRegular: {fontFamily: 'OpenSans-Regular'},
  openSansItalic: {fontFamily: 'OpenSans-Italic'},
  openSansMedium: {fontFamily: 'OpenSans-Medium'},
  openSansMediumItalic: {fontFamily: 'OpenSans-MediumItalic'},
  openSansSemiBold: {fontFamily: 'OpenSans-SemiBold'},
  openSansSemiBoldItalic: {fontFamily: 'OpenSans-SemiBoldItalic'},
  openSansBold: {fontFamily: 'OpenSans-Bold'},
  openSansBoldItalic: {fontFamily: 'OpenSans-BoldItalic'},
  openSansExtraBold: {fontFamily: 'OpenSans-ExtraBold'},
  openSansExtraBoldItalic: {fontFamily: 'OpenSans-ExtraBoldItalic'},

  defaultLight: {fontWeight: '200'},
  defaultLightItalic: {fontWeight: '200', fontStyle: 'italic'},
  defaultRegular: {fontWeight: 'normal'}, // 400
  defaultRegularItalic: {fontWeight: 'normal', fontStyle: 'italic'},
  defaultMedium: {fontWeight: '500'},
  defaultMediumItalic: {fontWeight: '500', fontStyle: 'italic'},
  defaultSemiBold: {fontWeight: '600'},
  defaultSemiBoldItalic: {fontWeight: '600', fontStyle: 'italic'},
  defaultBold: {fontWeight: 'bold'}, // 700
  defaultBoldItalic: {fontWeight: 'bold', fontStyle: 'italic'},
  defaultExtraBold: {fontWeight: '900'},
  defaultExtraBoldItalic: {fontWeight: '900', fontStyle: 'italic'},
});

export default App;
