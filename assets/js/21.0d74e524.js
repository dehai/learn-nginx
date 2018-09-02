(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{186:function(e,r,a){"use strict";a.r(r);var n=a(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误","aria-hidden":"true"}},[e._v("#")]),e._v(" 常见错误")]),e._v(" "),a("h3",{attrs:{id:"配置不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置不生效","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置不生效")]),e._v(" "),a("p",[e._v("更新配置后使用 "),a("code",[e._v("[sudo] /your/path/nginx -s reload")]),e._v(" 热重载服务。")]),e._v(" "),a("h3",{attrs:{id:"nginx-emerg-getpwnam-nginx-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-getpwnam-nginx-failed","aria-hidden":"true"}},[e._v("#")]),e._v(' nginx: [emerg] getpwnam("nginx") failed')]),e._v(" "),a("p",[e._v("表示该用户 "),a("code",[e._v("nginx")]),e._v(" 不存在， 解决方法:")]),e._v(" "),a("ol",[a("li",[e._v("在 "),a("code",[e._v("nginx.conf")]),e._v(" 里添加 "),a("code",[e._v("user nobody;")])]),e._v(" "),a("li",[e._v("创建用户和用户对应的分组")])]),e._v(" "),a("h3",{attrs:{id:"nginx-emerg-getgrnam-xiaowu-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-getgrnam-xiaowu-failed","aria-hidden":"true"}},[e._v("#")]),e._v(' nginx: [emerg] getgrnam("xiaowu") failed')]),e._v(" "),a("p",[e._v("表示用户分组不存在，解决方法:")]),e._v(" "),a("ol",[a("li",[e._v("在 "),a("code",[e._v("nginx.conf")]),e._v(" 里添加 "),a("code",[e._v("user nobody;")])]),e._v(" "),a("li",[e._v("创建用户对应的分组")])]),e._v(" "),a("h3",{attrs:{id:"nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied","aria-hidden":"true"}},[e._v("#")]),e._v(' nginx: [alert] could not open error log file: open() "/logs/error.log" failed (13: Permission denied)')]),e._v(" "),a("p",[e._v("启动 Nginx 的用户权限不够导致无法写入日志文件，常见于非 "),a("code",[e._v("root")]),e._v(" 用户启动报错。")]),e._v(" "),a("h3",{attrs:{id:"nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use","aria-hidden":"true"}},[e._v("#")]),e._v(" nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)")]),e._v(" "),a("p",[e._v("80端口被占用启动失败，修改端口或者杀死占用者再启动即可。")]),e._v(" "),a("h3",{attrs:{id:"nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory","aria-hidden":"true"}},[e._v("#")]),e._v(' nginx: [error] open() "nginx.pid" failed (2: No such file or directory)')]),e._v(" "),a("p",[e._v("pid 进程 id 文件不存在，可能文件被删除或者已经停止，在停止 Nginx 时会使用该进程id，如果不存在将失败，可以手动 kill 掉。")]),e._v(" "),a("h3",{attrs:{id:"nginx-emerg-unknown-realpath-roots-xxx-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-unknown-realpath-roots-xxx-variable","aria-hidden":"true"}},[e._v("#")]),e._v(' nginx: [emerg] unknown "realpath_roots_xxx" variable')]),e._v(" "),a("p",[e._v("变量 "),a("code",[e._v("$realpath_roots_xxx")]),e._v(" 不存在")]),e._v(" "),a("h3",{attrs:{id:"nginx-emerg-add-header-directive-is-not-allowed-here-in-xx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-add-header-directive-is-not-allowed-here-in-xx","aria-hidden":"true"}},[e._v("#")]),e._v(' nginx: [emerg] "add_header" directive is not allowed here in xx')]),e._v(" "),a("p",[a("code",[e._v("add_header")]),e._v(" 指令不能直接在 "),a("code",[e._v("if")]),e._v(" 判断内，可以在 "),a("code",[e._v("http")]),e._v("、"),a("code",[e._v("server")]),e._v("、"),a("code",[e._v("server.location")]),e._v("、"),a("code",[e._v("server.location.if")]),e._v(" 下。")])])}],!1,null,null,null);r.default=i.exports}}]);