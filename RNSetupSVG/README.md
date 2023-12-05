# 📚 React Native SVG 📚

We add this package [react-native-svg](https://github.com/software-mansion/react-native-svg) by the following command

```bash
   yarn add react-native-svg

   cd ios/ && pod install && cd ..
```

We create assets folder like below `RNSetupSVG/assets/index.tsx`

We use [transform-tools](https://transform.tools/svg-to-react-native) to convert `svg` code to `react-native` code

Then add the following code to it

```tsx
import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const LocationIcon = ({
  color = '#000',
  width = 24,
  height = 24,
  ...props
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
      <Path
        d="M12.006 11.492a3.935 3.935 0 003.859-4.7A3.933 3.933 0 0010.5 3.925 3.934 3.934 0 008.072 7.56a3.937 3.937 0 003.934 3.933zm0-6.46a2.528 2.528 0 110 5.056 2.528 2.528 0 010-5.056z"
        fill={color}
      />
      <Path
        d="M7.722 14.626c1.065 1.443.638.882 3.707 5.262a.703.703 0 001.153 0c3.084-4.403 2.66-3.845 3.708-5.263a17.886 17.886 0 002.763-4.664 7.259 7.259 0 00-1.06-7.024 7.566 7.566 0 00-11.972 0 7.26 7.26 0 00-1.068 7.024 17.88 17.88 0 002.77 4.665zm-.59-10.83a6.159 6.159 0 019.75 0 5.896 5.896 0 01.844 5.699 16.84 16.84 0 01-2.573 4.3c-.778 1.05-.544.73-3.15 4.467-2.602-3.736-2.373-3.417-3.15-4.467A16.84 16.84 0 016.29 9.507a5.894 5.894 0 01.843-5.698v-.012z"
        fill={color}
      />
      <Path
        d="M8.298 17.68a.702.702 0 00-.97-.218l-2 1.262a.704.704 0 000 1.19l6.3 3.978a.704.704 0 00.75 0l6.3-3.979a.702.702 0 000-1.187l-2-1.263a.704.704 0 10-.75 1.19l1.058.668-4.983 3.15-4.983-3.15 1.057-.669a.703.703 0 00.221-.971z"
        fill={color}
      />
    </Svg>
  );
};
```

And then use it in `App.tsx` like below

```tsx
import React from 'react';
import {SafeAreaView} from 'react-native';

import {LocationIcon} from './assets';

const App = () => {
  return (
    <SafeAreaView>
      <LocationIcon color="green" width={100} height={100} />
    </SafeAreaView>
  );
};

export default App;
```

**_Note:_** If you encounter with error, let's re-install app and run again!