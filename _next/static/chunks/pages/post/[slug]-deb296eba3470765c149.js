(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{688:function(e,t,r){"use strict";var n=r(9008),s=r(2218),a=r(5893);t.Z=function(e){var t=e.title,r=e.description,i=e.path,c=e.image,o=e.isBlogTitleDisabled,l=e.noindex,u=e.keywords,d=o?t||s.yU:"".concat(s.yU).concat(t?" | ".concat(t):"");return(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:d}),l&&(0,a.jsx)("meta",{name:"robots",content:"noindex"}),r&&(0,a.jsx)("meta",{name:"description",content:r}),u&&(0,a.jsx)("meta",{name:"keywords",content:u}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),i&&(0,a.jsx)("meta",{property:"og:url",content:"".concat(s.Ql).concat(i)}),(0,a.jsx)("meta",{property:"og:title",content:d}),r&&(0,a.jsx)("meta",{property:"og:description",content:r}),c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:image",content:c}),(0,a.jsx)("link",{rel:"preload",as:"image",href:c})]})]})}},4588:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(2218),s=r(1664),a=r(1163),i=r(4184),c=r.n(i),o=(r(809),r(9152)),l=r(6435);r(1216),r(2854),(0,l.l)().use(o.Z,{fragment:!0});var u=r(5893),d=function(e){var t,r=e.children,n=e.href,i=(0,a.useRouter)(),o=(null===(t=null===i||void 0===i?void 0:i.asPath)||void 0===t?void 0:t.split(/[?#]/)[0])===n;return(0,u.jsx)(s.default,{href:n,children:(0,u.jsx)("a",{className:c()("hover:text-purple-500",{"text-purple-500":o}),children:r})})},m=function(){return(0,u.jsxs)("header",{className:"mt-4 sm:mt-6 flex flex-row items-center",children:[(0,u.jsx)("div",{className:"mr-auto",children:(0,u.jsx)(s.default,{href:"/",children:(0,u.jsx)("a",{className:"text-2xl font-semibold font-mono hover:text-purple-500",children:n.yU})})}),(0,u.jsxs)("nav",{className:"flex flex-row items-center space-x-4",children:[(0,u.jsx)(d,{href:"/about",children:"About"}),(0,u.jsx)(d,{href:"/archive",children:"Archive"}),(0,u.jsx)(d,{href:"/tags",children:"Tags"})]})]})},x=function(e){var t=e.children;return(0,u.jsxs)("div",{className:"container mx-auto px-4 flex flex-col min-h-screen",children:[(0,u.jsx)(m,{}),(0,u.jsx)("main",{className:"py-10 flex-grow",children:t}),(0,u.jsxs)("footer",{className:"mb-4 sm:mb-6 text-center text-gray-700",children:["Copyright \xa9 2021 ",n.x1]})]})}},3627:function(e,t,r){"use strict";var n=r(1664),s=r(5893);t.Z=function(e){var t=e.name,r=e.color,a=e.count;return(0,s.jsx)(n.default,{href:{pathname:"/tag/[tag]",query:{tag:encodeURIComponent(t)}},prefetch:!1,children:(0,s.jsxs)("a",{className:"inline-flex items-center text-sm leading-4 rounded-full px-4 py-1.5 text-".concat(r,"-500 bg-").concat(r,"-100 hover:text-").concat(r,"-700 hover:bg-").concat(r,"-200"),children:[(0,s.jsx)("span",{children:t}),a&&(0,s.jsxs)("span",{className:"ml-1",children:["(",a,")"]})]})})}},8003:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w},default:function(){return N}});var n=r(4298),s=r(688),a=r(2809),i=r(4588),c=r(7294),o=r(4184),l=r.n(o),u=r(2218),d=r(5893),m=c.useLayoutEffect,x=(0,c.memo)((function(){var e=(0,c.useRef)(null),t=(0,c.useState)(!1),r=t[0],n=t[1];return m((function(){var t=e.current;if(t){var r=new MutationObserver((function(e){n(e.length>1)}));r.observe(t,{childList:!0});var s=document.createElement("script");return s.setAttribute("src","https://utteranc.es/client.js"),s.setAttribute("repo",u.TH),s.setAttribute("issue-term","pathname"),s.setAttribute("label","comment"),s.setAttribute("theme","github-light"),s.setAttribute("crossorigin","anonymous"),s.setAttribute("async","true"),t.appendChild(s),function(){var e;null===(e=t.querySelector(".utterances"))||void 0===e||e.remove(),r.disconnect()}}}),[]),(0,d.jsx)("div",{ref:e,className:"mt-10 relative",style:{minHeight:269},children:(0,d.jsxs)("div",{className:l()("animate-pulse absolute w-full box-border",{hidden:r}),style:{paddingLeft:4,paddingRight:4},children:[(0,d.jsx)("div",{className:"h-5 rounded bg-gray-200",style:{marginLeft:62,marginTop:16,marginBottom:16}}),(0,d.jsxs)("div",{className:"flex w-full",children:[(0,d.jsx)("div",{className:"flex-shrink-0 rounded bg-gray-200",style:{width:44,height:44,marginRight:16}}),(0,d.jsx)("div",{className:"flex-grow rounded bg-gray-200",style:{height:196}})]})]})})}));x.displayName="Comments";var h=x,f=r(1384),p=r(5935),j=r(3627),g=function(e){var t=e.preview,r=e.title,n=e.date,s=e.tags,a=e.content;return(0,d.jsxs)("article",{children:[(0,d.jsxs)("header",{className:"text-center mt-10 mb-20",children:[t&&(0,d.jsx)("div",{className:"w-full max-w-screen-lg mx-auto mb-10",children:(0,d.jsx)("img",{src:t,alt:"".concat(r," Preview")})}),(0,d.jsx)("h1",{className:"text-3xl font-semibold",children:r}),(0,d.jsx)("div",{className:"text-gray-500 mt-4",children:(0,f.Z)(new Date(n),"PP")}),s&&(0,d.jsx)("div",{className:"flex flex-row flex-wrap justify-center space-x-3 mt-4",children:s.map((function(e){return(0,d.jsx)(j.Z,{name:e,color:"purple"},e)}))})]}),(0,d.jsx)("div",{className:"markdown",children:(0,p.ZP)(a)})]})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.postDetail;return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(g,b({},t)),(0,d.jsx)(h,{})]})},w=!0,N=function(e){var t,r=e.postDetail;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{title:r.title,description:r.excerpt,path:"/post/".concat(r.slug),image:r.preview,keywords:null===(t=r.tags)||void 0===t?void 0:t.join(","),isBlogTitleDisabled:!0}),(0,d.jsx)(y,{postDetail:r}),(0,d.jsx)(n.default,{src:"https://platform.twitter.com/widgets.js",async:!0,charSet:"utf-8",strategy:"lazyOnload"})]})}},8744:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return r(8003)}])}},function(e){e.O(0,[543,384,935,774,888,179],(function(){return t=8744,e(e.s=t);var t}));var t=e.O();_N_E=t}]);