(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{BKZm:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("rzGZ"),t("q1tI");var a=t("7ljp"),o=t("7oih");t("qKvR");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={},p={_frontmatter:s},l=o.a;function c(e){let{components:n}=e,t=i(e,["components"]);return Object(a.b)(l,r({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Why tooltips and popovers?"),Object(a.b)("p",null,'Both are elements positioned near a "reference" element, and are hidden until\nthey are triggered. They help conserve space by hiding secondary information or\nfunctionality behind a hover or click. They are positioned outside the normal\nflow of the document so when they are triggered, they are overlaid on top of the\nexisting UI without disrupting the flow of content.'),Object(a.b)("p",null,"Tippy.js distinguishes them in the following way:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("strong",{parentName:"li"},"tooltip")," is an element containing simple text content describing a\nparticular element. It's hidden until the user desires more information from\nthe element, e.g. before deciding to click a button."),Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("strong",{parentName:"li"},"popover")," is an interactive HTML tooltip. It can be a dropdown, menu, or\nany other kind of box that pops out from the normal flow of the document. This\ntype of element contains non-vital functionality and can be hidden behind a\nclick or hover to conserve space.")),Object(a.b)("p",null,'Both of these are called a "tippy" when using Tippy.js!'),Object(a.b)("h3",null,"Tippy.js"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 4.5 kB minzip (core)")," (including Popper: 10.5 kB)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note")),Object(a.b)("p",{parentName:"blockquote"},"(core) means the core JS & CSS. If importing more themes, animations, plugins,\nor addons, the size will increase.")),Object(a.b)("p",null,"Tippy is an abstraction over Popper and provides a set of features and defaults\nthat make creating tooltip and popover elements easy."),Object(a.b)("p",null,"But, how does Tippy compare to other solutions?"),Object(a.b)("h3",null,"Comparison with Popper.js"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 6 kB minzip")," (full)"),Object(a.b)("p",null,"Popper.js is a positioning engine, not a tooltip library. Popper's only goal is\nto position an absolutely positioned element (the tooltip) near another element\n(the reference)."),Object(a.b)("p",null,'If you want to build the appearance and behavior of your popper elements from\nscratch, this is a fantastic library. If you want "out of the box" (abstracted)\nbehavior, then using Tippy might be better.'),Object(a.b)("p",null,"Tippy takes advantage of Popper as a dependency, so you can use them together\nwithout incurring additional cost:"),Object(a.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"js","data-index":"0"},Object(a.b)("code",r({parentName:"pre"},{className:"grvsc-code"}),Object(a.b)("span",r({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"import"),Object(a.b)("span",r({parentName:"span"},{className:"mtk1"})," "),Object(a.b)("span",r({parentName:"span"},{className:"mtk20"}),"{"),Object(a.b)("span",r({parentName:"span"},{className:"mtk1"}),"createPopper"),Object(a.b)("span",r({parentName:"span"},{className:"mtk20"}),"}"),Object(a.b)("span",r({parentName:"span"},{className:"mtk1"})," "),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"from"),Object(a.b)("span",r({parentName:"span"},{className:"mtk1"})," "),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"'"),Object(a.b)("span",r({parentName:"span"},{className:"mtk11"}),"@popperjs/core"),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"';")),"\n",Object(a.b)("span",r({parentName:"code"},{className:"grvsc-line"}),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"import"),Object(a.b)("span",r({parentName:"span"},{className:"mtk1"})," tippy "),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"from"),Object(a.b)("span",r({parentName:"span"},{className:"mtk1"})," "),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"'"),Object(a.b)("span",r({parentName:"span"},{className:"mtk11"}),"tippy.js"),Object(a.b)("span",r({parentName:"span"},{className:"mtk5"}),"';")))),Object(a.b)("p",null,"If you're using the CDN, the ",Object(a.b)("inlineCode",{parentName:"p"},"Popper.createPopper()")," constructor will already be\navailable."),Object(a.b)("h3",null,"Comparison with CSS tooltip libraries like Microtip or Balloon.css"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 1 kB minzip")),Object(a.b)("p",null,"CSS tooltips can be tiny in size, but come with some drawbacks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Lack of positioning engine means overflow prevention & flipping are not\npossible"),Object(a.b)("li",{parentName:"ul"},"Interactivity can be complicated or inaccessible"),Object(a.b)("li",{parentName:"ul"},"Using HTML content within them is cumbersome (especially with UI libraries\nlike React), with limited dynamism for updating content or reacting to state"),Object(a.b)("li",{parentName:"ul"},"No dynamic arrow positioning or features like ",Object(a.b)("inlineCode",{parentName:"li"},"followCursor"))),Object(a.b)("h3",null,"Comparison with Tooltipster"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 10 kB minzip")," (including jQuery: 40 kB)"),Object(a.b)("p",null,"Tooltipster is a fantastic library with very similar functionality, but requires\na jQuery dependency, unlike Tippy. To many people these days, this is a\ndeal-breaker! jQuery's minzipped size is about 30 KB, and Tooltipster including\nCSS is about 10 KB. To people using frameworks like React, Vue, or Angular, it\ncan be hard to deal with such a large dependency."),Object(a.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n  }\n  \n  .grvsc-code {\n    display: inline-block;\n    min-width: 100%;\n  }\n  \n  .grvsc-line {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-line-highlighted {\n    background-color: var(--grvsc-line-highlighted-background-color, transparent);\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, transparent);\n  }\n  \n  .moonlight-ii {\n    background-color: #222436;\n    color: #c8d3f5;\n  }\n  .moonlight-ii .mtk5 { color: #86E1FC; }\n  .moonlight-ii .mtk1 { color: #C8D3F5; }\n  .moonlight-ii .mtk20 { color: #B4C2F0; }\n  .moonlight-ii .mtk11 { color: #C3E88D; }\n"))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-motivation-mdx-39d9a1b292139731a755.js.map