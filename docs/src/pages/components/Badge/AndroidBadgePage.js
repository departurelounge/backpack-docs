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

import readme from '../../../../../backpack-android/docs/Badge/README.md';
import screenshotAll from '../../../../../backpack-android/docs/Badge/screenshots/all.png';
import screenshotAllDm from '../../../../../backpack-android/docs/Badge/screenshots/all_dm.png';
import { AndroidComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotAll}`,
        altText: 'Android badges',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotAllDm}`,
        altText: 'Android badges',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidBadgePage = () => (
  <AndroidComponentPage
    documentationId="net.skyscanner.backpack.badge"
    readme={readme}
    screenshots={components}
    githubPath="badge"
  />
);

export default AndroidBadgePage;
