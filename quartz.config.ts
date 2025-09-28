import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "👨🏻‍💻Daek-You Log",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "SamsungOne",
        body: "SamsungOne",
        code: "Consolas",
      },
      colors: {
        lightMode: {
          light: "#ffffff",                     // [1] 배경색: 순수한 흰색 (Very Bright White)
          lightgray: "#f0f0f0",                 // [2] 보조 배경색 (사이드바, 코드 블록 배경 등): 아주 밝은 회색
          gray: "#c8c8c8",                      // [3] 경계선, 구분선 색상: 밝은 회색
          darkgray: "#4e4e4e",                  // [4] 약한 텍스트, 아이콘 색상 (주 텍스트보다 연하게)
          dark: "#202020",                      // [5] 주 텍스트 색상: 거의 검정에 가까운 진한 색
          secondary: "#1a73e8",                 // [6] 보조 강조색 (링크 등): Google 계열의 청량한 파란색
          tertiary: "#4285f4",                  // [7] 3차 강조색: Google 파란색 (보조와 유사하게 지정)
          highlight: "rgba(26, 115, 232, 0.1)", // [8] 포커스/호버 효과: 강조색의 투명한 버전
          textHighlight: "#fff23688",           // [9] 텍스트 하이라이트 색상은 그대로 유지하거나 취향에 맞게 수정
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
