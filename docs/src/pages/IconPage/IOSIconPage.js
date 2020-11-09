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

import readme from '../../../../backpack-ios/Backpack/Icon/README.md';
import screenshotAll from '../../../../backpack-ios/screenshots/iPhone 8-icon___all_lm.png';
import screenshotAllDm from '../../../../backpack-ios/screenshots/iPhone 8-icon___all_dm.png';
import { IOSComponentPage } from '../../components/ComponentPage';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotAll}`,
        altText: 'Icons for iOS.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotAllDm}`,
        altText: 'Icons for iOS.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSIconPage = () => (
  <IOSComponentPage
    screenshots={components}
    readme={readme}
    documentationId="BPKIcon"
    githubPath="Icon"
  />
);

export default IOSIconPage;