import * as Joi from "joi"
import { RemarkPluginsSchema } from "@docusaurus/utils-validation"

import { NewsLetterPluginOptions } from "./types"

export const DEFAULT_OPTIONS: NewsLetterPluginOptions = {
  include: ["*.md", "*.mdx"],
  path: "newsletter",
  remarkPlugins: [],
  routeBasePath: "newsletter",
  truncateMarker: /<!--\s*(truncate)\s*-->/,
  newsLetterDescription: "NewsLetters",
  newsLetterListComponent: "@theme/NewsLetterListPage",
  newsLetterPostComponent: "@theme/NewsLetterPostPage",
  newsLetterTitle: "NewsLetters",
}

export const PluginOptionSchema = Joi.object({
  include: Joi.array().items(Joi.string()).default(DEFAULT_OPTIONS.include),
  path: Joi.string().default(DEFAULT_OPTIONS.path),
  remarkPlugins: RemarkPluginsSchema.default(DEFAULT_OPTIONS.remarkPlugins),
  routeBasePath: Joi.string().default(DEFAULT_OPTIONS.routeBasePath),
  truncateMarker: Joi.object().default(DEFAULT_OPTIONS.truncateMarker),
  newsLetterDescription: Joi.string().default(
    DEFAULT_OPTIONS.newsLetterDescription,
  ),
  newsLetterListComponent: Joi.string().default(
    DEFAULT_OPTIONS.newsLetterListComponent,
  ),
  newsLetterPostComponent: Joi.string().default(
    DEFAULT_OPTIONS.newsLetterPostComponent,
  ),
  newsLetterTitle: Joi.string().default(DEFAULT_OPTIONS.newsLetterTitle),
})
