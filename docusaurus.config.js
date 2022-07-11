// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/BloxDoc/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sivertgullberghansen.github.io/BloxDoc", // Usually your GitHub org/user name.
  projectName: "BloxDoc", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve the docs at the site's root
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sivert's Documentation",
        logo: {
          alt: "Site Logo",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
          href: "/",
          target: "_self",
          width: 32,
          height: 32,
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Docs",
          // },
          {
            href: "https://twitter.com/rblxSivert",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://www.roblox.com/users/2301614/profile",
            label: "Roblox Profile",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Roblox Group",
                href: "https://www.roblox.com/groups/10299071/EAST#!/about",
              },
              {
                href: "https://www.roblox.com/users/2301614/profile",
                label: "Roblox Profile",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/rblxSivert",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/rblxSivert",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "DM me on Twitter!",
                href: "https://twitter.com/messages/compose?recipient_id=1483378332192366598&text=I%20have%20a%20question!",
              },
              {
                label: "GitHub",
                href: "https://github.com/SivertGullbergHansen",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/sivertgullberghansen",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sivert Gullberg Hansen. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
