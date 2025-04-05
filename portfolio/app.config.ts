export default defineAppConfig({
  ui: {
    colors: {
      primary: "violet",
      secondary: "emerald",
      info: "indigo",
      success: "green",
      warning: "amber",
      error: "red"
    },
    icons: {
      caution: "line-md:alert-circle-twotone-loop",
      copy: "i-lucide-copy",
      copyCheck: "i-lucide-copy-check",
      dark: "line-md:moon-rising-twotone-alt-loop",
      error: "line-md:close-circle-twotone",
      external: "line-md:external-link-rounded",
      eye: "line-md:watch-twotone",
      eyeOff: "line-md:watch-off-twotone",
      file: "line-md:file-document-twotone",
      folder: "i-lucide-folder",
      folderOpen: "i-lucide-folder-open",
      hash: "line-md:hash-small",
      info: "ic:twotone-info",
      light: "line-md:sun-rising-twotone-loop",
      menu: "solar:hamburger-menu-line-duotone",
      panelClose: "material-symbols:left-panel-close-rounded",
      panelOpen: "material-symbols:left-panel-open-rounded",
      success: "line-md:circle-to-confirm-circle-twotone-transition",
      system: "line-md:monitor-twotone",
      tip: "line-md:lightbulb-twotone",
      warning: "line-md:alert-twotone-loop",
      arrowLeft: "line-md:arrow-left-circle-twotone",
      arrowRight: "line-md:arrow-right-circle-twotone",
      check: "line-md:confirm",
      chevronDoubleLeft: "line-md:chevron-small-double-right",
      chevronDoubleRight: "line-md:chevron-small-double-right",
      chevronDown: "line-md:chevron-small-down",
      chevronLeft: "line-md:chevron-small-left",
      chevronRight: "line-md:chevron-small-right",
      chevronUp: "line-md:chevron-small-up",
      close: "line-md:close-circle-twotone",
      ellipsis: "i-lucide-ellipsis",
      loading: "line-md:loading-twotone-loop",
      minus: "line-md:minus",
      plus: "line-md:plus",
      search: "line-md:search-twotone"
    },
    navigationMenu: {
      slots: {
        link: "text-xs xl:text-sm"
      },
      variants: {
        highlightColor: {
          secondary: "text-secondary-500"
        }
      },
      compoundVariants: [
        {
          orientation: "horizontal",
          highlight: true,
          class: {
            link: "after:-bottom-1"
          }
        }
      ],
      defaultVariants: {
        color: "secondary",
        variant: "link",
        highlightColor: "secondary"
      }
    },
    button: {
      compoundVariants: [
        {
          color: "secondary",
          variant: "subtle",
          class:
            "text-secondary-700 dark:text-secondary-500 ring-secondary-600 bg-secondary-600/10 dark:bg-secondary-400/10 hover:bg-secondary-600/20 hover:shadow-sm hover:shadow-secondary-800 dark:hover:shadow-secondary-500"
        }
      ],
      defaultVariants: {
        color: "secondary",
        variant: "subtle"
      }
    },
    select: {
      slots: {
        content: "ring-secondary-700 dark:ring-secondary-600",
        trailingIcon: "group-data-[state=open]:rotate-180 transition-transform duration-250"
      },
      defaultVariants: {
        variant: "none"
      }
    },
    dropdownMenu: {
      slots: {
        content: "max-h-80 border border-secondary-700 dark:border-secondary-600"
      }
    }
  },
  uiPro: {
    dashboardSidebar: {
      slots: {
        header: "justify-center font-cursive lg:text-lg xl:text-xl 2xl:text-2xl"
      }
    },
    // pageColumns: {
    //   base: "xl:columns-4 2xl:columns-5"
    // },
    // pageGrid: {
    //   base: "xl:grid-cols-4 2xl:grid-cols-5"
    // },
    pageCard: {
      slots: {
        root: "shadow-md shadow-primary-700 dark:shadow-primary-500 hover:shadow-lg hover:shadow-primary-700 dark:hover:shadow-primary-500",
        wrapper: "flex flex-col items-start",
        footer: "self-center mt-auto pt-4"
      },
      variants: {
        variant: {
          outline: {
            root: "ring-primary-700, dark:ring-primary-700"
          }
        }
      }
    },
    dashboardToolbar: {
      slots: {
        root: "py-2"
      }
    },
    dashboardPanel: {
      slots: {
        root: "max-h-screen",
        body: "scroll-smooth"
      }
    },
    pageMarquee: {
      slots: {
        root: "[--duration:50s]"
      }
    }
  }
})
