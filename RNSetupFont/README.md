# 📚 React Native Setup Font 📚

Hello everyone! Today I will show you how to setup font in React Native. Feel free to prepare a cup of coffee for yourself and get started now!

First step we init project with the following command

```bash
npx react-native init RNSetupFont --version=0.71.10
```

In here I will use [OpenSans](https://fonts.google.com/specimen/Open+Sans). You can use other font if you want.

After download and decompress, we move all file we need to `src/assets/fonts` directory in our project. If it not exist let's create it. We have the following

![Font folder](https://github.com/zay1x/React-Native/assets/32409681/8f93bd1a-f485-4526-8a07-537638846f6e 'Font folder')

Create `react-native.config.js` in root directory project if it not exist, add the following code to this file

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
};
```

We will use [react-native-asset](https://github.com/unimonkiez/react-native-asset) to link assets to our project. We use the following command to install this package

```bash
npm install -g react-native-asset
```

Then we use below command to link assets

```bash
npx react-native-asset
```

After we run above command and now we will check the result

Here is the result for Android
![Android font](https://github.com/zay1x/React-Native/assets/32409681/d457a2bd-1564-44f5-af89-734828c2e9e4 'Android font')

And here is the result for IOS
![IOS font](https://github.com/zay1x/React-Native/assets/32409681/41d54962-111d-49b1-a843-47bfa04a0eaf 'IOS font')

We have done setup font for IOS and Android. Now we will test them in our project. I will create a table to compare between two font of each type. We have the below result

|                                                   IOS                                                   |                                                     ANDROID                                                     |
| :-----------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![IOS](https://github.com/zay1x/React-Native/assets/32409681/a1aed4e5-73bf-4c5f-b3b8-7bba68c00628 'IOS') | ![ANDROID](https://github.com/zay1x/React-Native/assets/32409681/bcfc028c-a16b-4335-91c1-c0ecd8d2387c 'ANDROID') |

Now you can enjoy the cup of coffee prepared before. All code of this tutorial in this repository, you can check my example. Hope you success!
