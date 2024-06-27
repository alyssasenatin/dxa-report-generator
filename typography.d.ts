import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLg: React.CSSProperties;
    displayMd: React.CSSProperties;
    displaySm: React.CSSProperties;
    headlineLg: React.CSSProperties;
    headlineMd: React.CSSProperties;
    headlineSm: React.CSSProperties;
    titleLg: React.CSSProperties;
    titleMd: React.CSSProperties;
    titleSm: React.CSSProperties;
    bodyLg: React.CSSProperties;
    bodyMd: React.CSSProperties;
    bodySm: React.CSSProperties;
    labelLg: React.CSSProperties;
    labelLgBold: React.CSSProperties;
    labelMd: React.CSSProperties;
    labelMdBold: React.CSSProperties;
    labelSm: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayLg?: React.CSSProperties;
    displayMd?: React.CSSProperties;
    displaySm?: React.CSSProperties;
    headlineLg?: React.CSSProperties;
    headlineMd?: React.CSSProperties;
    headlineSm?: React.CSSProperties;
    titleLg?: React.CSSProperties;
    titleMd?: React.CSSProperties;
    titleSm?: React.CSSProperties;
    bodyLg?: React.CSSProperties;
    bodyMd?: React.CSSProperties;
    bodySm?: React.CSSProperties;
    labelLg?: React.CSSProperties;
    labelLgBold?: React.CSSProperties;
    labelMd?: React.CSSProperties;
    labelMdBold?: React.CSSProperties;
    labelSm?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLg: true;
    displayMd: true;
    displaySm: true;
    headlineLg: true;
    headlineMd: true;
    headlineSm: true;
    titleLg: true;
    titleMd: true;
    titleSm: true;
    bodyLg: true;
    bodyMd: true;
    bodySm: true;
    labelLg: true;
    labelLgBold: true;
    labelMd: true;
    labelMdBold: true;
    labelSm: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
  }
}
