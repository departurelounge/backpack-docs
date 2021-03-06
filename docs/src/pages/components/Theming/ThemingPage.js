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
import BpkLink from 'bpk-component-link';
import BpkBlockquote from 'bpk-component-blockquote';
import webReadme from 'bpk-theming/README.md';
import { cssModules } from 'bpk-react-utils';

import nativeReadme from '../../../../../backpack-react-native/lib/bpk-theming/README.md';
import Paragraph from '../../../components/Paragraph';
import IntroBlurb from '../../../components/IntroBlurb';
import ColorSwatch from '../../../components/ColorSwatch';
import {
  WebComponentPage,
  NativeComponentPage,
} from '../../../components/ComponentPage';
import DocsPageWrapper from '../../../components/DocsPageWrapper';

import Android from './AndroidThemingPage';
import IOS from './IOSThemingPage';
import STYLES from './theming-page.scss';

const getClassName = cssModules(STYLES);

const CONTEXT_API_URL = 'https://reactjs.org/docs/context.html';
const CSS_VARIABLES_URL =
  'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables';

const blurb = [
  <IntroBlurb>
    All Backpack components have full theming support through through the theme
    provider component. In the render tree, all themeable components will have
    access to the provided theme, even when they are multiple levels deep.
    variables are used.
  </IntroBlurb>,
  <Paragraph>
    In React Native, this is achieved using React&apos;s{' '}
    <BpkLink href={CONTEXT_API_URL} blank>
      context API
    </BpkLink>
    . On the web,{' '}
    <BpkLink href={CSS_VARIABLES_URL} blank>
      CSS variables
    </BpkLink>{' '}
    are used. Each themeable component lists the theme attributes it requires in
    its readme.
  </Paragraph>,
];

const webComponents = [
  {
    id: 'about',
    title: 'Technical implementation',
    blurb: [
      <BpkBlockquote>
        <strong>Note:</strong> Backpack&#39;s theming is based on&nbsp;
        <BpkLink href={CSS_VARIABLES_URL} blank>
          CSS Variables
        </BpkLink>
        &nbsp;and thus will not be supported in some browsers. In these cases
        Backpack components will gracefully degrade to the default Skyscanner
        theme. For an overview of this check&nbsp;
        <BpkLink href="https://caniuse.com/#feat=css-variables" blank>
          caniuse
        </BpkLink>
        .
      </BpkBlockquote>,
    ],
  },
  {
    id: 'colours',
    title: 'Themeable colours',
    blurb: [
      <div>
        <Paragraph>
          The color swatches below change when a theme is applied.
        </Paragraph>
        <div className={getClassName('bpkdocs-theming-page__swatch-container')}>
          <ColorSwatch
            name="primary-color"
            textColor="#FFF"
            className={getClassName('bpkdocs-theming-page__swatch--primary')}
          />
        </div>
      </div>,
    ],
  },
];

const WebThemingPage = () => (
  <WebComponentPage
    examples={webComponents}
    readme={webReadme}
    packageName="bpk-theming"
  />
);

const NativeThemingPage = () => (
  <NativeComponentPage
    readme={nativeReadme}
    screenshots={[]}
    githubPath="bpk-theming"
  />
);

const ThemingPage = () => (
  <DocsPageWrapper
    title="Theming"
    blurb={blurb}
    webSubpage={<WebThemingPage />}
    nativeSubpage={<NativeThemingPage />}
    iosSubpage={<IOS />}
    androidSubpage={<Android />}
  />
);

export default ThemingPage;
