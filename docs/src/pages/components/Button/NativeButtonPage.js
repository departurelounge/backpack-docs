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

import readme from '../../../../../backpack-react-native/lib/bpk-component-button/README.md';
import linkReadme from '../../../../../backpack-react-native/lib/bpk-component-button-link/README.md';
import iosScreenshotPrimary from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/ios/primary.png';
import iosScreenshotSecondary from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/ios/secondary.png';
import iosScreenshotDestructive from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/ios/destructive.png';
import iosScreenshotFeatured from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/ios/featured.png';
import iosScreenshotLink from '../../../../../backpack-react-native/lib/bpk-component-button-link/screenshots/ios/default.png';
import androidScreenshotPrimary from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/android/primary.png';
import androidScreenshotSecondary from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/android/secondary.png';
import androidScreenshotDestructive from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/android/destructive.png';
import androidScreenshotFeatured from '../../../../../backpack-react-native/lib/bpk-component-button/screenshots/android/featured.png';
import androidScreenshotLink from '../../../../../backpack-react-native/lib/bpk-component-button-link/screenshots/android/default.png';
import { NativeComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'primary',
    title: 'Primary',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotPrimary}`,
        altText: 'iOS Primary Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotPrimary}`,
        altText: 'Android Primary Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'secondary',
    title: 'Secondary',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotSecondary}`,
        altText: 'iOS Secondary Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotSecondary}`,
        altText: 'Android Secondary Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'destructive',
    title: 'Destructive',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDestructive}`,
        altText: 'iOS Destructive Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDestructive}`,
        altText: 'Android Destructive Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'featured',
    title: 'Featured',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotFeatured}`,
        altText: 'iOS Featured Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotFeatured}`,
        altText: 'Android Featured Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'link',
    title: 'Link',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotLink}`,
        altText: 'iOS Link Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotLink}`,
        altText: 'Android Link Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
    readme: linkReadme,
  },
];

const NativeButtonPage = () => (
  <NativeComponentPage
    screenshots={components}
    readme={readme + linkReadme}
    githubPath="bpk-component-button"
  />
);

export default NativeButtonPage;
