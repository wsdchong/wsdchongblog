---
title: 对vuepress的认识
date: 2020-09-14 16:31:27
permalink: /pages/83b384/
sidebar: auto
categories: 
  - 随笔
tags: 
  - 
---
不知道大家有没有发现，我们身边经常有这样的人，他们越是有能力的，越是有知识的，越是低调，越是谦逊，因为他们深知，知道的越多，不知道的也就越多。
<!-- more -->

# 对vuepress的认识

## 前言

还是和昨天写[vuepress-theme-vdoing使用体验](https://blog.csdn.net/weixin_42875245/article/details/108553807)一样。在边尝试[VuePress +Gitee 快速搭建个人博客](https://blog.csdn.net/huaairen/article/details/103133685)边写博客的过程中，引出了我对vuepress的认识，而且越写越多，所以干脆也单独拎出来写一章。我复制了其中的vuepress认识，让这篇博客写得更加连贯。

记录的主体内容有三部分：我接触vuepress的过程、vuepress官网摘要、vuepress-theme-vdoing官网摘要。

[toc]

## 重新认识vuepress

其实我对vuepress项目感兴趣是因为我用过WordPress。看到这个vuepress的名字的时候我就下意识的认为这是一个使用vue框架的CMS。碰巧我不怎么喜欢WordPress，对vue十分有好感。所以昨天就看了看GitHub上的[vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing)。还写了[vuepress-theme-vdoing使用体验](https://blog.csdn.net/weixin_42875245/article/details/108553807)、[我对博客网站的认识——wsdchong](https://blog.csdn.net/weixin_42875245/article/details/108545844)。

今天早上看到[VuePress +Gitee 快速搭建个人博客](https://blog.csdn.net/huaairen/article/details/103133685)，于是打算尝试一下vuepress，在尝试的过程中查找资料，我在CSDN的链接中还找到了vuepress-theme-antdocs和vuepress-creator的作者。我还以为他是vue-theme-vdoing的作者，但是他们的GitHub不同。最后我在[vuepress-theme-vdoing](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)的文档库中发现原来还有个[vuepress](https://vuepress.vuejs.org/zh/)。兜兜转转最后找到了组织。

[vuepress](https://vuepress.vuejs.org/zh/)：vue驱动的静态网站生成器。以markdown为中心的项目结构，以最少的配置帮助你专注写作。

## 使用vuepress的过程

既然可以运行又可以部署，那么就可以尝试修改内容了。

我准备尝试的部分是修改。

首先是预期效果。首先参考三个人的博客：[Evan's blog](https://xugaoyi.com/)、[lingze's blog](https://lingze.xyz/)、[restlessMan](https://huaairen.gitee.io/vuepress-demo/)。

[Evan's blog](https://xugaoyi.com/)：是vuepress-theme-vdoing的作者。

[lingze's blog](https://lingze.xyz/)：是vuepress-theme-vdoing的使用者。内容精简。

[restlessMan](https://huaairen.gitee.io/vuepress-demo/)：是我参考的那篇文章的vuepress博客。

然后是参考文档。一个是vuepress的官方文档，一个是vuepress-theme-vdoing的文档

[vuepress](https://vuepress.vuejs.org/zh/)：源头。官方文档更系统准确。

[vuepress-theme-vdoing](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)：一个好的使用者。个人文档更便于理解思考。

等我理解文档的意思后，归纳总结关注点。

### vuepress理论基础摘要

#### 基础

vuepress的介绍

> - 简洁。以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
> - vue驱动。享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
> - 高性能。VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

vuepress的基本使用

```c
npm install -g vuepress
echo '# hello!' > README.md
vuepress dev
vuepress build
//注意node.js版本>=8.6
```

vuepress的介绍

> VuePress 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)[ ](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)
>
> 每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。这也是每个网站最重要的两点，首先不要卡，然后便于被搜索到。
>
> 一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。这样既节约资源，又响应快。用户体验棒。

vue的工作原理

> 事实上，一个 VuePress 网站是一个由 [Vue](http://vuejs.org/)[ ](http://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router)[ ](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/)[ ](http://webpack.js.org/) 驱动的单页应用。
>
> 在构建时，vuepress会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。

vuepress的优势

> 对比Nuxt：VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。
>
> 对比Hexo：Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串。Markdown 渲染的配置也不是最灵活的。

vuepress的目录结构（docs/.vuepress)

> - `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
> - `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
> - `docs/.vuepress/theme`: 用于存放本地主题。
> - `docs/.vuepress/styles`: 用于存放样式相关的文件。
> - `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
> - `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
> - `docs/.vuepress/public`: 静态资源目录。
> - `docs/.vuepress/templates`: 存储 HTML 模板文件。
> - `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
> - `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
> - `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
> - `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

vuepress的基本配置

> - 配置文件：所有vuepress相关的文件都将放在.vuepress文件夹。一个 VuePress 网站必要的配置文件是 `.vuepress/config.js`
> - 主题配置：一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题，它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 [默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html) 。
> - 应用级别配置：由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 `.vuepress/enhanceApp.js` 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。

vuepress的markdown拓展

> - header anchors：所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 [`markdown.anchor`](https://vuepress.vuejs.org/zh/config/#markdown-anchor) 来配置。
> - 链接：网站内部的链接，将会被转换成 `` 用于 SPA 导航。VuePress 支持重定向到干净链接。外部的链接将会被自动地设置。
> - Front Matter：在markdown开头的三条虚线之间，可以设置预定义变量。如title、lang、description、layout、meta等。

在Markdown中使用vue

> 浏览器的API访问显示
>
> 模块语法
>
> 使用组件
>
> 使用预处理器
>
> 脚本和样式提取
>
> 内置组件

vuepress的多语言支持

> 在 `.vuepress/config.js` 中提供 `locales` 选项中设置

vuepress的部署

> 有许多部署方式。
>
> 1. 文档放置在项目的 `docs` 目录中；
> 2. 使用的是默认的构建输出位置；
> 3. VuePress 以本地依赖的形式被安装到你的项目中
>
> - 在 `docs/.vuepress/config.js` 中设置正确的 `base`。
> - 创建一个如下的 `deploy.sh` 文件

vuepress的进阶内容

> 我暂时省略。
>
> Front Matter：front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。
>
> 永久链接：一个永久链接是一个旨在未来很多年里维持不变的 URL，由此产生一个发生链接失效（link rot[1](https://en.wikipedia.org/wiki/Link_rot)[ ](https://en.wikipedia.org/wiki/Link_rot)）的可能性较小的超链接。
>
> markdown插槽：VuePress 实现了一套针对 Markdown 的内容分发 API。通过这个特性，你可以将你的文档分割成多个片段，以便于在布局组件中灵活组合。
>
> 全局计算属性：在 VuePress 中，内置了一些核心的[计算属性](https://cn.vuejs.org/v2/guide/computed.html#计算属性)[ ](https://cn.vuejs.org/v2/guide/computed.html#计算属性)，以供[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html) 或自定义主题使用。如$site、$page、$frontmatter、$lang、$localePath、$title、$description、$themeConfig

vuepress的配置

> 基本配置：base、title、description、head、host、port、temp、dest、locales、shouldPrefetch、cache；
>
> styling：palette.styl对[默认预设](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl)[ ](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl)的样式进行简单的替换；index.styl中可以添加额外样式。
>
> 主题：theme用于指定主题、themeConfig用于配置主题；
>
> Pluggable：plugins插件
>
> Markdown：anchor、toc、plugins；
>
> 构建流程：postcss、stylus、scss、sass、less、configureWebpack、chainWebpack。
>
> 浏览器兼容性：evergreen

#### 设计理念

> VuePress 1.x 的设计理念主要体现在：插件化、约定大于配置、合理的优先级管理。
>
> 插件化：可以解耦。在过去，当我们遇到一些不太常见的需求时，我们会有一些疑虑：如果我们打算不支持，VuePress  的使用场景也就受到了限制；但如果想要支持它，我们就必须将其写到核心代码库中，并为其单独开设配置的  API。对于维护者来说，除了不利于长久的维护，这有时也会让我们心力交瘁。而解决办法就是插件。
>
> 约定大于配置：VuePress 1.0 开始引入一些约定，以减少用户过多的配置压力。对于这一点，最直观的体现是对[文档目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html)和[主题目录结构](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html#目录结构)的约定。
>
> 合理的优先级管理：主题开发者和普通的文档用户都具有定义全局的 `palette`、`style`、`templates` 和 `plugins` 的能力。通过设计合理的优先级管理使得它们可以协同工作。
>

#### 插件

> 使用插件的目的：使项目尽可能简洁。
>
> 使用插件、开发插件、插件的生命周期、option API和Context API我就不赘述了。主要介绍几个常用的官方插件
>
> [@vuepress/plugin-active-header-links](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-active-header-links)：页面滚动时自动激活侧边栏链接的插件
>
> [back-to-top](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-back-to-top)：顾名思义。回到顶部。
>
> [plugin-blog](https://github.com/vuepressjs/vuepress-plugin-blog)：分类系统让vuepress快速贴文分类、分页功能、客户端API。
>
> [plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-search)：用于headers的搜索插件。
>
> 除了这些还可以根据Plugins API自己开发插件。
>

#### 主题

使用主题

> 使用一个主题和使用一个插件的方式几乎一致。

开发主题

> 首先在根目录创建一个.vuepress/theme目录，然后创建Layout.vue文件。
>
> 获取渲染内容： `.md` 文件渲染的内容，可以作为一个独特的全局组件 `` 来使用
>
> 内容摘抄： markdown 文件中有一个 <!-- more --> 注释，该注释之前的内容会被抓取并暴露在 `$page.excerpt` 属性中。
>
> 目录结构：随着需求的变化，只有一个布局组件 `Layout.vue` 可能还不够，你可能想要定义更多的布局组件用于不同的页面
>
> - `theme/global-components`: 该目录下的组件都会被自动注册为全局组件。想了解更多，请参考 [@vuepress/plugin-register-components](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components)[ ](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components)。
> - `theme/components`: Vue 组件。
> - `theme/layouts`: 布局组件，其中  `Layout.vue` 是必需的。
> - `theme/styles`: 全局的样式和调色板。
> - `theme/templates`: 修改默认的模板文件。
> - `theme/index.js`: 主题文件的入口文件。
> - `theme/enhanceApp.js`: 主题水平的客户端增强文件。
>
> 布局组件
>
> 使用插件
>
> 网站和页面的元数据：`Layout` 组件将会对每一个文档目录下的 `.md` 执行一次，同时，整个网站以及特定页面的元数据将分别暴露为 `this.$site` 和 `this.$page` 属性，它们将会被注入到每一个当前应用的组件中。
>
> 应用配置

主题的配置

> plugins
>
> DevTemplate：dev 模式下使用的 HTML 模板路径，默认模板见 [这里](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html)[ ](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html)
>
> SSRTemplate：build 模式下使用的 HTML 模板路径，默认模板见 [这里](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.ssr.html)[ ](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.ssr.html)。
>
> extend：VuePress 支持一个主题继承于另一个主题。
>
> globalLayout：全局布局组件是负责管理全局布局方案的一个组件

默认主题配置

> 首页：认的主题提供了一个首页（Homepage）的布局 
>
> 导航栏：导航栏可能包含你的页面标题、[搜索框](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#搜索框)、 [导航栏链接](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#导航栏链接)、[多语言切换](https://vuepress.vuejs.org/zh/guide/i18n.html)、[仓库链接](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#git-仓库和编辑链接)，它们均取决于你的配置。
>
> 侧边栏：想要使 侧边栏（Sidebar）生效，需要配置 `themeConfig.sidebar`
>
> 搜索栏：通过 `themeConfig.searchMaxSuggestions` 来调整默认搜索框显示的搜索结果数量
>
> 最后更新时间：可以通过 `themeConfig.lastUpdated` 选项来获取每个文件最后一次 `git` 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
>
> 上/下一篇链接：自动地根据当前页面的侧边栏的顺序来获取。
>
> git仓库和编辑链接
>
> 页面滚动：通过 `themeConfig.smoothScroll` 选项来启用页面滚动效果。

博客主题

> 安装：npm install @vuepress/theme-blog -D
>
> 使用：
>
> ```c
> // .vuepress/config.js
> module.exports = {
>   theme: '@vuepress/blog',
>   themeConfig: {
>     // 请参考文档来查看所有可用的选项。
>   }
> }
> ```

### vuepress基础内容的总结

> 明白vuepress的定位：一个静态网站生成器。优势是简洁、vue驱动、高性能。
>
> 明白vuepress的结构：第一部分是静态网站生成器，另一部分是默认主题docs。
>
> 明白vuepress的设计理念：插件化
>
> 明白vuepress的目录结构docs/.vuepress和基本配置
>
> 明白vuepress的插件和主题

明白vuepress的使用、vuepress主题的使用、vuepress的部署。

```c
//vuepress的使用
npm install -g vuepress
echo '# hello!' > README.md
vuepress dev
vuepress build
//vuepress主题的使用
npm install @vuepress/theme-blog -D
```

```c
// .vuepress/config.js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
  }
}
```

> vuepress的部署
>
> 1. 文档放置在项目的 `docs` 目录中；
> 2. 使用的是默认的构建输出位置；
> 3. VuePress 以本地依赖的形式被安装到你的项目中
>
> - 在 `docs/.vuepress/config.js` 中设置正确的 `base`。
> - 创建一个如下的 `deploy.sh` 文件

学习使用vuepress，可以提高我直接用vue开发网站的效率。

学习vuepress-theme-vdoing，可以提高我配置vuepress主题的效率。

毕竟自己从头开始做一个vue框架的静态网站生成器要花费很大精力，而且不一定做得好；从头设计一个vuepress主题也要花很大精力，并且也不一定做得美观。新手期的时候借用别人的轮子可能开发出更好的产品。

## 认识vuepress-theme-vdoing的摘要

[vuepress-theme-vdoing](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/)

### 基础

vdoing介绍和特性：

> Vdoing是[VuePress](https://vuepress.vuejs.org/zh/)[ ](https://vuepress.vuejs.org/zh/)的一个主题，是在[默认主题](https://vuepress.vuejs.org/zh/theme/option-api.html)[ ](https://vuepress.vuejs.org/zh/theme/option-api.html)基础上做的修改和扩展，很多配置仍然沿用[官方配置](https://vuepress.vuejs.org/zh/config/)[ ](https://vuepress.vuejs.org/zh/config/)。
>
> 特性：结构化（自动生成侧边栏、目录页、索引页、面包屑等，构建一个结构化知识库）、碎片化和个性化（博客功能）

vdoing相比于默认主题，添加的功能内容有：

> 管理学习笔记和技术文档：`自动生成结构化侧边栏`、`自动生成front matter`、`目录页`、`扩展的搜索框插件`、`面包屑`、`快捷翻页按钮` ；
>
> 博客相关： `文章信息栏（作者与创建时间）`、`最近更新栏` 、`博主信息栏`、`页脚版权栏`、`分类功能+分类页`、`标签功能+标签页`、`归档页`、`评论插件`；
>
> 多种颜色模式供用户选择：`跟随系统`、`浅色模式`、`深色模式`、`阅读模式`
>
> 提高搬砖效率的辅助工具： `批量操作front matter工具`
>
> 方便好用的 `Markdown 容器`。

vdoing快速上手

```sh
//安装和启动；
//可以直接看到成品，但是作者的使用痕迹很高，修改不容易。最后使用vdoing主题。然后自己写自己的vuepress。
# clone the project
git clone https://github.com/xugaoyi/vuepress-theme-vdoing.git

# enter the project directory
cd vuepress-theme-vdoing

# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev

//使用vdoing主题
npm install vuepress-theme-vdoing -D

//在.vuepress/config.js中配置使用主题：
/*
// config.js
module.exports = {
  theme: 'vdoing'
}
*/
//修改config.js配置后需要重新启动项目才能生效

//版本更新：
npm update vuepress-theme-vdoing
```

vdoing目录结构

```text
.
├── .github   (可选，GitHub Actions所需文件)
│   ├── workflows
│   │   ├── baiduPush.yml (可选，百度定时自动推送)
│   │   └── ci.yml (可选，自动部署)
├── docs (必须，不要修改文件夹名称)
│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)
│   ├── <结构化目录> 
│   └── index.md (首页)
├── theme-vdoing (可选，本地的vdoing主题)
├── utils  (可选，vdoing主题使用的node工具)
│   ├── modules
│   ├── config.yml (可选，批量操作front matter配置)
│   ├── editFrontmatter.js (可选，批量操作front matter工具)
├── baiduPush.sh (可选，百度推送命令脚本)
├── deploy.sh (可选，部署命令脚本)
│
└── package.json
```

> - `docs` 文件夹名称请不要修改
> - `docs/.vuepress` 用于存放全局的配置、样式、静态资源等，同官方，查看 [详情](https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构)目录结构
> - `docs/@pages` 此文件夹是自动生成的，存放分类页、标签页、归档页对应的`.md`文件，一般不需要改动
> - `docs/_posts` 专门用于存放碎片化博客文章，里面的`.md`文件不需要遵循命名约定，不会生成结构化侧边栏和目录页。
> - `docs/<结构化目录>`  请查看[《构建结构化站点的核心配置和约定》](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/pages/33d574/)。
> - `docs/index.md` 首页
> - `theme-vdoing` 存放在本地的vdoing主题文件，如果你想深度的修改主题，首先要在`docs/.vuepress/config.js`中配置使用的主题指向这个文件。

vdoing遵循“约定优于配置”.

> 构建一个结构化的站点，需要遵循下面这些约定，约定可以为你省去很多配置，轻松拥有一个结构清晰的站点。
>
> 在`config.js`中有如下配置
>
> ```js
> // config.js
> module.exports = {
>   themeConfig: {
>      sidebar: 'structuring' //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义 
>   }
> }
> ```
>
> 在运行开发服务`npm run dev`或打包`npm run build`时主题内部将会按照目录约定自动生成一个结构化的侧边栏、目录页、面包屑等数据。
>
> 在源目录（一般是`docs`）文件夹中，除了`.vuepress`、`@pages`、`_posts`、`index.md 或 README.md`之外的**文件夹**将会为其生成对应的侧边栏。生成的顺序取自序号，名称取自文件夹（文件）名。

vdoing自动生成front matter

> 当你没有给`.md`文件的[front matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)[ ](https://vuepress.vuejs.org/zh/guide/frontmatter.html)指定标题(title)、时间(date)、永久链接(permalink)、分类(categories)、标签(tags)时，在运行开发服务`npm run dev`或打包`npm run build`时将自动为你生成这些数据，你也可以自己手动设置这些数据，当你手动设置之后，相应的数据就不会再自动生成

vdoing的markdown容器

> 提示框容器
>
> 布局容器
>
> 普通卡片列表
>
> 图文卡片列表

### vuepress-theme-vdoing的高级操作

> 批量操作front matter工具：使得博客在build后自动生成front matter；
>
> 自动部署：可以一键部署到GitHub pages和Coding Pages上；用npm run deploy即可一键部署。
>
> 评论模块的搭建：[使用Gitalk实现静态博客无后台评论系统](https://xugaoyi.com/pages/1da0bf9a988eafe5/)。弥补了静态网页不能交互的缺点。
>
> 图床：[GitHub + jsDelivr + TinyPNG+ PicGo 打造稳定快速、高效免费图床](https://xugaoyi.com/pages/a5f73af5185fdf0a/)。GItHub上存图片、jsDelivr免费CDN加速、PicGo做图床、TinyPNG压缩上传的图片。简直是一条龙服务。
>
> 百度收录：[GitHub Actions 定时运行代码：每天定时百度链接推送](https://xugaoyi.com/pages/f44d2f9ad04ab8d3/)。让自己的博客被推广。
>
> 在线编辑：前提是把博客源码上传到github仓库，并配置好 [GitHub Actions](https://github.com/features/actions)[ ](https://github.com/features/actions) 自动部署。配置好之后，每个文章页面底下都会有一个编辑按钮，点击即可跳到github在线编辑，编辑完成后提交就会自动触发GitHub Actions自动部署。

幸运的是这些功能都集成到vdoing中（我猜的，之前不是说这个vdoing主题和默认主题新增了内容）。

### vdoing配置

> 主题配置：category、tag、archive、sidebar等
>
> 首页配置：bannerBg、features、postList
>
> front matter配置：sidebar、article、comment等
>
> 目录页配置
>
> 添加摘要：文章摘要会显示于首页的详细版文章列表中，在编写文章时（`.md`文件中）在合适的位置添加一个``注释。注释前面的内容将会暴露在摘要中。
>
> 修改主题颜色和样式
>
> 评论栏：[vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment)、[vuepress-plugin-vssue](https://vssue.js.org/)[ ](https://vssue.js.org/)

## 总结

看到这差不多了解了vuepress和vuepress-theme-vdoing。接下来我也准备尝试使用vuepress-theme-vdoing。

最后分析一下使用过程。

我原本是写《VuePress+Gitee快速搭建个人博客的尝试》。现在准备把这个收个尾，然后另起炉灶，实现vuepress+coding/GitHub；因为vdoing的官方文档上说用cdoing方便被百度收录。另外自动部署、在线编辑等功能依赖于GitHub Action，所以有必要另外写一篇《vuepress-theme-vdoing使用过程记录》

在《vuepress-theme-vdoing使用过程记录》中，第一步是安装下载vuepress；第二步是部署GitHub Pages和Coding Pages；第三步是使用使用vdoing主题并部署；第四步是实现博客+技术文章；

前三步大概没问题，第四步可能再做修改。

第四步想实现[lingze's blog](https://lingze.xyz/)的效果。

第一个是博客效果（还有分类、标签的模块）

![image-20200913144430537](%E5%AF%B9vuepress%E7%9A%84%E8%AE%A4%E8%AF%86.assets/image-20200913144430537.png)

![image-20200913144516035](https://gitee.com/wsdchong/images/raw/master/imgs/20200913144517.png)

第二个是技术文档效果（知识库）

![image-20200913144251596](https://gitee.com/wsdchong/images/raw/master/imgs/20200913144254.png)

第三个是关于界面（介绍自己、评论gittalk）

![image-20200913145019501](https://gitee.com/wsdchong/images/raw/master/imgs/20200913145021.png)



第四部分是归档和友链



暂时写到这。





更新地址：[GitHub](https://github.com/wsdchong/Front-end-study-notes)

更多内容请关注：[CSDN](https://blog.csdn.net/weixin_42875245)、[GitHub](https://github.com/wsdchong/Front-end-study-notes)、[掘金](https://juejin.im/user/5e7ad7a45188255dfe586c94)