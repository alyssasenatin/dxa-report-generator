import { Roboto } from 'next/font/google';

const color = {
  light: {
    primary: '#37618E',
    surfaceTint: '#37618E',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D2E4FF',
    onPrimaryContainer: '#001C37',
    secondary: '#535F70',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#D7E3F8',
    onSecondaryContainer: '#101C2B',
    tertiary: '#6C5778',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#F3DAFF',
    onTertiaryContainer: '#251431',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#F8F9FF',
    onBackground: '#191C20',
    surface: '#F8F9FF',
    onSurface: '#191C20',
    surfaceVariant: '#DFE2EB',
    onSurfaceVariant: '#43474E',
    outline: '#73777F',
    outlineVariant: '#C3C6CF',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#2E3135',
    inverseOnSurface: '#EFF0F7',
    inversePrimary: '#A1C9FD',
    primaryFixed: '#D2E4FF',
    onPrimaryFixed: '#001C37',
    primaryFixedDim: '#A1C9FD',
    onPrimaryFixedVariant: '#1C4975',
    secondaryFixed: '#D7E3F8',
    onSecondaryFixed: '#101C2B',
    secondaryFixedDim: '#BBC7DB',
    onSecondaryFixedVariant: '#3C4858',
    tertiaryFixed: '#F3DAFF',
    onTertiaryFixed: '#251431',
    tertiaryFixedDim: '#D7BDE4',
    onTertiaryFixedVariant: '#533F5F',
    surfaceDim: '#D8DAE0',
    surfaceBright: '#F8F9FF',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F2F3FA',
    surfaceContainer: '#ECEEF4',
    surfaceContainerHigh: '#E7E8EE',
    surfaceContainerHighest: '#E1E2E8',
  },
  'light-medium-contrast': {
    primary: '#164571',
    surfaceTint: '#37618E',
    onPrimary: '#FFFFFF',
    primaryContainer: '#4F77A6',
    onPrimaryContainer: '#FFFFFF',
    secondary: '#384454',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#697587',
    onSecondaryContainer: '#FFFFFF',
    tertiary: '#4F3B5B',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#836C8F',
    onTertiaryContainer: '#FFFFFF',
    error: '#8C0009',
    onError: '#FFFFFF',
    errorContainer: '#DA342E',
    onErrorContainer: '#FFFFFF',
    background: '#F8F9FF',
    onBackground: '#191C20',
    surface: '#F8F9FF',
    onSurface: '#191C20',
    surfaceVariant: '#DFE2EB',
    onSurfaceVariant: '#3F434A',
    outline: '#5B5F67',
    outlineVariant: '#777B83',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#2E3135',
    inverseOnSurface: '#EFF0F7',
    inversePrimary: '#A1C9FD',
    primaryFixed: '#4F77A6',
    onPrimaryFixed: '#FFFFFF',
    primaryFixedDim: '#355E8C',
    onPrimaryFixedVariant: '#FFFFFF',
    secondaryFixed: '#697587',
    onSecondaryFixed: '#FFFFFF',
    secondaryFixedDim: '#515D6E',
    onSecondaryFixedVariant: '#FFFFFF',
    tertiaryFixed: '#836C8F',
    onTertiaryFixed: '#FFFFFF',
    tertiaryFixedDim: '#695475',
    onTertiaryFixedVariant: '#FFFFFF',
    surfaceDim: '#D8DAE0',
    surfaceBright: '#F8F9FF',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F2F3FA',
    surfaceContainer: '#ECEEF4',
    surfaceContainerHigh: '#E7E8EE',
    surfaceContainerHighest: '#E1E2E8',
  },
  'light-high-contrast': {
    primary: '#002342',
    surfaceTint: '#37618E',
    onPrimary: '#FFFFFF',
    primaryContainer: '#164571',
    onPrimaryContainer: '#FFFFFF',
    secondary: '#172332',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#384454',
    onSecondaryContainer: '#FFFFFF',
    tertiary: '#2C1B38',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#4F3B5B',
    onTertiaryContainer: '#FFFFFF',
    error: '#4E0002',
    onError: '#FFFFFF',
    errorContainer: '#8C0009',
    onErrorContainer: '#FFFFFF',
    background: '#F8F9FF',
    onBackground: '#191C20',
    surface: '#F8F9FF',
    onSurface: '#000000',
    surfaceVariant: '#DFE2EB',
    onSurfaceVariant: '#20242B',
    outline: '#3F434A',
    outlineVariant: '#3F434A',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#2E3135',
    inverseOnSurface: '#FFFFFF',
    inversePrimary: '#E2EDFF',
    primaryFixed: '#164571',
    onPrimaryFixed: '#FFFFFF',
    primaryFixedDim: '#002E53',
    onPrimaryFixedVariant: '#FFFFFF',
    secondaryFixed: '#384454',
    onSecondaryFixed: '#FFFFFF',
    secondaryFixedDim: '#222D3D',
    onSecondaryFixedVariant: '#FFFFFF',
    tertiaryFixed: '#4F3B5B',
    onTertiaryFixed: '#FFFFFF',
    tertiaryFixedDim: '#382543',
    onTertiaryFixedVariant: '#FFFFFF',
    surfaceDim: '#D8DAE0',
    surfaceBright: '#F8F9FF',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F2F3FA',
    surfaceContainer: '#ECEEF4',
    surfaceContainerHigh: '#E7E8EE',
    surfaceContainerHighest: '#E1E2E8',
  },
  dark: {
    primary: '#A1C9FD',
    surfaceTint: '#A1C9FD',
    onPrimary: '#00325A',
    primaryContainer: '#1C4975',
    onPrimaryContainer: '#D2E4FF',
    secondary: '#BBC7DB',
    onSecondary: '#253141',
    secondaryContainer: '#3C4858',
    onSecondaryContainer: '#D7E3F8',
    tertiary: '#D7BDE4',
    onTertiary: '#3B2947',
    tertiaryContainer: '#533F5F',
    onTertiaryContainer: '#F3DAFF',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#111418',
    onBackground: '#E1E2E8',
    surface: '#111418',
    onSurface: '#E1E2E8',
    surfaceVariant: '#43474E',
    onSurfaceVariant: '#C3C6CF',
    outline: '#8D9199',
    outlineVariant: '#43474E',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#E1E2E8',
    inverseOnSurface: '#2E3135',
    inversePrimary: '#37618E',
    primaryFixed: '#D2E4FF',
    onPrimaryFixed: '#001C37',
    primaryFixedDim: '#A1C9FD',
    onPrimaryFixedVariant: '#1C4975',
    secondaryFixed: '#D7E3F8',
    onSecondaryFixed: '#101C2B',
    secondaryFixedDim: '#BBC7DB',
    onSecondaryFixedVariant: '#3C4858',
    tertiaryFixed: '#F3DAFF',
    onTertiaryFixed: '#251431',
    tertiaryFixedDim: '#D7BDE4',
    onTertiaryFixedVariant: '#533F5F',
    surfaceDim: '#111418',
    surfaceBright: '#37393E',
    surfaceContainerLowest: '#0B0E13',
    surfaceContainerLow: '#191C20',
    surfaceContainer: '#1D2024',
    surfaceContainerHigh: '#272A2F',
    surfaceContainerHighest: '#32353A',
  },
  'dark-medium-contrast': {
    primary: '#A8CDFF',
    surfaceTint: '#A1C9FD',
    onPrimary: '#00172E',
    primaryContainer: '#6C93C4',
    onPrimaryContainer: '#000000',
    secondary: '#BFCCDF',
    onSecondary: '#0A1725',
    secondaryContainer: '#8592A4',
    onSecondaryContainer: '#000000',
    tertiary: '#DCC2E8',
    onTertiary: '#200F2B',
    tertiaryContainer: '#A088AC',
    onTertiaryContainer: '#000000',
    error: '#FFBAB1',
    onError: '#370001',
    errorContainer: '#FF5449',
    onErrorContainer: '#000000',
    background: '#111418',
    onBackground: '#E1E2E8',
    surface: '#111418',
    onSurface: '#FAFAFF',
    surfaceVariant: '#43474E',
    onSurfaceVariant: '#C7CBD3',
    outline: '#9FA3AB',
    outlineVariant: '#7F838B',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#E1E2E8',
    inverseOnSurface: '#272A2F',
    inversePrimary: '#1D4A76',
    primaryFixed: '#D2E4FF',
    onPrimaryFixed: '#001226',
    primaryFixedDim: '#A1C9FD',
    onPrimaryFixedVariant: '#003863',
    secondaryFixed: '#D7E3F8',
    onSecondaryFixed: '#051220',
    secondaryFixedDim: '#BBC7DB',
    onSecondaryFixedVariant: '#2B3747',
    tertiaryFixed: '#F3DAFF',
    onTertiaryFixed: '#1A0926',
    tertiaryFixedDim: '#D7BDE4',
    onTertiaryFixedVariant: '#422F4D',
    surfaceDim: '#111418',
    surfaceBright: '#37393E',
    surfaceContainerLowest: '#0B0E13',
    surfaceContainerLow: '#191C20',
    surfaceContainer: '#1D2024',
    surfaceContainerHigh: '#272A2F',
    surfaceContainerHighest: '#32353A',
  },
  'dark-high-contrast': {
    primary: '#FAFAFF',
    surfaceTint: '#A1C9FD',
    onPrimary: '#000000',
    primaryContainer: '#A8CDFF',
    onPrimaryContainer: '#000000',
    secondary: '#FAFAFF',
    onSecondary: '#000000',
    secondaryContainer: '#BFCCDF',
    onSecondaryContainer: '#000000',
    tertiary: '#FFF9FB',
    onTertiary: '#000000',
    tertiaryContainer: '#DCC2E8',
    onTertiaryContainer: '#000000',
    error: '#FFF9F9',
    onError: '#000000',
    errorContainer: '#FFBAB1',
    onErrorContainer: '#000000',
    background: '#111418',
    onBackground: '#E1E2E8',
    surface: '#111418',
    onSurface: '#FFFFFF',
    surfaceVariant: '#43474E',
    onSurfaceVariant: '#FAFAFF',
    outline: '#C7CBD3',
    outlineVariant: '#C7CBD3',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#E1E2E8',
    inverseOnSurface: '#000000',
    inversePrimary: '#002B4F',
    primaryFixed: '#D9E8FF',
    onPrimaryFixed: '#000000',
    primaryFixedDim: '#A8CDFF',
    onPrimaryFixedVariant: '#00172E',
    secondaryFixed: '#DBE8FC',
    onSecondaryFixed: '#000000',
    secondaryFixedDim: '#BFCCDF',
    onSecondaryFixedVariant: '#0A1725',
    tertiaryFixed: '#F6DFFF',
    onTertiaryFixed: '#000000',
    tertiaryFixedDim: '#DCC2E8',
    onTertiaryFixedVariant: '#200F2B',
    surfaceDim: '#111418',
    surfaceBright: '#37393E',
    surfaceContainerLowest: '#0B0E13',
    surfaceContainerLow: '#191C20',
    surfaceContainer: '#1D2024',
    surfaceContainerHigh: '#272A2F',
    surfaceContainerHighest: '#32353A',
  },
};

const palette = {
  primary: {
    '0': '#000000',
    '5': '#001225',
    '10': '#001C37',
    '15': '#002748',
    '20': '#00325A',
    '25': '#003D6C',
    '30': '#00497F',
    '35': '#005492',
    '40': '#1661A1',
    '50': '#3A7ABC',
    '60': '#5794D8',
    '70': '#73AFF4',
    '80': '#A0C9FF',
    '90': '#D2E4FF',
    '95': '#EAF1FF',
    '98': '#F8F9FF',
    '99': '#FDFCFF',
    '100': '#FFFFFF',
  },
  secondary: {
    '0': '#000000',
    '5': '#06121F',
    '10': '#111C2A',
    '15': '#1B2635',
    '20': '#263140',
    '25': '#313C4B',
    '30': '#3C4857',
    '35': '#485363',
    '40': '#545F70',
    '50': '#6C7889',
    '60': '#8692A3',
    '70': '#A0ACBE',
    '80': '#BCC7DA',
    '90': '#D8E3F7',
    '95': '#EAF1FF',
    '98': '#F8F9FF',
    '99': '#FDFCFF',
    '100': '#FFFFFF',
  },
  tertiary: {
    '0': '#000000',
    '5': '#1A0925',
    '10': '#251430',
    '15': '#301F3B',
    '20': '#3B2946',
    '25': '#473452',
    '30': '#53405E',
    '35': '#5F4B6A',
    '40': '#6B5777',
    '50': '#856F91',
    '60': '#9F89AB',
    '70': '#BBA3C7',
    '80': '#D7BEE3',
    '90': '#F3DAFF',
    '95': '#FBECFF',
    '98': '#FFF7FD',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
  neutral: {
    '0': '#000000',
    '5': '#0F1114',
    '10': '#1A1C1E',
    '15': '#242629',
    '20': '#2F3033',
    '25': '#3A3B3E',
    '30': '#46474A',
    '35': '#515255',
    '40': '#5D5E61',
    '50': '#76777A',
    '60': '#909094',
    '70': '#ABABAE',
    '80': '#C6C6C9',
    '90': '#E3E2E5',
    '95': '#F1F0F4',
    '98': '#FAF9FC',
    '99': '#FDFCFF',
    '100': '#FFFFFF',
  },
  'neutral-variant': {
    '0': '#000000',
    '5': '#0D1117',
    '10': '#181C22',
    '15': '#22262C',
    '20': '#2C3137',
    '25': '#373C42',
    '30': '#43474E',
    '35': '#4F535A',
    '40': '#5B5F66',
    '50': '#73777F',
    '60': '#8D9199',
    '70': '#A8ABB3',
    '80': '#C3C6CF',
    '90': '#DFE2EB',
    '95': '#EEF1F9',
    '98': '#F8F9FF',
    '99': '#FDFCFF',
    '100': '#FFFFFF',
  },
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const typography = {
  displayLg: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '57pt',
    fontWeight: 400,
    letterSpacing: '-0.25pt',
    lineHeight: '64pt',
  },
  displayMd: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '45pt',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '52pt',
  },
  displaySm: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '36pt',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '44pt',
  },
  headlineLg: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '32pt',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '40pt',
  },
  headlineMd: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '28pt',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '36pt',
  },
  headlineSm: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '24pt',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '32pt',
  },
  titleLg: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '22pt',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '28pt',
  },
  titleMd: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '16pt',
    fontWeight: 500,
    letterSpacing: '0.15pt',
    lineHeight: '24pt',
  },
  titleSm: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '14pt',
    fontWeight: 500,
    letterSpacing: '0.1pt',
    lineHeight: '20pt',
  },
  bodyLg: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '16pt',
    fontWeight: 400,
    letterSpacing: '0.5pt',
    lineHeight: '24pt',
  },
  bodyMd: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '14pt',
    fontWeight: 400,
    letterSpacing: '0.25pt',
    lineHeight: '20pt',
  },
  bodySm: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '12pt',
    fontWeight: 400,
    letterSpacing: '0.4pt',
    lineHeight: '16pt',
  },
  labelLg: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '14pt',
    fontWeight: 500,
    letterSpacing: '0.1pt',
    lineHeight: '20pt',
  },
  labelLgBold: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '14pt',
    fontWeight: 700,
    letterSpacing: '0.1pt',
    lineHeight: '20pt',
  },
  labelMd: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '12pt',
    fontWeight: 500,
    letterSpacing: '0.5pt',
    lineHeight: '16pt',
  },
  labelMdBold: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '12pt',
    fontWeight: 700,
    letterSpacing: '0.5pt',
    lineHeight: '16pt',
  },
  labelSm: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '11pt',
    fontWeight: 500,
    letterSpacing: '0.5pt',
    lineHeight: '16pt',
  },
};

const tokens = {
  color,
  palette,
  typography,
};

export default tokens;
