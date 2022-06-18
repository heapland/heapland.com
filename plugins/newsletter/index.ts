import fs from "fs-extra"
import * as Joi from "joi"
import { flatten, take, kebabCase } from "lodash"
import path from "path"
import { Configuration } from "webpack"

import {
  STATIC_DIR_NAME,
  DEFAULT_PLUGIN_ID,
} from "@docusaurus/core/lib/constants"
import { getContentPathList } from "@docusaurus/plugin-content-blog/lib/blogUtils"
import {
  LoadContext,
  ConfigureWebpackUtils,
  Plugin,
  OptionValidationContext,
  ValidationResult,
} from "@docusaurus/types"
import {
  aliasedSitePath,
  docuHash,
  getPluginI18nPath,
  normalizeUrl,
  reportMessage,
} from "@docusaurus/utils"

import { DEFAULT_OPTIONS, PluginOptionSchema } from "./schema"
import {
  ItemsToMetadata,
  NewsLetter,
  NewsLetterContent,
  NewsLetterContentPaths,
  NewsLetterPluginOptions,
} from "./types"
import { generateNewsLetter } from "./utils"

export default function pluginContentNewsLetter(
  context: LoadContext,
  options: NewsLetterPluginOptions,
): Plugin<NewsLetterContent | null> {
  const {
    siteDir,
    siteConfig: { onBrokenMarkdownLinks },
    generatedFilesDir,
    i18n: { currentLocale },
  } = context
  const { truncateMarker } = options

  const contentPaths: NewsLetterContentPaths = {
    contentPath: path.resolve(siteDir, options.path),
    contentPathLocalized: getPluginI18nPath({
      siteDir,
      locale: currentLocale,
      pluginName: "plugin-content-newsLetter",
      pluginId: options.id,
    }),
  }
  const pluginId = options.id ?? DEFAULT_PLUGIN_ID

  const pluginDataDirRoot = path.join(
    generatedFilesDir,
    "plugin-content-newsLetter",
  )
  const dataDir = path.join(pluginDataDirRoot, pluginId)
  const aliasedSource = (source: string) =>
    `~newsLetter/${path.relative(pluginDataDirRoot, source)}`

  let newsLetters: NewsLetter[] = []

  return {
    name: "plugin-content-newsLetter",

    getPathsToWatch() {
      const { include = [] } = options
      return flatten(
        getContentPathList(contentPaths).map((contentPath) => {
          return include.map((pattern) => `${contentPath}/${pattern}`)
        }),
      )
    },

    async loadContent() {
      const { routeBasePath } = options

      newsLetters = await generateNewsLetter(contentPaths, context, options)

      if (!newsLetters || !newsLetters.length) {
        return null
      }

      const {
        siteConfig: { baseUrl = "" },
      } = context
      const permalink = normalizeUrl([baseUrl, routeBasePath])

      return {
        newsLetters,
        newsLetterList: {
          metadata: {
            permalink,
            newsLetterDescription: options.newsLetterDescription,
            newsLetterTitle: options.newsLetterTitle,
          },
          items: newsLetters.map((item) => item.id),
        },
      }
    },

    async contentLoaded({ content, actions }) {
      if (!content) {
        return
      }

      const { newsLetterList, newsLetters } = content
      const { addRoute, createData } = actions
      const { newsLetterListComponent, newsLetterPostComponent } = options
      const itemsToMetadata: ItemsToMetadata = {}

      // Create routes for newsLetters (individual)
      await Promise.all(
        newsLetters.map(async (newsLetter) => {
          const { id, metadata } = newsLetter
          await createData(
            // Note that this created data path must be in sync with
            // metadataPath provided to mdx-loader.
            `${docuHash(metadata.source)}.json`,
            JSON.stringify(metadata, null, 2),
          )

          addRoute({
            path: metadata.permalink,
            component: newsLetterPostComponent,
            exact: true,
            modules: {
              content: metadata.source,
            },
          })

          itemsToMetadata[id] = metadata
        }),
      )

      // Create routes for newsLetters summary
      const { metadata, items } = newsLetterList
      const { permalink } = metadata
      const pageMetadataPath = await createData(
        `${docuHash(permalink)}.json`,
        JSON.stringify(metadata, null, 2),
      )

      addRoute({
        path: permalink,
        component: newsLetterListComponent,
        exact: true,
        modules: {
          items: items.map((id) => {
            // To tell routes.js this is an import and not a nested object to recurse.
            return {
              content: {
                __import: true,
                path: itemsToMetadata[id].source,
                query: {
                  truncated: true,
                },
              },
            }
          }),
          metadata: aliasedSource(pageMetadataPath),
        },
      })
    },

    configureWebpack(
      _config: Configuration,
      isServer: boolean,
      { getJSLoader }: ConfigureWebpackUtils,
    ) {
      const markdownLoaderOptions = {
        siteDir,
        contentPaths,
        truncateMarker,
        newsLetters,
        onBrokenMarkdownLink: (brokenMarkdownLink) => {
          if (onBrokenMarkdownLinks === "ignore") {
            return
          }
          reportMessage(
            `NewsLetter markdown link couldn't be resolved: (${brokenMarkdownLink.link}) in ${brokenMarkdownLink.filePath}`,
            onBrokenMarkdownLinks,
          )
        },
      }

      return {
        resolve: {
          alias: {
            "~newsLetter": pluginDataDirRoot,
          },
        },
        module: {
          rules: [
            {
              test: /(\.mdx?)$/,
              include: getContentPathList(contentPaths),
              use: [
                getJSLoader({ isServer }),
                {
                  loader: require.resolve("@docusaurus/mdx-loader"),
                  options: {
                    remarkPlugins: options.remarkPlugins,
                    staticDir: path.join(siteDir, STATIC_DIR_NAME),
                    metadataPath: (mdxPath: string) => {
                      const aliasedPath = aliasedSitePath(mdxPath, siteDir)
                      return path.join(dataDir, `${docuHash(aliasedPath)}.json`)
                    },
                  },
                },
                {
                  loader: path.resolve(__dirname, "./markdownLoader.js"),
                  options: markdownLoaderOptions,
                },
              ].filter(Boolean),
            },
          ],
        },
      }
    },
  }
}

export function validateOptions({
  validate,
  options,
}: OptionValidationContext<NewsLetterPluginOptions>): ValidationResult<
  NewsLetterPluginOptions
> {
  const validatedOptions = validate(PluginOptionSchema, options)
  return validatedOptions
}
