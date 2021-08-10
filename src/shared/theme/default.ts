export const palette = {
  brandBlue: '#26374A',
  linkBlue: '#005B99',
  bodyBlack: '#000000',
  bodySubdued: '#5B5B5B',
  greenBright: '#A4DE82',
  white: '#FFFFFF',
  faded: 'rgba(255, 255, 255, 0.3)',
  fadedTextWhite: 'rgba(255, 255, 255, 0.65)',
  fadedWhite: 'rgba(0, 0, 0, 0.2)',
  fadedWhiteDark: 'rgba(0, 0, 0, 0.4)',
  successLight: '#D8EECA',
  success: '#278400',
  successDark: '#003620',
  errorLight: '#F3E9EB',
  danger: '#B1081E',
  error: '#D3080C',
  errorDark: '#923534',
  brandRed: '#AF3C43',
  brandGreen: '#333000',
  lightBlue: '#CCEFFF',
  neutralGrey: '#EEEEEE',
  darkGrey: '#cecece',
  fadedYellow: '#FFF5D9',
  warn: '#FFCDB3',
  nutmeg: '#5F3500',
  mint: '#B3DFC0',
  black: '#000000',
  lighterBlue: '#B3CAE5',
  buttonGrey: '#EEEEEE',
  danger25: '#FFC1B3',
  danger50: '#F7635D',
  pink: '#FFC1B3',
  purple: '#573EC5',
  gray2: '#585858',
  link: '#2B4380',
  green2: '#C9E7DE',
  greenCheck: '#33D1A1',
};

const theme = {
  colors: {
    linkText: palette.link,
    mainBackground: palette.neutralGrey,
    purpleBackground: palette.purple,
    regionCoveredBackground: palette.mint,
    exposureBackground: palette.warn,
    offlineBackground: palette.pink,
    greenBackground: palette.greenBright,
    overlayBackground: palette.white,
    danger25Background: palette.danger25,
    overlayBodyText: palette.bodyBlack,
    fadedBackground: palette.fadedWhite,
    bodyText: palette.bodyBlack,
    dangerText: palette.danger,
    successText: palette.successDark,
    bodyTitleWhite: palette.white,
    bodyTextWhite: palette.white,
    bodyTextNutmeg: palette.nutmeg,
    bodyTextFaded: palette.fadedTextWhite,
    bodyTextSubdued: palette.bodySubdued,
    statusSuccess: palette.success,
    successBackground: palette.successLight,
    statusError: palette.error,
    errorBackground: palette.errorLight,
    errorText: palette.error,
    infoBlockBrightBackground: palette.lightBlue,
    infoBlockBrightText: palette.greenCheck,
    infoBlockNeutralBackground: palette.neutralGrey,
    infoBlockNeutralText: palette.bodyBlack,
    infoBlockBlackBackground: palette.bodyBlack,
    infoBlockBlackText: palette.white,
    infoBlockYellowBackground: palette.fadedYellow,
    divider: palette.fadedWhite,
    lighterBlueBackground: palette.lighterBlue,
    buttonGrey: palette.buttonGrey,
    gray2: palette.gray2,
    gray5: palette.neutralGrey,
    green2: palette.green2,
  },
  spacing: {
    /* eslint-disable id-length */
    xxxs: 2,
    xxs: 4,
    xs: 6,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 43,
    '-s': -8,
    '-m': -16,
    '-l': -24,
    '-xl': -32,
    '-xxl': -43,
    none: 0,
    /* eslint-enable id-length */
  },
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    smallText: {
      fontFamily: 'Noto Sans',
      fontSize: 14,
      lineHeight: 22,
    },
    bodyText: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      lineHeight: 24,
    },
    bodySubTitle: {
      fontFamily: 'Noto Sans',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 24,
    },
    bodyTitle: {
      fontFamily: 'Noto Sans',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 28,
    },
    overlayTitle: {
      fontFamily: 'Noto Sans',
      fontSize: 18,
      lineHeight: 22,
    },
    homeHeader: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 22,
    },
    codeInput: {
      fontFamily: 'Noto Sans',
      fontSize: 26,
      lineHeight: 28,
    },
    menuItemTitle: {
      fontFamily: 'Noto Sans',
      fontSize: 16,
      lineHeight: 22,
    },
    menuItemSubtitle: {
      fontFamily: 'Noto Sans',
      fontSize: 12,
      lineHeight: 16,
    },
  },
  buttonVariants: {
    danger50Flat: {
      color: palette.danger50,
      height: 52,
      textColor: palette.black,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderBottomWidth: 4,
      borderBottomColor: palette.brandRed,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    opaqueFlatBlackText: {
      color: palette.faded,
      height: 52,
      textColor: palette.black,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    opaqueGrey: {
      color: palette.buttonGrey,
      height: 52,
      textColor: palette.black,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    opaqueFlatWhiteText: {
      color: palette.faded,
      height: 52,
      textColor: palette.white,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    bigFlat: {
      color: palette.linkBlue,
      height: 52,
      textColor: palette.white,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderBottomWidth: undefined,
      paddingHorizontal: 5,
      paddingVertical: 10,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    thinFlat: {
      color: palette.linkBlue,
      height: 52,
      textColor: palette.white,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderBottomWidth: 4,
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderBottomColor: palette.brandBlue,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    bigFlatNeutralGrey: {
      color: palette.neutralGrey,
      height: 52,
      textColor: palette.black,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderBottomWidth: undefined,
      disabled: {},
    },
    thinFlatNeutralGrey: {
      color: palette.neutralGrey,
      height: 52,
      textColor: palette.black,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderBottomWidth: 4,
      borderBottomColor: palette.darkGrey,
      disabled: {},
    },
    bigFlatDarkGrey: {
      color: palette.darkGrey,
      height: 52,
      textColor: palette.black,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      paddingHorizontal: 5,
      paddingVertical: 10,
      disabled: {},
    },
    bigFlatPurple: {
      color: palette.purple,
      fontWeight: 'bold',
      height: 30,
      textColor: palette.white,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {
        color: palette.darkGrey,
        textColor: palette.bodyBlack,
      },
    },
    bigFlatWhite: {
      color: palette.white,
      height: 52,
      textColor: palette.linkBlue,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {},
    },
    hollow: {
      color: 'transparent',
      height: 44,
      textColor: undefined,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: 1,
      disabled: {},
    },
    bigHollow: {
      color: 'transparent',
      height: 52,
      textColor: undefined,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: 1,
      disabled: {},
    },
    text: {
      color: 'transparent',
      height: 44,
      textColor: palette.linkBlue,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {},
    },
    subduedText: {
      color: 'transparent',
      height: 44,
      textColor: palette.bodySubdued,
      fontFamily: 'Noto Sans',
      fontSize: 16,
      borderWidth: undefined,
      disabled: {},
    },
  },
  maxContentWidth: 500,
};

export type Theme = typeof theme;
export default theme;
