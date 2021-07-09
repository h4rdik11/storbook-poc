import { createTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";

const letterPreset = {
  family: {
    savoyeletplain: "SavoyeLetPlain",
  },
};

const colorPreset = {
  primary: "#0f6ebe",
  secondary: "#69cdff",
  patientPrimary: "#094e87",
  
  Dark1: "#1c1c1c",
  baseDark2: "#181818",
  baseDark0: "#252525",
  baseDarkHighlited: "#2a2a2a",
  contrast: "#fff",
  success: "#03ae73",
  error: "#c24040",
  warning: "#df7833",
  base: "#121212",
  highEmphasis: "#E6E6E6",
  mediumEmphasis: "#999999",
  lowEmphasis: "#666666",
  hoverColor: "#2a2a2a",
  textColorDisabled: "#666666",

  //Elevations
  elevation: "rgba(255, 255, 255, 0)",
  elevation01: "rgba(255, 255, 255, 0.01)",
  elevation0: "rgba(255, 255, 255, 0.03)",
  elevation1: "rgba(255, 255, 255, 0.06)",
  elevation2: "rgba(255, 255, 255, 0.12)",
  elevation3: "rgba(255, 255, 255, 0.18)",
  elevation4: "rgba(255, 255, 255, 0.24)",
  elevation6: "#1f1f1f",
  elevation7: "#2a2a2a",
  elevation8: "#202020",
  elevation12: "#2d2d2d",
  elevation18: "#3c3c3c",
  elevation24: "#4a4a4a",
  textElevation: "rgba(255, 255, 255, 0.4)",
};

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },

  breakpoints: {
    values: {
      xs: 1080,
      sm: 1280,
      sd: 1440,
      MacScaled: 1680,
      md: 1920,
      lg: 2560,
      xl: 3840,
    },
  },

  colorPreset: {
    primary: colorPreset.primary,
    secondary: colorPreset.secondary,
    elevation: colorPreset.elevation,
    elevation6: colorPreset.elevation6,
    elevation7: colorPreset.elevation7,
    elevation8: colorPreset.elevation8,
    elevation12: colorPreset.elevation12,
    elevation18: colorPreset.elevation18,
    elevation24: colorPreset.elevation24,
    highEmphasis: colorPreset.highEmphasis,
    textColorDisabled: colorPreset.textColorDisabled,
    contrast: colorPreset.contrast,
    success: colorPreset.success,
    warning: colorPreset.warning,
    error: colorPreset.error,
    base: colorPreset.base,
    mediumEmphasis: colorPreset.mediumEmphasis,
    lowEmphasis: colorPreset.lowEmphasis,
    textElevation: colorPreset.textElevation,
    patientPrimary: colorPreset.patientPrimary,
    baseDark1: colorPreset.baseDark1,
    baseDark2: colorPreset.baseDark2,
    baseDark0: colorPreset.baseDark0,
    baseDarkHighlited: colorPreset.baseDarkHighlited,
    hoverColor: colorPreset.hoverColor,
    //Elevations
    elevation0: colorPreset.elevation0,
    elevation01: colorPreset.elevation01,
    elevation1: colorPreset.elevation1,
    elevation2: colorPreset.elevation2,
    elevation3: colorPreset.elevation3,
    elevation4: colorPreset.elevation4,
  },
  letterPreset: {},
  statusIndicator: {
    width: ".6rem",
    height: ".6rem",
    position: "relative",
    borderRadius: "50%",
  },
  regularDisabled12: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: colorPreset.textColorDisabled,
    lineHeight: "1.6rem",
  },

  columnHeading: {
    marginBottom: "1.6rem",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.4rem",
    color: colorPreset.mediumEmphasis,
    letterSpacing: ".1rem",
  },
  regularNormal12: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: colorPreset.mediumEmphasis,
    lineHeight: "1.6rem",
  },
  regularHigh16: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    color: colorPreset.highEmphasis,
    lineHeight: "2rem",
  },
  signature: {
    fontWeight: 400,
    color: colorPreset.highEmphasis,
    fontFamily: letterPreset.family.savoyeletplain,
  },
  mediumHigh12: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: colorPreset.highEmphasis,
    lineHeight: "1.6rem",
  },
  mediumNormal12: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: colorPreset.mediumEmphasis,
    lineHeight: "1.6rem",
  },
  mediumDisabled12: {
    color: colorPreset.lowEmphasis,
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: "1.6rem",
  },
  regularHigh12: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: colorPreset.highEmphasis,
    lineHeight: "1.6rem",
  },

  regularNormal10: {
    fontSize: "1rem",
    fontWeight: 400,
    color: colorPreset.mediumEmphasis,
    lineHeight: "1.4rem",
  },
  regularDisabled10: {
    fontSize: "1rem",
    fontWeight: 400,
    color: colorPreset.textColorDisabled,
    lineHeight: "1.4rem",
  },
  mediumHigh10: {
    fontSize: "1rem",
    fontWeight: 500,
    color: colorPreset.highEmphasis,
    lineHeight: "1.4rem",
  },
  editText: {
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: "0",
    lineHeight: "1.2rem",
    color: colorPreset.secondary,
    cursor: "pointer",
    textDecoration: "none",
  },
  PageTitle: {
    fontSize: "2rem",
    fontWeight: 500,
    lineHeight: "2.4rem",
    letterSpacing: "0",
    color: colorPreset.highEmphasis,
    textDecoration: "none",
  },
  PagesubTitle: {
    fontSize: "1.2rem",
    fontWeight: 400,
    lineHeight: "1.6rem",
    letterSpacing: "0",
    color: colorPreset.mediumEmphasis,

    textDecoration: "none",
  },
  normalText: {
    fontSize: ".8rem",
    fontWeight: 500,
    color: colorPreset.mediumEmphasis,
    lineHeight: "1.4rem",
  },
  regularNormal8: {
    fontSize: ".8rem",
    fontWeight: 400,
    color: colorPreset.mediumEmphasis,
    lineHeight: "1.2rem",
  },
  commonText: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.4rem",
    letterSpacing: "0",
    color: colorPreset.highEmphasis,
    textDecoration: "none",
  },
  bulkWrapper: {
    border: ".1rem solid #292929",
    display: "flex",
    maxWidth: "43.4rem",
    alignItems: "center",
    paddingRight: "3rem",
    paddingTop: "2.4rem",
    opacity: ".4",
    paddingBottom: " 2.4rem",
    height: "13.4rem",
  },
  bulkImage: {
    marginRight: "1.3vw",
    width: "10.3125vw",
  },
  bulkText: {
    color: colorPreset.mediumEmphasis,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.4rem",
    marginBottom: ".8rem",
  },
  bulkTitle: {
    color: colorPreset.highEmphasis,
    fontSize: "1.4rem",
    fontWeight: 500,
    lineHeight: "1.8rem",
    whiteSpace: "nowrap",
    marginBottom: ".4rem",
  },
  bulkLink: {
    color: colorPreset.secondary,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.4rem",
  },
  boldHigh14: {
    fontSize: "1.4rem",
    fontWeight: 800,
    lineHeight: "1.8rem",
    color: colorPreset.highEmphasis,
  },
  boldHigh24: {
    fontSize: "2.4rem",
    fontWeight: 800,
    lineHeight: "2.8rem",
    color: colorPreset.highEmphasis,
  },
  CardTitle: {
    fontSize: "1.6rem",
    lineHeight: "2rem",
    color: colorPreset.highEmphasis,
    fontWeight: 700,
    letterSpacing: "0",
  },
  CardSubTitle: {
    fontSize: "1rem",
    lineHeight: "1.4rem",
    color: colorPreset.lowEmphasis,
    fontWeight: 400,
    letterSpacing: "0",
  },
  InputHeader: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
    color: colorPreset.lowEmphasis,
    fontWeight: 500,
    letterSpacing: ".05rem",
    textTransform: "uppercase",
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // marginLeft: " 1.5rem",
    // marginTop: "1.3rem",

    "& > span": {
      marginLeft: "-.28rem",
      marginRight: ".1rem",
    },
  },
  defaultCheckbox: {
    color: colorPreset.lowEmphasis,
    padding: "0",
    "& > .MuiIconButton-label": {
      padding: "0",
    },
    "& > .MuiSvgIcon-root": {
      display: "none",
    },
  },
  buttonBaseClass: {
    position: "relative",
    height: "1.8rem",
    transition: "all .4s ease",
    justifyContent: "flex-start",
    paddingLeft: ".8rem",
    alignItems: "center",

    "&:focus": {
      position: "relative",

      "&::before": {
        position: "absolute",
        content: "''",
        backgroundColor: colorPreset.elevation2,
        opacity: 0.8,
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      },
    },
  },
  popoverSubText: {
    fontSize: "1.2rem",
    lineHeight: "1.2rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
    color: colorPreset.lowEmphasis,
    textTransform: "uppercase",
  },
  cardInputHolder: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    justifyContent: "space-between",
  },

  commonSliderParent: {
    width: "100%",
    height: "100%",
    borderRadius: "0.4rem",
    boxSizing: "border-box",
    transition: "0.2s all ease-in-out",
  },

  commonFlexBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  labelText: {
    textTransform: "uppercase",
    fontSize: "1rem",
    lineHeight: "1.2rem",
    letterSpacing: "0.05rem",
    fontWeight: 500,
    color: colorPreset.highEmphasis,
  },
  crossButton: {
    cursor: "pointer",
    transition: "all .2s ease-in-out",

    "&:active": {
      transform: "scale(.98)",
      outline: "none",
    },
  },
  TopBorderRadius: {
    "& > div:first-child": {
      "& > div:first-child": { borderRadius: ".4rem .4rem 0 0" },
    },
  },
  BottomBorderRadius: {
    "& > div:first-child": {
      "& > div:first-child": { borderRadius: "0 0 .4rem .4rem" },
    },
  },
  buttonCommon: {
    backgroundColor: colorPreset.elevation1,
    width: "fit-content",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: ".2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    minWidth: "unset",
    padding: ".5rem .7rem !important",
    transition: "all .2s ease-in-out",

    "&:hover": {
      backgroundColor: colorPreset.elevation1,
    },
    // "&:active": {
    //   transform: "scale(.98)",
    //   outline: "none",
    // },
  },
  buttonDisabled: {
    backgroundColor: colorPreset.elevation1,
    width: "7.2rem",
    height: "2.4rem",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: ".2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    minWidth: "unset",

    "&:hover": {
      backgroundColor: `${colorPreset.elevation1} !important`,
    },
    transition: "all .2s ease-in-out",

    "&:active": {
      transform: "scale(.98)",
      outline: "none",
    },
  },

  customBackDrop: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: 99,
    top: 0,
    backgroundColor: alpha("#000000", 0.4),
  },

  enabledButton: {
    backgroundColor: colorPreset.primary,
    width: "7.2rem",
    height: "2.4rem",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: ".2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    minWidth: "unset",

    "&:hover": {
      backgroundColor: colorPreset.primary,
    },

    transition: "all .2s ease-in-out",

    "&:active": {
      transform: "scale(.98)",
      outline: "none",
    },
  },
  IconsOnActive: {
    transition: "all .2s ease-in-out",
    outline: "none",
    border: ".1rem solid transparent",

    "&:active": {
      transform: "scale(1.1)",
      outline: "none",
      border: ".1rem solid #2e2d2d",

      position: "relative",
      "&:before": {
        transition: "all .2s ease-in-out",
        backgroundColor: colorPreset.elevation1,
        width: "100%",
        height: "100%",
        content: "''",
        position: "absolute",
        left: 0,
      },
    },
    "&:focus": {
      transform: "scale(1.1)",
      outline: "none",
      border: ".1rem solid #2e2d2d",

      position: "relative",
      "&:before": {
        transition: "all .2s ease-in-out",
        backgroundColor: colorPreset.elevation1,
        width: "100%",
        height: "100%",
        content: "''",
        position: "absolute",
        left: 0,
      },
    },
  },
  ContainerActiveWithoutScale: {
    transition: "all .2s ease-in-out",
    outline: "none",
    border: ".1rem solid transparent",

    "&:active": {
      outline: "none",
      border: ".1rem solid #2e2d2d",
    },
    "&:focus": {
      outline: "none",
      border: ".1rem solid #2e2d2d",
    },
  },
  AddDetailsBox: {
    transition: "all .2s ease-in-out",
    border: ".1rem solid transparent",

    "&:active": {
      transform: "scale(.98)",
      border: ".1rem solid #2e2d2d",
      outline: "none",

      position: "relative",
      "&:before": {
        transition: "all .2s ease-in-out",
        backgroundColor: colorPreset.elevation1,
        width: "100%",
        height: "100%",
        content: "''",
        position: "absolute",
        left: 0,
        borderRadius: ".4rem",
      },
    },
    "&:focus": {
      transform: "scale(.98)",
      border: ".1rem solid #2e2d2d",
      outline: "none",

      position: "relative",
      "&:before": {
        transition: "all .2s ease-in-out",
        backgroundColor: colorPreset.elevation1,
        width: "100%",
        height: "100%",
        content: "''",
        position: "absolute",
        left: 0,
        borderRadius: ".4rem",
      },
    },
  },

  ctaIcon: {
    cursor: "pointer",
    width: "2.2rem",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.2rem",
  },
  smallContainer: {
    "& > div:first-child": {
      "& > div:first-child": {
        minHeight: "2.8rem",
        height: "2.8rem",
      },
    },
  },

  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "unset",
      },
    },

    MuiRadio: {
      colorSecondary: {
        color: colorPreset.mediumEmphasis,

        "&.Mui-checked": {
          color: colorPreset.primary,
        },
      },
    },

    MuiSelect: {
      selectMenu: {
        overflow: "unset",
      },
      select: {
        height: "100% !important",
        minWidth: "unset",
        padding: "0",
        paddingRight: "0 !important",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        fontSize: "1rem",
        lineHeight: "1.4rem",

        "&:focus": {
          backgroundColor: "transparent",
        },

        "&.MuiSelect": {
          select: {
            padding: "0",
          },
        },
      },
    },
    MuiIconButton: {
      edgeEnd: {
        marginRight: "0 !important",
      },
      sizeSmall: {
        padding: "0 !important",
      },
      root: {
        padding: "0",
        width: "2rem",
        height: "2rem",

        "&:hover": {
          transform: "none",
          backgroundColor: "none",
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#2e2e2e",
      },
      rounded: {
        borderRadius: ".2rem",
      },
    },

    MuiButton: {
      containedSizeLarge: {
        padding: "0",
        fontSize: "0",
      },

      outlined: {
        "&$disabled": {
          border: ".1rem solid rgba(255, 255, 255, 0.3)",
        },
      },

      root: {
        padding: "0 !important",

        minWidth: "12rem",
        textTransform: "capitalize",
        fontWeight: 500,
        fontSize: "1.2rem",
        borderRadius: ".4rem",
        // "&$disabled": {
        //   border: "solid .1rem #4a4a4a !important",
        // },

        "&:hover": {
          backgroundColor: colorPreset.primary,
          transform: "none",
        },
      },
      contained: {
        boxShadow: "none",

        "&:hover": {
          boxShadow: "none",
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1.6667vw",
      },
    },
    MuiListItem: {
      width: "100%",
      root: {
        "&$selected": {
          // backgroundColor: colorPreset.elevation3,
          backgroundColor: "#3c3d3c",
        },
      },

      button: {
        "&:hover": {
          backgroundColor: "#363636",
        },
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginTop: ".625vw !important",
        marginRight: ".5548vw",
      },
    },
    MuiInputBase: {
      root: {
        height: "100%",
      },
    },
    MuiFormLabel: {
      root: {
        "&$disabled": {
          color: "#666666",
          // opacity: "40%",
          opacity: ".4",
        },
      },
    },

    MuiInputLabel: {
      root: {
        fontSize: "1.2rem",
        lineHeight: "1.6rem",
        color: colorPreset.mediumEmphasis,
        "&$focused": {
          color: colorPreset.mediumEmphasis,
        },
        transform: "translate(1.2rem, 1.2rem) scale(1) ",
        "&$shrink": {
          transform: "translate(1.2rem, .4rem) scale(0.75)",
        },
        "&$error": {
          color: colorPreset.mediumEmphasis,
        },
        "&$disabled": {
          color: colorPreset.textColorDisabled,
          opacity: ".4",
        },
      },

      marginDense: {
        transform: "translate(1.2rem, 1.3rem) scale(1) !important",
      },

      filled: {
        transform: "translate(1.2rem, 1.3rem) scale(1)",

        "&$shrink": {
          transform: "translate(1.2rem, .4rem) scale(.75)",

          "&$marginDense": {
            transform: "translate(1.2rem, .4rem) scale(.75)",
          },
        },
      },
    },
    MuiFilledInput: {
      root: {
        fontSize: "1.2rem",
        color: colorPreset.highEmphasis,
        backgroundColor: "#1e1e1e",
        borderTopLeftRadius: ".4rem",
        borderTopRightRadius: ".4rem",

        minHeight: "4.1rem",

        "&:hover:not($focused)": {
          height: "100%",
          backgroundColor: "transparent !important",
        },
        "&:hover:focused": {
          height: "100%",
          backgroundColor: "transparent !important",
        },

        "&$disabled": {
          opacity: ".4",
          backgroundColor: "#1f1f1f !important",
        },

        "&$focused": {
          // backgroundColor: "#3c3c3c !important",
          backgroundColor: "#3c3c3c",
        },

        "&:hover": {
          // backgroundColor: "#2d2d2d",
          backgroundColor: "transparent !important",
        },
      },

      multiline: {
        padding: "0 !important",
      },
      inputMultiline: {
        // padding: "0 !important",
      },
      adornedEnd: {
        paddingRight: "1.2rem",
      },
      underline: {
        "&$disabled": {
          "&:before": {
            borderBottomStyle: "solid",
          },
        },
        "&:before": {
          borderBottom: ".1rem solid #4b4b4b",
        },
        "&:after": {
          borderBottom: `.1rem solid #4b4b4b`,
        },
        "&:hover:before": {
          borderBottom: `.1rem solid #4b4b4b`,
        },
        "&$error": {
          // borderBottom: ".1rem solid #c24040",
        },
      },
      input: {
        padding: "1.6rem 1.2rem .8rem 1.2rem",
      },
    },

    MuiAutocomplete: {
      endAdornment: {
        top: "calc(50% - 1rem)",
        position: "absolute",
      },
      option: {
        "&[data-focus=true]": {
          backgroundColor: "unset",
        },
        "&[data-selected=true]": {
          backgroundColor: "unset",
        },
      },

      listbox: {
        "&::-webkit-scrollbar": {
          width: ".3rem",
        },
        "&::-webkit-scrollbar-track": {
          background: "#2d2d2d",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#3c3c3c",
        },
      },

      popupIndicator: {
        "&:hover": {
          backgroundColor: "transparent",
          transform: "none",
        },

        "& svg": {
          transform: "rotate(180deg)",
          fill: colorPreset.lowEmphasis,
          width: "1.6rem",
          height: "1.6rem",
          marginRight: "1.2rem",
          "& > path": {
            d: `path("M10 7l6 7H4z") !important`,
          },
        },
      },
      popupIndicatorOpen: {
        transform: "none",
      },
      root: {},
      tagSizeSmall: {
        height: "1.6rem",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "1.4rem",
        borderRadius: "1rem",
        backgroundColor: "#474747",
      },

      input: {
        fontSize: "1.2rem",
        fontWeight: 400,
        color: colorPreset.highEmphasis,
      },
    },

    MuiChip: {
      labelSmall: {
        paddingLeft: ".8rem",
        paddingRight: ".2rem",
      },

      deleteIconSmall: {
        fill: colorPreset.mediumEmphasis,
        width: "1.6rem",
        height: "1.6rem",
        transform: "rotate(45deg)",
        marginRight: "0",
        marginLeft: "0",
        marginTop: ".8rem",

        "& > path": {
          d: `path("M12.436 7.036H9.157a.193.193 0 0 1-.193-.193V3.564a.964.964 0 0 0-1.928 0v3.279a.193.193 0 0 1-.193.193H3.564a.964.964 0 0 0 0 1.928h3.279c.106 0 .193.087.193.193v3.279a.964.964 0 0 0 1.928 0V9.157c0-.106.087-.193.193-.193h3.279a.964.964 0 0 0 0-1.928z") !important`,
        },
      },

      deleteIcon: {
        fill: colorPreset.mediumEmphasis,
        width: "1.2rem",
        height: "1.2rem",

        marginRight: ".5rem",
      },
    },

    MuiSnackbar: {
      root: {
        zIndex: 9989,
      },
    },
    MuiMenu: {
      paper: {
        maxHeight: "20rem",
        // marginLeft: "-1.3rem",
        // transformOrigin: "0px 0px !important",

        "&::-webkit-scrollbar": {
          width: ".3rem",
        },
        "&::-webkit-scrollbar-track": {
          background: "#2d2d2d",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#3c3c3c",
        },
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: "0",
        paddingBottom: "0",
        height: "2.4rem",
        minHeight: "2.4rem",
      },
    },
    MuiSnackbarContent: {
      root: {
        borderRadius: 0,
        "@media (min-width: 600px)": {
          minWidth: "fit-content",
        },
      },
      message: {
        padding: "0 !important",
      },
    },

    MuiDialog: {
      root: {
        zIndex: "99999 !important",
      },
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: "unset",
      },
    },
    MuiTabs: {
      flexContainer: {
        "& button": {
          height: "2.8rem",

          "&:hover": {
            backgroundColor: "unset !important",
            transform: "none",
          },
        },
      },
      root: {
        minHeight: "1.40625vw",
      },
      indicator: {
        height: "auto",
        borderBottom: `.2rem solid ${colorPreset.primary}`,
      },
    },
    MuiTab: {
      root: {
        marginRight: "1.6rem",
        padding: "0vw",
        minWidth: "5vw",
        maxWidth: "18.3079vw",
        minHeight: "1.40625vw",

        textTransform: "initial",
        "@media (min-width: 960px)": {
          minWidth: "1.1528vw",
          fontSize: "1rem",
        },
      },
      textColorInherit: {
        opacity: "1",
      },
    },

    MuiFormControlLabel: {
      root: {
        marginLeft: "0 !important",
        "&$disabled": {
          // opacity: "40%",
          opacity: ".4",

          color: "#666666",
        },
      },
      label: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.4rem",
        letterSpacing: "0 !important",
        color: colorPreset.lowEmphasis,
        "&$disabled": {
          color: colorPreset.lowEmphasis,
        },
      },
    },
    MuiList: {
      padding: {
        paddingTop: ".4rem",
        paddingBottom: ".4rem",
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        "&.Mui-checked": {
          color: colorPreset.primary,
        },
      },
      root: {
        padding: "0 !important",
        marginRight: ".7rem",
        marginLeft: "-.4rem",

        color: colorPreset.lowEmphasis,

        "& svg": {
          width: "1.4rem",
          height: "1.4rem",
        },
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  // spacing: factor => `${0.4167 * factor}vw`,
  // spacing: factor => `${0.625 * factor}vw`,
  // spacing: factor => `${(factor/1280) * 100}vw`,
  palette: {
    type: "dark",
    primary: {
      main: "#0f6ebe",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#69cdff",
      dark: "#ba000d",
      contrastText: "#000",
    },
    error: {
      main: "#c24040",
    },
  },
  customButtons: {
    btnMedium: {
      width: "12rem",
      height: "3.6rem",
      borderRadius: ".4rem",
    },
    btnBlue: {
      width: "12rem",
      height: "3.6rem",
      padding: "1rem 3.5rem",
      color: colorPreset.highEmphasis,
      fontSize: "1.2rem",
      fontWeight: 500,
      backgroundColor: colorPreset.primary,
    },
  },
  customIcons: {
    leftArrowIcon: {
      width: ".6vw",
      height: "2.3vw",
      verticalAlign: "middle",
    },
  },
});

export default theme;
