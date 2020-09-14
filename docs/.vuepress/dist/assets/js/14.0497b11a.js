(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{492:function(e,t,r){"use strict";r.r(t);var s=r(33),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("03.vuepress-theme-vdoing 使用体验")]),e._v(" "),r("p",[e._v("今天在 GitHub 的 trending 上看 vue 项目，其中有个 vuepress-theme-vdoing 项目看起来挺有意思，于是下载下来使用一下。")]),e._v(" "),r("h1",{attrs:{id:"vuepress-theme-vdoing-使用体验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-vdoing-使用体验"}},[e._v("#")]),e._v(" vuepress-theme-vdoing 使用体验")]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("今天在 GitHub 的 trending 上看 vue 项目，其中有个 vuepress-theme-vdoing 项目看起来挺有意思，于是下载下来使用一下。")]),e._v(" "),r("p",[e._v("看页面，感觉像是 GitHub 上的文档。比如 vue 官方文档就是用这种的。之前一直想弄，但没去尝试过。今天借着体验这个项目去了解文档库。")]),e._v(" "),r("p",[e._v("首先先使用这个项目，然后分析这个项目的原理，最后自定义。大致就这三步。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目地址"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("项目介绍：一款简洁高效的 VuePress 知识管理&博客(blog) 主题")]),e._v(" "),r("p",[e._v("[toc]")]),e._v(" "),r("h2",{attrs:{id:"使用过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用过程"}},[e._v("#")]),e._v(" 使用过程")]),e._v(" "),r("p",[e._v("步骤 1：下载。下载 zip，然后解压。2.9M 大小。")]),e._v(" "),r("p",[e._v("步骤 2：初始化。")]),e._v(" "),r("p",[e._v("用 vscode 打开解压后的文件夹；ctrl+`打开 vscode 的终端；输入 npm install。下载有些慢。")]),e._v(" "),r("blockquote",[r("p",[e._v("added 1836 packages from 1406 contributors and audited 1838 packages in 925.376s")])]),e._v(" "),r("p",[e._v("步骤 3：运行。")]),e._v(" "),r("p",[e._v("在终端输入 npm run dev。还是有些慢。不过成功了。")]),e._v(" "),r("blockquote",[r("p",[e._v("success [07:12:57] Build cbe37a finished in 192440 ms!")])]),e._v(" "),r("p",[e._v("最后成功。")]),e._v(" "),r("p",[e._v("体验不错。没出现问题。")]),e._v(" "),r("h2",{attrs:{id:"项目原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目原理"}},[e._v("#")]),e._v(" 项目原理")]),e._v(" "),r("p",[e._v("由图可知。")]),e._v(" "),r("p",[r("img",{attrs:{src:"C:/Users/Administrator/Desktop/work/wsdchongblog/docs/%25E5%258D%259A%25E5%25AE%25A2/vuepress-theme-vdoing%25E4%25BD%25BF%25E7%2594%25A8%25E4%25BD%2593%25E9%25AA%258C.assets/image-20200912074156818.png",alt:"image-20200912074156818"}})]),e._v(" "),r("p",[e._v("这个项目由两个部分组成。一个是主题设置 theme，一个是文档 docs。theme 中是设置文档转换以及主题切换。")]),e._v(" "),r("blockquote",[r("p",[e._v("感触")]),e._v(" "),r("p",[e._v("写开源项目，如果可以在每个代码第一行备注一下，会更有利于下一次开发以及多人开发。")]),e._v(" "),r("p",[e._v("更有利于开源项目的发展。")])]),e._v(" "),r("p",[e._v("主要在 docs 上修改。theme 中了解其中的结构即可。")]),e._v(" "),r("p",[e._v("theme-vdoing 的项目结构原理：index.js 自动生成结构化侧边栏；layouts 的文件夹中的 Layout.vue 组件是图层组件，包括整个网站的所有组件，如首页、导航栏、页面、分类页面、标签页面、归档页面、侧边栏等等；")]),e._v(" "),r("p",[e._v("theme-vdoing 的部分不用多管，默认即可。懂一点最好。")]),e._v(" "),r("p",[r("img",{attrs:{src:"C:/Users/Administrator/Desktop/work/wsdchongblog/docs/%25E5%258D%259A%25E5%25AE%25A2/vuepress-theme-vdoing%25E4%25BD%25BF%25E7%2594%25A8%25E4%25BD%2593%25E9%25AA%258C.assets/image-20200912185500177.png",alt:"image-20200912185500177"}})]),e._v(" "),r("p",[e._v("docs 的项目结构：config/nav.js 放了导航栏，用于路由；index.md 设置首页的图片；dist 文件夹存放着运行后生成的静态网页；剩下的主体就是 markdown 文件了。在开头需要设置标题，剩下就是正常的 markdown 文档笔记了。")]),e._v(" "),r("p",[r("img",{attrs:{src:"C:/Users/Administrator/Desktop/work/wsdchongblog/docs/%25E5%258D%259A%25E5%25AE%25A2/vuepress-theme-vdoing%25E4%25BD%25BF%25E7%2594%25A8%25E4%25BD%2593%25E9%25AA%258C.assets/image-20200912192557647.png",alt:"image-20200912192557647"}})]),e._v(" "),r("p",[e._v("补充：config.js 中设置主题")]),e._v(" "),r("h2",{attrs:{id:"我的使用过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我的使用过程"}},[e._v("#")]),e._v(" 我的使用过程")]),e._v(" "),r("p",[e._v("主要修改 docs 文档。在 config.js 中设置主题等；在 nav.js 中设置路由；在 index.md 中设置首页的图片；在@pages 文件夹中设置分类、标签、归档的页面；在目录页设置文档；然后按规范写文档。")]),e._v(" "),r("p",[e._v("最后用 npm run build 打个包，包在 docs/dist 中。将这个包放到服务器中即可。")]),e._v(" "),r("h2",{attrs:{id:"我对博客网站的认识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我对博客网站的认识"}},[e._v("#")]),e._v(" 我对博客网站的认识")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_42875245/article/details/108545844",target:"_blank",rel:"noopener noreferrer"}},[e._v("我对博客网站的认识"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("博客网站有两种，一种是博客平台，一种是个人博客。用博客平台的好处是功能强大且推广好，缺点是受平台管制；个人博客的主要缺点就是不好搭建，所有衍生出原生和第三方。")]),e._v(" "),r("p",[e._v("原生的个人网站自由度高，但是工作量很大；个人开发一般是套用第三方的网站；同时网站还分静态网站和动态网站，静态网站简单些，但没交互，如评论、账户等功能。")]),e._v(" "),r("p",[e._v("动态博客系统有"),r("a",{attrs:{href:"https://halo.run/",target:"_blank",rel:"noopener noreferrer"}},[e._v("halo"),r("OutboundLink")],1),e._v("；静态博客系统有"),r("a",{attrs:{href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hexo"),r("OutboundLink")],1),e._v("；")]),e._v(" "),r("p",[e._v("动态博客系统的 halo 的原理是：数据库 h2 存储文章，后台使用 springboot；有 markdown 解析器。和原生动态网站的开发一样，需要数据库，后台、前台；")]),e._v(" "),r("p",[e._v("静态博客系统 hexo 的原理是：一个静态站点生成器，将 markdown 转化为静态网页。然后像原生静态网站一样将静态网页放到服务器空间即可。")]),e._v(" "),r("p",[e._v("而 vuepress-theme-vdoing 属于哪一种呢。感觉和 hexo 相关。")]),e._v(" "),r("h2",{attrs:{id:"使用体验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用体验"}},[e._v("#")]),e._v(" 使用体验")]),e._v(" "),r("p",[e._v("还不错。get 一招。以后实践。不过我理想中的博客系统是把前台和后台都设计好，然后我只需要在登录后台写博客发表即可。而不是写好后打个包，再部署一下。这样有点麻烦。")]),e._v(" "),r("p",[e._v("这部分暂时写到这，后续看情况使用这个项目。")]),e._v(" "),r("p",[e._v("更新地址："),r("a",{attrs:{href:"https://github.com/wsdchong/Front-end-study-notes",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("更多内容请关注："),r("a",{attrs:{href:"https://blog.csdn.net/weixin_42875245",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSDN"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://github.com/wsdchong/Front-end-study-notes",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v("、[掘金](")])])}),[],!1,null,null,null);t.default=v.exports}}]);