# 📚 React Native Setup Font 📚

Hello everyone! Today I will show you how to setup font in React Native. Feel free to prepare a cup of coffee for yourself and get started now!

First step we init project with the following command

```bash
npx react-native init RNSetupFont --version=0.71.10
```

In here I will use [OpenSans](https://fonts.google.com/specimen/Open+Sans). You can use other font if you want.

After download and decompress, we move all file we need to `src/assets/fonts` directory in our project. If it not exist let's create it. We have the following

![Font folder](https://github.com/zay1x/RNSetupFont/assets/32409681/89bfe5b2-4b03-4030-94dd-f0c56267202a 'Font folder')

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
![Android font](https://github.com/zay1x/RNSetupFont/assets/32409681/d88e8c07-e7d7-4297-b83e-39118260ad7a 'Android font')

And here is the result for IOS
![IOS font](https://github.com/zay1x/RNSetupFont/assets/32409681/74f4a794-9d45-4aae-8004-55560a8d65d8 'IOS font')

We have done setup font for IOS and Android. Now we will test them in our project. I will create a table to compare between two font of each type. We have the below result

|                                                   IOS                                                   |                                                     ANDROID                                                     |
| :-----------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![IOS](https://github.com/zay1x/RNSetupFont/assets/32409681/c3dc4257-a362-48ab-a027-32a9ca3de37f 'IOS') | ![ANDROID](https://github.com/zay1x/RNSetupFont/assets/32409681/8590766f-d72b-471a-ab2d-5644274f3fc8 'ANDROID') |

Now you can enjoy the cup of coffee prepared before. All code of this tutorial in this repository, you can check my example. Hope you success!
