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

import readme from '../../../../../backpack-android/docs/Calendar/README.md';
import screenshotAll from '../../../../../backpack-android/docs/Calendar/screenshots/range.png';
import screenshotAllDm from '../../../../../backpack-android/docs/Calendar/screenshots/range_dm.png';
import screenshotColored from '../../../../../backpack-android/docs/Calendar/screenshots/colored.png';
import screenshotColoredDm from '../../../../../backpack-android/docs/Calendar/screenshots/colored_dm.png';
import { AndroidComponentPage } from '../../../components/ComponentPage';

const components = [
  {
    id: 'range',
    title: 'Range',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotAll}`,
        altText: 'Calendar with a range of dates',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotAllDm}`,
        altText: 'Calendar with a range of dates in dark mode',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
  {
    id: 'coloured',
    title: 'Custom colours',
    screenshots: [
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotColored}`,
        altText: 'Calendar with custom colours',
        subText: '(Google Pixel emulator)',
      },
      {
        width: 1080,
        height: 1920,
        src: `/${screenshotColoredDm}`,
        altText: 'Calendar with custom colours in dark mode',
        subText: '(Google Pixel emulator - dark mode)',
      },
    ],
  },
];

const AndroidCalendarPage = () => (
  <AndroidComponentPage
    screenshots={components}
    readme={readme}
    documentationId="net.skyscanner.backpack.calendar"
    githubPath="calendar"
  />
);

export default AndroidCalendarPage;
