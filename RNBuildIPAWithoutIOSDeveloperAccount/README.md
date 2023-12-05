# 📚 React Native Build API file without apple developer account 📚

Hi everyone! Perhaps one of us thinks that build IPA file without apple developer account is impossible. But i will demonstrate that it really is capable.

Let's see. How can we achieve that!

The first step we init project by the following command

```
npx react-native init RNBuildIPAWithoutIOSDeveloperAccount
```

Edit `App.tsx` file and run project in xcode, then we have\
![Init app](https://github.com/zay1x/React-Native/assets/32409681/b917e878-7bb7-45f0-bb08-558d18e0af35 'Init app')

Un-check `Automatically manage signing`
![Un-check](https://github.com/zay1x/React-Native/assets/32409681/e6ca8784-e94c-45b7-86f0-026f3de8cc63 'Un-check')

Remove `Code Signing Identity` value
![Remove code signing](https://github.com/zay1x/React-Native/assets/32409681/de80fd38-c8b5-4843-9625-5b007cf303cd 'Remove code signing')

Right click on `Xcode.app` in `Applications` directory, choose `Show Package Contents` option then edit below `SDKSettings.plist` file with xcode
![Edit file](https://github.com/zay1x/React-Native/assets/32409681/4881cd7b-67c5-4576-ac00-afac2c6e9cf1 'Edit file')

We have the below result
![Edit file SDKSettings.plist](https://github.com/zay1x/React-Native/assets/32409681/9032e94b-7593-48c8-8d0d-d81f8d4effee 'Edit file SDKSettings.plist')

Restart Xcode, select `Add User-Defined Setting`
![Add](https://github.com/zay1x/React-Native/assets/32409681/199a9b73-6fd9-496c-8c1b-321e6f5f7fec 'Add')

Rename it with `CODE_SINGING_ALLOWED`
![Add property](https://github.com/zay1x/React-Native/assets/32409681/ba140c61-dbcb-46f9-9ee1-c0ed0692092e 'Add property')

Select `Edit Scheme`
![Edit Scheme](https://github.com/zay1x/React-Native/assets/32409681/a7fa7d16-910d-498d-9142-03cd23f21f9a 'Edit Scheme')

Config as below picture
![Config](https://github.com/zay1x/React-Native/assets/32409681/e17b34a0-2202-41c5-9714-dea72deadae6 'Config')

Then we select `Build` (Build with simulator device ex: Iphone 14 pro) wait for build succeeded and then you must change selected device to `Any IOS Device...` and then select `Archive`
![Build and Archive](https://github.com/zay1x/React-Native/assets/32409681/4e6f8528-8e3b-4e0c-9ef3-59ca9077512b 'Build and Archive')

![Config](https://github.com/zay1x/React-Native/assets/32409681/8b3235ff-1f66-498f-8e8b-21f7e60e708a 'Config')

Keep `Command` key and select `archive` file select `Show in Finder`
![Archive file](https://github.com/zay1x/React-Native/assets/32409681/05a69d96-3a78-4f36-9497-dc43f2b4d481 'Archive file')

The same for the following file but select `Show Package Contents`
![File](https://github.com/zay1x/React-Native/assets/32409681/d23a78d5-3033-47ef-9347-cd5abaa8e17e 'File')

Copy file `.app` to `Desktop/Payload` folder, if it does not existed let's create it
![App file](https://github.com/zay1x/React-Native/assets/32409681/ca72cc4b-2f37-46cc-ae17-dcdaf04d4fe0 'App file')

Compress that folder and then change extension from `.zip` to `.ipa`

We have done build `.ipa` file. Now we test it in real device. You must move this file to your phone first.

We will use [Scarlet](https://usescarlet.com/) to test the app.

Hope you success!
