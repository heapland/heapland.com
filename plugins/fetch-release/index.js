const nodeFetch = require("node-fetch")

module.exports = (context) => ({
  name: "fetch-release",
  async loadContent() {
    const response = await nodeFetch(
      `https://api.github.com/repos/gigahexhq/gigahex.com/releases/tags/${context.siteConfig.customFields.version}`,
    )

    const data = await response.json()

    return data
  },
  async contentLoaded({ content, actions }) {
    const { setGlobalData } = actions
    setGlobalData({ release: content })
  },
})
