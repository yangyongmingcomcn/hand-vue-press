(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{302:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-11.d3304d93.png"},303:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-12.71edc343.png"},304:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-13.a6a3fc56.png"},305:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-14.7a2aa46b.png"},306:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-15.0c003804.png"},307:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-16.ac2dd04b.png"},308:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-17.0c003804.png"},309:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-18.8a07ad3d.png"},310:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-19.f0a75df7.png"},311:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-20.f36b2556.png"},312:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-21.0c0310a2.png"},313:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-22.d95918c9.png"},314:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-23.3864983b.png"},315:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-24.0f35a347.png"},316:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-25.137d837a.png"},317:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-26.b9dd8ebc.png"},318:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-27.2cd0fca8.png"},319:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-28.e0fa90b8.png"},320:function(t,e,o){t.exports=o.p+"assets/img/front-debugging-29.7f5fc5de.png"},346:function(t,e,o){"use strict";o.r(e);var r=o(6),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"二、react-developer-tools插件调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、react-developer-tools插件调试"}},[t._v("#")]),t._v(" 二、React Developer Tools插件调试")]),t._v(" "),e("h2",{attrs:{id:"_1、安装-react-developer-tools-扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装-react-developer-tools-扩展"}},[t._v("#")]),t._v(" 1、安装 React Developer Tools 扩展")]),t._v(" "),e("p",[t._v("下载插件，打开谷歌浏览器的扩展程序管理，把.crx文件拖拽到程序管理里面就可以完成安装，下图为安装完成。")]),t._v(" "),e("p",[t._v("下载地址："),e("a",{attrs:{href:"https://crxdl.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crxdl.com"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:o(302),alt:"front-debugging-1"}})]),t._v(" "),e("h2",{attrs:{id:"_2、验证安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、验证安装"}},[t._v("#")]),t._v(" 2、验证安装")]),t._v(" "),e("p",[t._v("安装完成后会在浏览器右上角的地址栏旁边显示一条成功消息和一个新图标，在一个没有任何 React 组件的页面上时，该图标将显示为灰色。但是，如果您在带有 React 组件的页面上，图标将显示为蓝色和绿色。如果单击该图标，它将表明该应用程序正在运行 React 的生产版本。\n"),e("img",{attrs:{src:o(303),alt:"front-debugging-1"}}),t._v(" "),e("img",{attrs:{src:o(304),alt:"front-debugging-1"}})]),t._v(" "),e("h2",{attrs:{id:"_3、浏览器f12控制台多出两个选项卡-components和profiler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、浏览器f12控制台多出两个选项卡-components和profiler"}},[t._v("#")]),t._v(" 3、浏览器F12控制台多出两个选项卡：Components和Profiler")]),t._v(" "),e("p",[e("img",{attrs:{src:o(305),alt:"front-debugging-1"}}),t._v("\nComponents该组件标签会显示当前阵营组件树，与任何道具，状态，或上下文一起。")]),t._v(" "),e("p",[t._v("该探查器选项卡可以让你记录的互动和测量组件的渲染。由于这是一个生产版本，代码将被"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Minification_(programming)",target:"_blank",rel:"noopener noreferrer"}},[t._v("缩小"),e("OutboundLink")],1),t._v("并且组件将没有描述性名称。")]),t._v(" "),e("p",[t._v("实时并观察当前的 props 和状态，而无需控制台语句或调试器。")]),t._v(" "),e("h2",{attrs:{id:"_4、识别实时组件道具和上下文-小实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、识别实时组件道具和上下文-小实例"}},[t._v("#")]),t._v(" 4、识别实时组件道具和上下文--小实例")]),t._v(" "),e("p",[t._v("分析文本块")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用 React Developer Tools 来探索每个组件的当前状态和 props")])]),t._v(" "),e("li",[e("p",[t._v("使用 React Developer Tools 查看深度嵌套组件中的当前上下文")]),t._v(" "),e("ul",[e("li",[t._v("使用这些工具来识别在状态更改时重新呈现的组件\n"),e("img",{attrs:{src:o(306),alt:"front-debugging-1"}})])]),t._v(" "),e("p",[e("strong",[t._v("实例")]),t._v("：")]),t._v(" "),e("p",[t._v("以下demo确定并报告输入字段文本的字数、字符数和字符频率")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建一个上下文来保存"),e("code",[t._v("<textarea>")]),t._v("元素的值。使用useStateHook捕获数据")]),t._v(" "),e("p",[e("strong",[t._v("开发者工具中的更新值")]),t._v("：Hook 也有一个通用名称State，但这不像上下文那样容易更新。在这种情况下，单击TextContext.ProviderReact Developer Tools 中的 ，将看到value也反映了我们使用状态设置的输入值。")]),t._v(" "),e("p",[t._v("App.js\n"),e("img",{attrs:{src:o(307),alt:"front-debugging-1"}})])]),t._v(" "),e("li",[e("p",[t._v("上下文的更新值")]),t._v(" "),e("p",[t._v("接下来，添加一个名为"),e("code",[t._v("TextInformation")]),t._v(". 该组件将是具有特定数据分析（例如字数）的组件的容器。")]),t._v(" "),e("p",[t._v("组件由三个独立的部分组成："),e("code",[t._v("CharacterCount")]),t._v("，"),e("code",[t._v("WordCount")]),t._v("，和"),e("code",[t._v("CharacterMap")]),t._v("。")]),t._v(" "),e("p",[t._v("该"),e("code",[t._v("TextInformation")]),t._v("组件将使用"),e("code",[t._v("useReducer")]),t._v(" "),e("code",[t._v("Hook 来切换每个组件的显示。")])]),t._v(" "),e("p",[t._v("创建一个"),e("code",[t._v("reducer")]),t._v("函数来切换每个组件的显示值和一个按钮来切换每个组件的"),e("code",[t._v("onClick")]),t._v("动作\n"),e("img",{attrs:{src:o(308),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("(1) CharacterCount：组件内部创建一个使用showprop 并显示null"),e("code",[t._v("if")]),t._v("show为假的函数。\n"),e("img",{attrs:{src:o(309),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("(2) WordCount组件：类似于 的组件CharacterCount，但在显示长度之前使用空格的split方法创建一个单词数组。\n"),e("img",{attrs:{src:o(310),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("(3) CharacterMap组件: 显示特定字符在文本块中的使用频率.需要一个稍微复杂的函数来为每个字母创建频率图。需要遍历每个字符并在出现重复时增加一个值。然后，需要获取该数据并对其进行排序，以便最常见的字母位于列表顶部。\n​\t  "),e("img",{attrs:{src:o(311),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​\t  在输入中输入一些文本，将在 React Developer Tools中组件的"),e("strong",[t._v("hooks")]),t._v("部分下看到更新的值。\n​\t  "),e("img",{attrs:{src:o(312),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​\t  也可以手动更新\n​\t  "),e("img",{attrs:{src:o(313),alt:"front-debugging-1"}})])])])])]),t._v(" "),e("h2",{attrs:{id:"_5、跨交互跟踪组件渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、跨交互跟踪组件渲染"}},[t._v("#")]),t._v(" 5、跨交互跟踪组件渲染")]),t._v(" "),e("p",[t._v("使用 React Developer Tools 分析器来跟踪组件渲染和重新渲染。")]),t._v(" "),e("p",[t._v("浏览应用相关优化指标的火焰图或可视化，并使用这些信息来识别低效组件、减少渲染时间并提高应用速度。")]),t._v(" "),e("p",[t._v("（1）查看组件如何相互更改的一种快速方法是在重新渲染组件时启用突出显示。这将直观地了解组件如何响应不断变化的数据。勾选设置中General的高亮。")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(314),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​\t\t当进行任何更改时，React Developer Tools 将突出显示重新渲染的组件.例如，当更改输入时，每个组件都会重新渲染，因为数据存储在根级别的 Hook 上，\t\t并且每次更改都会重新渲染整个组件树。")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(315),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​\t\t将其与单击其中一个按钮以切换数据时组件重新呈现的方式进行比较,如果单击其中一个按钮，下面的组件"),e("code",[t._v("TextInformation")]),t._v("将重新渲染，但不会重新渲染根\t\t组件,显示重新渲染能快速了解组件之间的关系")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(316),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("（2）设置将勾选高亮设置取消，单击控制台中的"),e("strong",[t._v("Profiler")]),t._v("选项卡，要使用分析器，单击屏幕左侧的蓝色圆圈开始录制，完成后再次单击它，停止录制时，会发现\t\t组件更改的图表，包括每个项目的渲染时间。")]),t._v(" "),e("p",[t._v("​\t\t随意粘贴文本，启动分析器，然后对输入进行一些小的更改。在组件完成重新渲染后停止分析。会有长时间的停顿，因为应用程序正在处理长时间的重新渲\t\t染。")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(317),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​\t\t结束录制时，React Developer Tools 将创建一个火焰图，显示重新渲染的每个组件以及重新渲染每个组件所需的时间更改每次按键都会导致重新渲染，更重\t\t要的是，它显示了每次渲染需要多长时间以及为什么会有很长的延迟。组件"),e("code",[t._v("App")]),t._v("、"),e("code",[t._v("TextContext.Provider")]),t._v("和"),e("code",[t._v("TextInformation")]),t._v("重新渲染大约需要 0.1 毫\t\t秒。但是"),e("code",[t._v("CharacterMap")]),t._v("由于"),e("code",[t._v("itemize")]),t._v("函数中复杂的数据解析，组件每次击键需要大约 1 秒的时间来重新渲染。")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(318),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​\t\tReact Developer Tools 帮助隔离了一个问题："),e("code",[t._v("CharacterMap")]),t._v("组件重新渲染并在任何父组件更改时执行昂贵的计算。")]),t._v(" "),e("p",[t._v("​\t\t解决这个问题，可以使用内置的Reactmemo函数来记忆整个组件。")]),t._v(" "),e("p",[t._v("​\t\t"),e("code",[t._v("memo")]),t._v("从 React导入，然后将整个函数传递给"),e("code",[t._v("memo")]),t._v("函数：")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(319),alt:"front-debugging-1"}})]),t._v(" "),e("p",[t._v("​\t\t切换 时"),e("code",[t._v("WordCount")]),t._v("，组件的更新速度会快得多。这一次，"),e("code",[t._v("CharacterMap")]),t._v("不重新渲染。相反，在 React Developer Tools 中，我们会看到一个灰色矩形，显\t\t示已阻止重新渲染。")]),t._v(" "),e("p",[t._v("​\t\t"),e("img",{attrs:{src:o(320),alt:"front-debugging-1"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);