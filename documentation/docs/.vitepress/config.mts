import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PackSmith",
  description: "PackSmith documentation",
  srcDir: "src",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://ik.imagekit.io/uc8ejfj1j/drop-folder/ps-logo_TIKTP6aGJ.png",
      },
    ],
  ],
  themeConfig: {
    logo: "https://ik.imagekit.io/uc8ejfj1j/drop-folder/ps-logo_TIKTP6aGJ.png",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/quick-start", activeMatch: "/guide/" },
      { text: "1.0.0", link: "" },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        link: "/guide/what-is-packsmith",
        items: [
          { text: "Getting Started", link: "/guide/quick-start" },
          { text: "Configuration", link: "/guide/config" },
        ],
      },
      {
        text: "Utilities",
        collapsed: false,
        link: "/guide/utilities",
        items: [
          {
            text: "Check Utilities",
            link: "/guide/utilities/Check-Utilities",
            collapsed: false,
            items: [
              {
                text: "isArray",
                link: "/guide/utilities/Check-Utilities/isArray",
              },
              {
                text: "isBoolean",
                link: "/guide/utilities/Check-Utilities/isBoolean",
              },
              {
                text: "isEmpty",
                link: "/guide/utilities/Check-Utilities/isEmpty",
              },
              {
                text: "isFunction",
                link: "/guide/utilities/Check-Utilities/isFunction",
              },
              {
                text: "isNull",
                link: "/guide/utilities/Check-Utilities/isNull",
              },
              {
                text: "isNumber",
                link: "/guide/utilities/Check-Utilities/isNumber",
              },
              {
                text: "isObject",
                link: "/guide/utilities/Check-Utilities/isObject",
              },
              {
                text: "isString",
                link: "/guide/utilities/Check-Utilities/isString",
              },
            ],
          },
          {
            text: "Array Utilities",
            link: "/guide/utilities/Array-Utilities",
            collapsed: false,
            items: [
              {
                text: "addUniqueItem",
                link: "/guide/utilities/Array-Utilities/addUniqueItem",
              },
              {
                text: "areArraysEqual",
                link: "/guide/utilities/Array-Utilities/areArraysEqual",
              },
              {
                text: "hasAnyItem",
                link: "/guide/utilities/Array-Utilities/hasAnyItem",
              },
              {
                text: "includesItem",
                link: "/guide/utilities/Array-Utilities/includesItem",
              },
              {
                text: "mergeArrays",
                link: "/guide/utilities/Array-Utilities/mergeArrays",
              },
              {
                text: "removeDuplicates",
                link: "/guide/utilities/Array-Utilities/removeDuplicates",
              },
              {
                text: "removeItem",
                link: "/guide/utilities/Array-Utilities/removeItem",
              },
            ],
          },
          {
            text: "String Utilities",
            link: "/guide/utilities/String-Utilities",
            collapsed: false,
            items: [
              {
                text: "countWords",
                link: "/guide/utilities/String-Utilities/countWords",
              },
              {
                text: "isAnagram",
                link: "/guide/utilities/String-Utilities/isAnagram",
              },
              {
                text: "isPalindrome",
                link: "/guide/utilities/String-Utilities/isPalindrome",
              },
              {
                text: "replaceString",
                link: "/guide/utilities/String-Utilities/replaceString",
              },
              {
                text: "reverseString",
                link: "/guide/utilities/String-Utilities/reverseString",
              },
              {
                text: "truncateString",
                link: "/guide/utilities/String-Utilities/truncateString",
              },
            ],
          },
          {
            text: "Number Utilities",
            link: "/guide/utilities/Number-Utilities",
            collapsed: false,
            items: [
              {
                text: "getNumberType",
                link: "/guide/utilities/Number-Utilities/getNumberType",
              },
              {
                text: "getParity",
                link: "/guide/utilities/Number-Utilities/getParity",
              },
              {
                text: "getSign",
                link: "/guide/utilities/Number-Utilities/getSign",
              },
              {
                text: "isInRange",
                link: "/guide/utilities/Number-Utilities/isInRange",
              },
              {
                text: "shortenNumber",
                link: "/guide/utilities/Number-Utilities/shortenNumber",
              },
            ],
          },
          {
            text: "Date Utilities",
            link: "/guide/utilities/Date-Utilities",
            collapsed: false,
            items: [
              {
                text: "formatDate",
                link: "/guide/utilities/Date-Utilities/formatDate",
              },
              {
                text: "getDateStatus",
                link: "/guide/utilities/Date-Utilities/getDateStatus",
              },
              {
                text: "isInCurrent",
                link: "/guide/utilities/Date-Utilities/isInCurrent",
              },
              {
                text: "isRelativeDay",
                link: "/guide/utilities/Date-Utilities/isRelativeDay",
              },
              {
                text: "isSameTime",
                link: "/guide/utilities/Date-Utilities/isSameTime",
              },
              {
                text: "timeAgo",
                link: "/guide/utilities/Date-Utilities/timeAgo",
              },
            ],
          },
          {
            text: "Math Utilities",
            link: "/guide/utilities/Math-Utilities",
            collapsed: false,
            items: [
              {
                text: "average",
                link: "/guide/utilities/Math-Utilities/average",
              },
              {
                text: "calculate",
                link: "/guide/utilities/Math-Utilities/calculate",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Gazi2050/PackSmith" },
      { icon: "npm", link: "https://www.npmjs.com/package/packsmith" },
    ],
  },
});
