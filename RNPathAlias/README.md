# 📚 React Native Setup Path Aliases 📚

We init project with the following command

```bash
npx react-native init RNPathAlias --version=0.71.10
```

Then we create project structure like below

```js
RNPathAlias (Root directory)
├── src
│   └── components
│       ├── Text
│       │   ├── index.tsx
│       │   └── styles.ts
│       └── Button
│       │   ├── index.tsx
│       │   └── styles.ts
│       └── index.ts
├── App.tsx
├── index.js
├── package.json
├── babel.config.js
└── tsconfig.json
```

We will use above components in `App.tsx` file to test path alias. Edit `App.tsx` with below code

```ts
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Button, Text} from './src/components';

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
```

Edit `tsconfig.json` file like below

```json
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components": ["src/components"]
    }
  }
}
```

We need to add a plugin to our babel transpiler that will help to resolve our recently added path aliases.

To install [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) we use the following command

```bash
npm install babel-plugin-module-resolver --save-dev
---or---
yarn add -D babel-plugin-module-resolver
```

Don't forget to run `pod install` in `ios/` folder

We can now modify the `babel.config.js` file by incorporating the `module-resolver` plugin and specifying the directories that we want to use

Edit `babel.config.js` file like below

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
        },
      },
    ],
  ],
};
```

We can now use it like below

```ts
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
```

Hope you success!
