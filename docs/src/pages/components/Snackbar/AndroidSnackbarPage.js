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

/* @flow strict */

import React from 'react';

import readme from '../../../../../backpack-android/docs/Snackbar/README.md';
import screenshotDefault from '../../../../../backpack-android/docs/Snackbar/screenshots/default.png';
import screenshotDefaultDm from '../../../../../backpack-android/docs/Snackbar/screenshots/default_dm.png';
import { AndroidComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefault}`,
        altText: 'Android Snackbar Component',
        subText: '(Google Pixel emulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${screenshotDefaultDm}`,
        altText: 'Android Snackbar Component',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidSnackbarPage = () => (
  <AndroidComponentPage
    documentationId="net.skyscanner.backpack.snackbar"
    screenshots={components}
    readme={readme}
    githubPath="snackbar"
  />
);

export default AndroidSnackbarPage;
