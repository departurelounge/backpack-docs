/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import readme from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/README.md';
import iosScreenshotDefault from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/screenshots/ios/default.png';
import iosScreenshotSmall from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/screenshots/ios/small.png';
import iosScreenshotSpaceAround from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/screenshots/ios/space-around.png';
import androidScreenshotDefault from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/screenshots/android/default.png';
import androidScreenshotSmall from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/screenshots/android/small.png';
import androidScreenshotSpaceAround from '../../../../../backpack-react-native/lib/bpk-component-horizontal-nav/screenshots/android/space-around.png';
import { NativeComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: 'By default, navigation items are left-aligned.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Horizontal Navigation Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Horizontal Navigation Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'small',
    title: 'Small',
    blurb: 'Like the default, only a little bit smaller.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotSmall}`,
        altText: 'iOS Default Horizontal Navigation Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotSmall}`,
        altText: 'Android Default Horizontal Navigation Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'space-around',
    title: 'Space around',
    blurb:
      'Navigation items can be configured to occupy the full width of their container.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotSpaceAround}`,
        altText: 'iOS Small Horizontal Navigation Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotSpaceAround}`,
        altText: 'Android Small Horizontal Navigation Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeHorizontalNavPage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme}
    githubPath="bpk-component-horizontal-nav"
  />
);

export default NativeHorizontalNavPage;
