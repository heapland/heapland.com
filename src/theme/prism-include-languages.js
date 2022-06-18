import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment"
import siteConfig from "@generated/docusaurus.config"

const prismIncludeLanguages = (PrismObject) => {
  if (ExecutionEnvironment.canUseDOM) {
    const {
      themeConfig: { prism: { additionalLanguages = [] } = {} },
    } = siteConfig
    window.Prism = PrismObject

    delete window.Prism
  }
}

export default prismIncludeLanguages
