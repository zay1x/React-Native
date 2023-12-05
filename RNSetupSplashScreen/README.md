# 📚 React Native Splash Screen 📚

Hi! I spent a lot of time to find a tutorial about setup splash screen in React Native. But all of them make me confused. And then I found [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash) package that makes my soul on cloud nine. Can not wait anymore, I will show you how to setup splash screen in React Native with some simplest steps.

I use React Native version `0.71.10` for this project.

Use this command (MacOS) to install package

```bash
npm install --save react-native-bootsplash
--- or ---
yarn add react-native-bootsplash
```

And then

```bash
cd ios && pod install && cd ..
```

Then use the following command to generate assets for splash screen automation

```bash
yarn react-native generate-bootsplash [path to file]
```

I will explain some option which I used in the above command (Use `.png or .svg` file to generate splash screen):

- `--background-color`: Background color of splash screen
- `--logo-width`: Logo width at @1x (Recommended and default: 100)
- `--assets-path`: Path to folder contain splash image file after generated, if you don't need to import these image in JS code, you can ignore this option
- `--flavor`: [Android only] flavor build variant
- `--platforms`: Platforms to generate assets for (Default: android, ios)

Ex:

```bash
yarn react-native generate-bootsplash assets/bootsplash_logo.png --background-color=F5FCFF --logo-width=100 --flavor=main --platforms=android,ios
```

Run ex command to generate assets and then move on to next step.

## IOS 

_ℹ️ For `react-native` < `0.71` setup, follow the [`v4.4.0 README.md`](https://github.com/zoontek/react-native-bootsplash/blob/4.4.0/README.md)._

---

We move the following file to Xcode
![BoostSplash file](https://github.com/zay1x/React-Native/assets/32409681/935787a3-ac41-42e0-90ac-97e83948617d 'BootSplash file')

![Move file](https://github.com/zay1x/React-Native/assets/32409681/6312ae34-0275-40b2-a9b0-1dcc6add51cb 'Move file')

In this step if you have multi environment you should tick all of them then finish it. You can also remove `LaunchScreen` file if you want

![Create reference](https://github.com/zay1x/React-Native/assets/32409681/0ae72fef-d2ea-4e15-90f5-b042f4bc2521 'Create reference')

Set launch screen file for all target
![Set launch screen](https://github.com/zay1x/React-Native/assets/32409681/caca36ec-7c74-4f21-b8d0-07f4e1d01e26 'Set launch screen')

Edit the `ios/YourProjectName/AppDelegate.mm` file:

```obj-c
#import "AppDelegate.h"
#import "RNBootSplash.h" // ⬅️ add the header import

...

// ⬇️ Add this before file @end
- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  UIView *rootView = [super createRootViewWithBridge:bridge
                                          moduleName:moduleName
                                           initProps:initProps];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // ⬅️ initialize the splash screen
  return rootView;
}

@end
```

## ANDROID 🤖

_⚠️ On Android >= 12, the splash screen will not appear if you start your app from the terminal / Android Studio. To see it, kill your app and restart it in normal conditions (tap on your app icon in the app launcher)._

---

Edit your `android/app/build.gradle` file:

```gradle
dependencies {
  // The version of react-native is set by the React Native Gradle Plugin
  implementation("com.facebook.react:react-android")
  implementation("androidx.core:core-splashscreen:1.0.0") // add this line

  // …
```

Edit your `android/app/src/main/res/values/styles.xml` file:

```xml
<resources>

  <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
      <!-- Your base theme customization -->
  </style>

  <!-- BootTheme should inherit from Theme.SplashScreen -->
  <style name="BootTheme" parent="Theme.SplashScreen">
    <item name="windowSplashScreenBackground">@color/bootsplash_background</item>
    <item name="windowSplashScreenAnimatedIcon">@mipmap/bootsplash_logo</item>
    <item name="postSplashScreenTheme">@style/AppTheme</item>
  </style>

</resources>
```

Edit your `android/app/src/main/AndroidManifest.xml` file:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.rnbootsplashexample">

  <!-- … -->

  <application
    android:name=".MainApplication"
    android:label="@string/app_name"
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:allowBackup="false"
    android:theme="@style/BootTheme"> <!-- Replace @style/AppTheme with @style/BootTheme -->
    <!-- … -->
  </application>
</manifest>
```

Finally edit your `android/app/src/main/java/com/yourprojectname/MainActivity.java` file:

```java
// …

// add these required imports:
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  // …

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    RNBootSplash.init(this); // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
  }
}
```

We have done for IOS and ANDROID.

The following code is usage:

```js
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return <Text>Splash screen</Text>;
}
```

If you want more info visit [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
