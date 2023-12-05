# 📚 React Native Use Lucky Wheel Created By HTML & CSS In Webview 📚

### Demo lucky wheel use image to make sections:

| 6 sections                                                                                                             | 8 sections                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![6 sections](https://github.com/zay1x/React-Native/assets/32409681/b8622296-4a2e-4dca-9123-fc5ebbbebf2d "6 sections") | ![8 sections](https://github.com/zay1x/React-Native/assets/32409681/3dac8e12-fb67-4ea1-a9b6-0d438fc5dec0 "8 sections") |

### Demo lucky wheel use image to make sections:

You can find code in this repository

### Code in react native

```tsx
import React, { useRef } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { SafeAreaView, StatusBar } from "react-native";

import styles from "./styles";

interface Props {
  turns: number;
}

const LuckyWheelScreen = ({ turns = 3 }: Props) => {
  const webViewRef = useRef<WebView>(null);
  const turnsRef = useRef<number>(turns);

  const handleChangeTurns = (newCount: number) => {
    webViewRef.current?.injectJavaScript(`turns.innerHTML = ${newCount};`);
  };

  const handleOnMessage = (event: WebViewMessageEvent) => {
    handleChangeTurns(turnsRef.current-- - 1);
    const sectionSelected = JSON.parse(event.nativeEvent.data);
    console.log("sectionSelected: ", sectionSelected);
  };

  const handleLoadEnd = () => {
    handleChangeTurns(turnsRef.current);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="red" />
      <WebView
        ref={webViewRef}
        source={{ uri: "http://127.0.0.1:5500/index.html" }}
        style={styles.webView}
        allowsFullscreenVideo={true}
        scrollEnabled={false}
        onMessage={handleOnMessage}
        onLoadEnd={handleLoadEnd}
      />
    </SafeAreaView>
  );
};

export default LuckyWheelScreen;
```
