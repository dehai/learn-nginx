(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{168:function(e,t,n){"use strict";n.r(t);var r=n(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"配置图片防盗链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置图片防盗链","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置图片防盗链")]),e._v(" "),n("p",[e._v("防盗链是指当图片不是自己网站打开时返回 403 或者指定图片，是通过请求的来路判断是否是自己的站点来设置响应。")]),e._v(" "),n("h3",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),n("p",[n("code",[e._v("valid_referers none | blocked | server_names | string")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("none")]),e._v("：表示没有来路")]),e._v(" "),n("li",[n("code",[e._v("blocked")]),e._v("：表示有来路")]),e._v(" "),n("li",[n("code",[e._v("server_names")]),e._v("：来路里包含当前域名")]),e._v(" "),n("li",[n("code",[e._v("string")]),e._v("：（忽略端口）\n"),n("ul",[n("li",[e._v("如果是字符串：一个域名验证的规则，"),n("code",[e._v("*")]),e._v(" 表示通配符")]),e._v(" "),n("li",[e._v("如果是以 "),n("code",[e._v("~")]),e._v(" 开头：正则表达式，排除https://或http://开头的字符串")])])])]),e._v(" "),n("p",[e._v("以上参数可以叠加一起使用。")]),e._v(" "),n("h3",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server {\n\n    # 配置所有图片\n    location ~* \\.(gif|jpg|png|bmp)$ {\n        # 验证可以是没有来路、或者有来路时来路匹配xuexb.com、或者匹配当前域名\n        valid_referers none blocked *.xuexb.com server_names;\n\n        # 如果验证不通过则返回403\n        if ($invalid_referer) {\n            return 403;\n        }\n    }\n}\n")])])])])}],!1,null,null,null);t.default=a.exports}}]);