import * as Joi from "joi"
import { RemarkPluginsSchema } from "@docusaurus/utils-validation"

import { ChangelogPluginOptions } from "./types"

export const DEFAULT_OPTIONS: ChangelogPluginOptions = {
  include: ["*.md", "*.mdx"],
  path: "changelog",
  remarkPlugins: [],
  routeBasePath: "changelog",
  truncateMarker: /<!--\s*(truncate)\s*-->/,
  changelogDescription: "Changelogs",
  changelogListComponent: "@theme/ChangelogListPage",
  changelogPostComponent: "@theme/ChangelogPostPage",
  changelogTitle: "Changelogs",
}

export const PluginOptionSchema = Joi.object({
  include: Joi.array().items(Joi.string()).default(DEFAULT_OPTIONS.include),
  path: Joi.string().default(DEFAULT_OPTIONS.path),
  remarkPlugins: RemarkPluginsSchema.default(DEFAULT_OPTIONS.remarkPlugins),
  routeBasePath: Joi.string().default(DEFAULT_OPTIONS.routeBasePath),
  truncateMarker: Joi.object().default(DEFAULT_OPTIONS.truncateMarker),
  changelogDescription: Joi.string().default(
    DEFAULT_OPTIONS.changelogDescription,
  ),
  changelogListComponent: Joi.string().default(
    DEFAULT_OPTIONS.changelogListComponent,
  ),
  changelogPostComponent: Joi.string().default(
    DEFAULT_OPTIONS.changelogPostComponent,
  ),
  changelogTitle: Joi.string().default(DEFAULT_OPTIONS.changelogTitle),
})
