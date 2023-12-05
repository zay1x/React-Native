# 📚 React Native Setup Multiple Environments 📚

## IOS 

![Create target](https://github.com/zay1x/React-Native/assets/32409681/e929a8fa-7c50-4724-986f-20bdf7d8bed0 'Create target')

Duplicate `ReactNativeSetupENV` target two times
![Create target](https://github.com/zay1x/React-Native/assets/32409681/0bb20f31-e3aa-4fbb-98dd-1625d2dbc61a 'Create target')

Rename all files as below picture
![Create target](https://github.com/zay1x/React-Native/assets/32409681/c08db4fa-1f8f-42bb-89e6-f47b4e22e55c 'Create target')

Set `Info.plist File` path for both `Debug` and `Release` mode of each target as below picture
![Set path info.plist file](https://github.com/zay1x/React-Native/assets/32409681/3a2f0a7b-3f15-4e5f-a54e-97f4479719d2 'Set path info.plist file')

And similar to remaining target, make sure that the `Info.plist File` path corresponds to `ReactNativeSetupENV dev-Info` and `ReactNativeSetupENV stage-Info`

Open `Manage Schemes`
![Manage schemes](https://github.com/zay1x/React-Native/assets/32409681/45677ed2-1c42-4811-a812-3ba0ab5be77a 'Manage schemes')

Edit name of each Scheme as below picture
![Edit name scheme](https://github.com/zay1x/React-Native/assets/32409681/839e4d01-8851-4c72-9a31-2d182dd00401 'Edit name scheme')

Choose `Edit Scheme`
![Edit scheme](https://github.com/zay1x/React-Native/assets/32409681/387ca110-660b-4cb7-870d-11b06e559412 'Edit scheme')

Make sure that all of these options must be checked
![Manage scheme](https://github.com/zay1x/React-Native/assets/32409681/24caa9d9-4c24-4f24-a576-7539340d252b 'Manage scheme')

Add `pre-actions` as below
![Pre-action](https://github.com/zay1x/React-Native/assets/32409681/1b481582-f716-47a2-a92a-adeb41d99780 'Pre-action')

Repeat above steps for `ReactNativeSetupENV-Dev` and `ReactNativeSetupENV-Stage` scheme

Edit `Podfile` file as below
![Edit Podfile file](https://github.com/zay1x/React-Native/assets/32409681/93bd74ae-8fbc-488a-bfcc-60520143108e 'Edit Podfile file')

Final we change app name corresponds to each environment
![Edit app name](https://github.com/zay1x/React-Native/assets/32409681/87679aa4-3997-4e35-8ada-3104b0203714 'Edit app name')

Use ENV variables in `Build settings` and `Info.plist` file

Create file with name `Config.xcconfig` and save it under ios folder
![New config file](https://github.com/zay1x/React-Native/assets/32409681/8831bce6-9e1c-40e5-abed-e605f716a885 'New config file')
![New config file](https://github.com/zay1x/React-Native/assets/32409681/a68d333e-a4f8-456b-a69f-d2d0f5aa124f 'New config file')

`Config.xcconfig` file with content

```
#include? "tmp.xcconfig"
```

Add the following to your ".gitignore"

```
# react-native-config codegen
ios/tmp.xcconfig
```

Add config for project as below for both `Debug` and `Release` mode
![Config project](https://github.com/zay1x/React-Native/assets/32409681/b0c3c4e4-5266-4fd3-87e2-234b334be0c1 'Config project')

Go to `Edit scheme`
![Edit scheme](https://github.com/zay1x/React-Native/assets/32409681/d137caf6-fd48-450d-8118-117053d93ce3 'Edit scheme')

Add the following script to `Pre-actions`

```
"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```

Then we have below
![Add script](https://github.com/zay1x/React-Native/assets/32409681/5b56503d-9ce1-4609-aa22-492007169663 'Add script')

Repeat above steps for both `Dev` and `Stage` mode

Then config for each environment as below in which `Info.plist Preprocessor Prefix File` with `${BUILD_DIR}/GeneratedInfoPlistDotEnv.h` value then we have

![Preprocessor](https://github.com/zay1x/React-Native/assets/32409681/56ec1723-b6d7-4cb7-9d0c-5408e45da958 'Preprocessor')

You can now access your env variables in the Info.plist
Ex: $(ENV)

## Test Environment

We use [react-native-config](https://github.com/luggit/react-native-config)

First of all we install package with command

```
yarn add react-native-config
```

And then

```
cd ios && pod install && cd ..
```

Create 5 files at root project directory `.env`, `.env.dev`, `.env.prod`, `.env.stage` and `.env.example` and add first variable for each file

Ex: Add below code to `.env.dev` file

```
ENV=DEV
```

Edit `App.js` or `App.tsx` as below

```
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
```

We have done for IOS. Let's setup for android.

## ANDROID 🤖

[Reference](https://www.thirdrocktechkno.com/blog/react-native-app-variants-staging-prod/)

Go to `android/app` directory and generate keystore for each environment use this following command (For macOS)

```
sudo keytool -genkey -v -keystore environment-name.keystore -alias environment-alias -keyalg RSA -keysize 2048 -validity 10000
```

Add this following code to file `gradle.properties`

```
# Dev keystore
DEBUG_STORE_FILE=debug.keystore
DEBUG_KEY_ALIAS=androiddebugkey
DEBUG_STORE_PASSWORD=android
DEBUG_KEY_PASSWORD=android

# Stage keystore
STAGE_STORE_FILE=
STAGE_KEY_ALIAS=
STAGE_STORE_PASSWORD=
STAGE_KEY_PASSWORD=

# Product keystore
PROD_STORE_FILE=
PROD_KEY_ALIAS=
PROD_STORE_PASSWORD=
PROD_KEY_PASSWORD=
```

Add below code to `android/app/build.gradle`

```
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

```
project.ext.envConfigFiles = [
  dev: ".env.dev",
  stage: ".env.stage",
  prod: ".env.prod",
  other: ".env",
]
```

![Config android](https://github.com/zay1x/React-Native/assets/32409681/d5b42ed4-5b74-4994-af0b-80042f6b25a1 'Config android')

Edit `android.defaultConfig` as below
![Edit defaultConfig](https://github.com/zay1x/React-Native/assets/32409681/2cf47432-6eaa-4afb-be3b-b608303d957b 'Edit defaultConfig')

Edit `android.signingConfig` as below
![Edit signingConfig](https://github.com/zay1x/React-Native/assets/32409681/d0b25286-427b-4847-a1f2-4f01d41cf159 'Edit signingConfig')

Add the following code under `android.buildTypes`

```
flavorDimensions "environment"
  productFlavors {
      dev {
          dimension "environment"
          applicationId "com.reactnativesetupenvDev"
          resValue "string", "app_name", project.env.get("APP_NAME")
          signingConfig signingConfigs.dev
      }
      stage {
          dimension "environment"
          applicationId "com.reactnativesetupenvStage"
          resValue "string", "app_name", project.env.get("APP_NAME")
          signingConfig signingConfigs.stage
      }
      prod {
          dimension "environment"
          applicationId "com.reactnativesetupenvProd"
          resValue "string", "app_name", project.env.get("APP_NAME")
          signingConfig signingConfigs.prod
      }
  }
```

Comment all `string` tag in `android/app/src/main/res/values/strings.xml`

We have done for both `IOS` and `ANDROID` setup multiple environment

Hope you success with my guide!
