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

import readme from '../../../../backpack-ios/Backpack/BarChart/README.md';
import screenshotDefault from '../../../../backpack-ios/screenshots/iPhone 8-bar-chart___default_lm.png';
import screenshotDefaultDm from '../../../../backpack-ios/screenshots/iPhone 8-bar-chart___default_dm.png';
import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefault}`,
        altText: 'iOS default bar chart.',
        subText: '(iPhone 8 simulator)',
      },
      {
        width: 750,
        height: 1334,
        src: `/${screenshotDefaultDm}`,
        altText: 'iOS default bar chart.',
        subText: '(iPhone 8 simulator - dark mode)',
      },
    ],
  },
];

const IOSBarChartPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Bar chart"
    components={components}
    readme={readme}
    iosDocId="BPKBarChart"
    showMenu
    {...rest}
  />
);

export default IOSBarChartPage;