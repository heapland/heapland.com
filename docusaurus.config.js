const visit = require("unist-util-visit")
const ssrTemplate = require("./src/internals/ssr.template")

const githubOrgUrl = "https://github.com/heapland/heapland"
const domain = "heapland.com"

const customFields = {
  copyright: `Copyright © ${new Date().getFullYear()} Gigahex LLP`,
  crunchbaseUrl: "https://www.crunchbase.com/organization/heapland",
  description: "A lightweight data platform built with Apache Spark and Kafka",
  dockerUrl: "https://hub.docker.com/u/heapland",
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}`,
  helmVersion: "0.3.0",
  linkedInUrl: "https://www.linkedin.com/company/heapland/",
  oneLiner: "Unified interface for all infrastructure services",
  slackUrl: `https://join.slack.com/t/gigahexcomm/shared_invite/zt-s7ow0mw5-egYmATa4QqU8TqAFWbK~4A`,

  twitterUrl: "https://twitter.com/HeaplandHQ",
  version: "1.0.0",
  videosUrl: "https://www.youtube.com/channel/UChqKEmOyiD9c6QFx2mjKwiA",
}

function variable() {
  const RE_VAR = /{@([\w-_]+)@}/g
  const getVariable = (full, partial) =>
    partial ? customFields[partial] : full

  function textVisitor(node) {
    node.value = node.value.replace(RE_VAR, getVariable)
  }

  function linkVisitor(node) {
    node.url = node.url.replace(RE_VAR, getVariable)

    if (node.title) {
      node.title = node.title.replace(RE_VAR, getVariable)
    }
  }

  function transformer(ast) {
    visit(ast, "text", textVisitor)
    visit(ast, "code", textVisitor)
    visit(ast, "link", linkVisitor)
  }

  return transformer
}

const config = {
  title: "Gigahex - Open Source Data Infrastructure Platform",
  tagline:
    "Install and manage Open source Data Infrastructure, for faster development and testing.",
  url: `https://${customFields.domain}`,
  baseUrl: "/",
  baseUrlIssueBanner: false,
  favicon: "/img/favicon.ico",
  organizationName: "Gigahex",
  projectName: "gigahex",
  customFields,
  onBrokenLinks: "warn",
  plugins: [
    require.resolve("./plugins/webpack-ts/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    [
      require.resolve("./plugins/tutorial/compiled/index"),
      {
        remarkPlugins: [variable],
      },
    ],
    [
      require.resolve("./plugins/changelog/compiled/index"),
      {
        remarkPlugins: [variable],
      },
    ],
    [
      require.resolve("./plugins/newsletter/compiled/index"),
      {
        remarkPlugins: [variable],
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#d14671",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "github-star",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: "/img/brand-og.png",
    gtag: {
      trackingID: "UA-130638312-1",
      anonymizeIP: true,
    },
    prism: {
      additionalLanguages: ["java", "scala", "python"],
      theme: require("prism-react-renderer/themes/dracula"),
    },

    navbar: {
      title: " ",
      logo: {
        alt: "Gigahex",
        src: "/img/navbar/gigahex.png",
      },
      items: [
        {
          label: "Tutorials",
          position: "left",
          to: "/tutorial/",
        },

        {
          label: "Changelog",
          position: "left",
          to: "https://github.com/GigahexHQ/gigahex/releases",
        },

        {
          label: "About Us",
          position: "left",
          to: "/about/",
        },
        {
          label: "Documentation",
          activeBasePath: "docs",
          position: "left",
          to: "docs/",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Gigahex",
          items: [
            {
              label: "About Us",
              to: "/about/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: customFields.githubUrl,
            },
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Changelog",
              to: "https://github.com/GigahexHQ/gigahex/releases",
            },
            {
              label: "Tutorials",
              to: "/tutorial/",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [variable],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          remarkPlugins: [variable],
          feedOptions: {
            type: "all",
            copyright: customFields.copyright,
          },
          showReadingTime: true,
        },
        sitemap: {
          // Removed: https://github.com/ekalinin/sitemap.js/blob/master/CHANGELOG.md#50-breaking-changes
          // cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.7,
          trailingSlash: true,
        },
        theme: {
          customCss: require.resolve("./src/css/_global.css"),
        },
      },
    ],
  ],
}

module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
