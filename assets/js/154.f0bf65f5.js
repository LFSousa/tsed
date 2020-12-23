(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{595:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"handlercontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlercontext"}},[s._v("#")]),s._v(" HandlerContext "),a("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { HandlerContext } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.17.5/packages/common/src/platform/domain/HandlerContext.ts#L0-L0"}},[s._v("/packages/common/src/platform/domain/HandlerContext.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" HandlerContext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" HandlerContextStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("HandlerMetadata")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    $ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("PlatformContext")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> $ctx<span class="token punctuation">,</span> err<span class="token punctuation">,</span> metadata<span class="token punctuation">,</span> args <span class="token punctuation">}</span><span class="token punctuation">:</span> HandlerContextOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">injector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">;</span>\nget <span class="token function">container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>"@tsed/di"<span class="token punctuation">)</span>.<a href="/api/di/class/LocalsContainer.html"><span class="token">LocalsContainer</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\nget <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> TsED.<a href="/api/common/mvc/decorators/params/Request.html"><span class="token">Request</span></a><span class="token punctuation">;</span>\nget <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> TsED.<a href="/api/common/mvc/decorators/params/Response.html"><span class="token">Response</span></a><span class="token punctuation">;</span>\nget <span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * Return the original request instance.\n */\ngetRequest&lt;T<span class="token punctuation"> = </span><span class="token keyword">any</span>&gt;<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">;</span>\n/**\n * Return the original response instance.\n */\ngetResponse&lt;T<span class="token punctuation"> = </span><span class="token keyword">any</span>&gt;<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">;</span>\n/**\n *\n */\n<span class="token function">callHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n<span class="token function">reject</span><span class="token punctuation">(</span>er<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">resolve</span><span class="token punctuation">(</span>data?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">next</span><span class="token punctuation">(</span>error?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">handle</span><span class="token punctuation">(</span>process<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" HandlerContextStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("HandlerMetadata")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("$ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("PlatformContext")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("injector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v('"@tsed/di"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),a("a",{pre:!0,attrs:{href:"/api/di/class/LocalsContainer.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("LocalsContainer")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TsED."),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Request.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Request")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TsED."),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Response")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isDone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("getRequest<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the original request instance.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("getResponse<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Return the original response instance.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("er"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);