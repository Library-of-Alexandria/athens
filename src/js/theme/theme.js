import { extendTheme, cssVar } from '@chakra-ui/react'
import { readableColor } from 'polished';
import { spacing } from './spacing'

const $arrowBg = cssVar("popper-arrow-bg");

const shadows = {
  focusLight: '0 0 0 3px #0071DB',
  focusDark: '0 0 0 3px #498eda',

  focusInsetLight: 'inset 0 0 0 3px #0071DB',
  focusInsetDark: 'inset 0 0 0 3px #498eda',

  page: '0 0.25rem 1rem #00000055',
}

const fonts = {
  body: '"IBM Plex Serif", BlinkMacSystemFont,"Segoe UI Variable","Segoe UI",system-ui,ui-sans-serif,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  default: '"IBM Plex Sans", BlinkMacSystemFont,"Segoe UI Variable","Segoe UI",system-ui,ui-sans-serif,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  code: '"IBM Plex Mono", BlinkMacSystemFont, "Segoe UI Variable", "Segoe UI", system-ui, ui-sans-serif, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
}

const radii = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  full: '9999px',
}

const colors = {
  // light theme
  linkLight: "#0071DB",
  linkContrastLight: '#fff',
  highlightLight: "#F9A132",
  textHighlightLight: "#ffdb8a",
  highlightContrastLight: "#000",
  warningLight: "#D20000",

  backgroundPlus2Light: "#fff",
  backgroundPlus1Light: "#fbfbfb",
  backgroundColorLight: "#F6F6F6",
  backgroundMinus1Light: "#FAF8F6",
  backgroundMinus2Light: "#EFEDEB",
  backgroundVibrancyLight: "#ffffff99",

  errorLight: "#fd5243",
  shadowLight: "#000",

  // dark theme
  backgroundMinu2Dark: "#151515",
  backgroundMinus1Dark: "#111",
  backgroundColorDark: "#1A1A1A",
  backgroundPlus1Dark: "#222",
  backgroundPlus2Dark: "#333",
  backgroundVibrancyDark: "#222222aa",

  linkDark: "#498eda",
  linkContrastDark: '#fff',
  highlightDark: "#FBBE63",
  textHighlightDark: "#FBBE63",
  highlightContrastDark: "#000",
  warningDark: "#DE3C21",

  errorDark: "#fd5243",
  shadowDark: "#000",

  // interactives

}

const semanticTokens = {
  shadows: {
    focus: {
      default: "focusLight",
      _dark: "focusDark",
    },
    focusInset: {
      default: "focusInsetLight",
      _dark: "focusInsetDark",
    },
    focusPlaceholder: {
      default: '0 0 0 3px transparent'
    },
    focusPlaceholderInset: {
      default: 'inset 0 0 0 3px transparent'
    },
    page: {
      default: "0 0.25rem 1rem #00000022",
      _dark: "0 0.25rem 1rem #00000055",
    },
    menu: {
      default: "0 0.25rem 1rem #00000022",
      _dark: "0 0.25rem 1rem #00000022",
    },
    popover: {
      default: "0 0.25rem 1rem #00000055",
    },
    tooltip: {
      default: "0 0.25rem 1rem #00000055",
    },
    dialog: {
      default: "0 0.25rem 1rem #00000022",
    },
  },
  colors: {
    brand: {
      default: 'linkLight',
      _dark: 'linkDark'
    },
    // separator colors
    "separator.border": {
      default: '00000022',
      _dark: '#ffffff55'
    },
    "separator.divider": {
      default: '#00000022',
      _dark: '#ffffff11'
    },
    // background colors
    "background.floor": {
      default: 'backgroundColorLight',
      _dark: 'backgroundColorDark'
    },
    "background.basement": {
      default: 'backgroundMinus1Light',
      _dark: 'backgroundMinus1Dark'
    },
    "background.upper": {
      default: 'backgroundPlus1Light',
      _dark: 'backgroundPlus1Dark'
    },
    "background.attic": {
      default: 'backgroundPlus2Light',
      _dark: 'backgroundPlus2Dark'
    },
    "background.vibrancy": {
      default: 'backgroundVibrancyLight',
      _dark: 'backgroundVibrancyDark'
    },
    // foreground colors
    "foreground.primary": {
      default: 'hsla(0, 0%, 0%, 0.87)',
      _dark: 'hsla(0, 0%, 100%, 0.8)'
    },
    "foreground.secondary": {
      default: 'hsla(0, 0%, 0%, 0.57)',
      _dark: 'hsla(0, 0%, 100%, 0.57)'
    },
    "foreground.tertiary": {
      default: 'hsla(0, 0%, 0%, 0.2)',
      _dark: 'hsla(0, 0%, 100%, 0.2)'
    },
    // interactions
    "interaction.surface": {
      default: 'hsla(0, 0%, 0%, 0.04)',
      _dark: 'hsla(0, 0%, 100%, 0.04)',
    },
    "interaction.surface.hover": {
      default: 'hsla(0, 0%, 0%, 0.08)',
      _dark: 'hsla(0, 0%, 100%, 0.08)',
    },
    "interaction.surface.active": {
      default: 'hsla(0, 0%, 0%, 0.12)',
      _dark: 'hsla(0, 0%, 100%, 0.16)',
    },
    // status colors
    danger: {
      default: 'warningLight',
      _dark: 'warningDark'
    },
    info: {
      default: 'linkLight',
      _dark: 'linkDark'
    },
    warning: {
      default: 'warningLight',
      _dark: 'warningDark'
    },
    success: {
      default: 'confirmationLight',
      _dark: 'confirmationDark'
    },
    // other colors
    textHighlight: {
      default: 'textHighlightLight',
      _dark: 'textHighlightDark'
    },
    highlight: {
      default: 'highlightLight',
      _dark: 'highlightDark'
    },
    highlightContrast: {
      default: 'highlightContrastLight',
      _dark: 'highlightContrastDark'
    },
    link: {
      default: 'linkLight',
      _dark: 'linkDark'
    },
    linkContrast: {
      default: 'linkContrastLight',
      _dark: 'linkContrastDark'
    },
    // block content colors
    "ref.foreground": {
      default: "#fbbe63bb",
      _dark: "#fbbe6366",
    },
    "ref.background": {
      default: "#fbbe63bb",
      _dark: "#fbbe6311",
    }
  }
}

const makeAvatarColor = (bg, color) => {
  if (bg && color) {
    return {
      col: bg,
      color: color,
    }
  } else if (bg && !color) {
    return {
      bg: bg,
      color: readableColor(bg)
    }
  } else if (color && !bg) {
    return {
      bg: readableColor(color),
      color: color,
    }
  }
}

const components = {
  Alert: {
    variants: {
      // variant used by toasts
      solid: ({ colorScheme }) => ({
        container: {
          bg: 'background.vibrancy',
          backdropFilter: "blur(20px)",
          color: "foreground.primary",
          _after: {
            content: "''",
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: colorScheme,
            opacity: 0.1,
            zIndex: -1,
          }
        },
        title: {
          fontWeight: "normal"
        },
        icon: {
          color: colorScheme || "info"
        }
      })
    }
  },
  Avatar: {
    baseStyle: ({ bg, color }) => {
      return {
        container: {
          borderColor: "background.floor",
          ...makeAvatarColor(bg, color)
        },
      }
    },
  },
  Accordion: {
    baseStyle: {
      button: {
        borderRadius: "sm",
        borderColor: "separator.border",
        _hover: {
          bg: "interaction.surface.hover",
        },
        _active: {
          bg: "interaction.surface.active"
        },
        _focus: {
          outline: "none",
          boxShadow: "none",
        },
        _focusVisible: {
          outline: "none",
          boxShadow: "focusInset"
        }
      },
    }
  },
  Breadcrumb: {
    baseStyle: {
      container: {
        lineHeight: 1.5,
      },
      separator: {
        color: 'separator.border'
      },
    }
  },
  Button: {
    baseStyle: {
      transitionProperty: 'common',
      transitionTimingFunction: 'ease-in-out',
      "& > .chakra-button__icon svg": {
        height: "1.5em",
        width: "1.5em",
      },
      _active: {
        transitionDuration: "0s",
      },
      _focus: {
        outline: 'none',
        boxShadow: 'none'
      },
      _focusVisible: {
        outline: 'none',
        boxShadow: 'focus'
      }
    },
    variants: {
      link: {
        color: "link",
        borderRadius: "1px"
      },
      solid: {
        bg: "interaction.surface",
        _hover: {
          bg: "interaction.surface.hover"
        },
        _active: {
          color: 'foreground.primary',
          bg: 'interaction.surface.active',
        },
      },
      ghost: {
        bg: "transparent",
        color: "foreground.primary",
        _hover: {
          bg: "interaction.surface.hover"
        },
        _active: {
          color: 'foreground.primary',
          bg: 'interaction.surface.active',
        },
      },
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "interaction.surface.hover",
        _hover: {
          borderColor: "transparent",
          bg: "interaction.surface.hover",
        },
        _active: {
          color: 'foreground.primary',
          bg: 'interaction.surface.active',
          borderColor: "transparent",
        },
      }
    },
    colorSchemes: {
      danger: {
        color: "danger"
      }
    }
  },
  FormLabel: {
    baseStyle: {
      color: "foreground.secondary",
    }
  },
  IconButton: {
    baseStyle: {
      fontSize: "1em",
      _active: {
        transitionDuration: "0s",
      },
      _focus: {
        outline: 'none',
        boxShadow: 'none'
      },
      _focusVisible: {
        outline: 'none',
        boxShadow: 'focus'
      }
    },
    variants: {
      solid: {
        _active: {
          color: 'linkContrast',
          bg: 'link',
        },
      }
    }
  },
  Menu: {
    baseStyle: {
      list: {
        zIndex: 3,
        overflow: 'hidden',
        p: 0,
        bg: 'background.vibrancy',
        borderColor: 'separator.divider',
        backdropFilter: "blur(20px)",
        minWidth: '0',
        width: 'max-content',
        shadow: 'menu'
      },
      groupTitle: {
        color: "foreground.secondary",
        textTransform: "uppercase",
        fontSize: "0.75em",
        fontWeight: "bold",
      },
      item: {
        "&.isActive": {
          bg: "background.attic",
        },
        "svg": {
          flexShrink: 0,
          fontSize: "1.5em",
        },
        _focus: {
          background: "interaction.surface.hover",
        },
        _focusVisible: {
          background: "interaction.surface.hover",
        },
        _hover: {
          background: "interaction.surface.hover",
        },
        _active: {
          background: "interaction.surface.active",
        },
        _expanded: {
          background: "interaction.surface.active",
        },
        // additional selector to catch icons not using the icon prop
        "&& > svg:first-of-type, svg:not(span > svg)": {
          marginInlineEnd: "0.75rem"
        },
      }
    },
    sizes: {
      sm: {
        item: {
          padding: '0.5rem 1rem',
          fontSize: "sm"
        }
      }
    }
  },
  Modal: {
    baseStyle: {
      dialogContainer: {
        WebkitAppRegion: 'no-drag',
        _focus: {
          outline: 'none'
        }
      },
      dialog: {
        shadow: "dialog",
        border: "1px solid",
        borderColor: 'separator.divider',
        bg: 'background.upper'
      }
    }
  },
  Popover: {
    parts: [ "arrow", "content" ],
    baseStyle: {
      content: {
        bg: "background.upper",
        shadow: "popover",
        [ $arrowBg.variable ]: "colors.background.upper",
      }
    }
  },
  Spinner: {
    baseStyle: ({ thickness }) => ({
      flexShrink: 0,
      color: "separator.border",
      borderWidth: thickness,
    }),
    defaultProps: {
      thickness: '1.5px',
    }
  },
  Switch: {
    baseStyle: {
      track: {
        background: "foreground.tertiary",
        _checked: {
          background: "link",
        }
      }
    }
  },
  Table: {
    baseStyle: {
      border: 'separator.divider',
    },
    variants: {
      striped: {
        td: {
          border: 'none',
        },
        thead: {
          th: {
            border: 'none'
          }
        },
        tbody: {
          tr: {
            "&:nth-of-type(odd)": {
              td: {
                background: "background.upper",
                "&:first-of-type": {
                  borderLeftRadius: "lg"
                },
                "&:last-of-type": {
                  borderRightRadius: "lg"
                }
              },
            },
          },
        },
      }
    }
  },
  Tabs: {
    variants: {
      line: {
        tabList: {
          borderBottom: "separator.border"
        },
        tab: {
          color: "link",
          borderBottom: "2px solid",
          borderBottomColor: "separator.border",
          _selected: {
            bg: 'background.attic',
            color: 'foreground.primary',
            borderBottomColor: "foreground.primary"
          },
          _focus: {
            outline: 'none',
            shadow: 'none'
          },
          _focusVisible: {
            shadow: "focus"
          }
        }
      }
    }
  },
  Tooltip: {
    baseStyle: {
      bg: 'background.attic',
      color: 'foreground.primary',
      shadow: 'tooltip',
      px: "8px",
      py: "2px",
      borderRadius: "sm",
      fontWeight: "medium",
      fontSize: "sm",
      boxShadow: "md",
      maxW: "320px",
      zIndex: "tooltip",
    }
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const styles = {
  global: {
    'html, body': {
      bg: 'background.floor',
      color: 'foreground.primary',
      lineHeight: '1.5',
      height: '100vh',
      fontFamily: 'default',
    }
  }
}

const sizes = {
  ...spacing
}

export const theme = extendTheme({ config, radii, fonts, colors, shadows, semanticTokens, spacing, sizes, components, styles });