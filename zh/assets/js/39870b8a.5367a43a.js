"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[25025],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),b=a,d=l["".concat(c,".").concat(b)]||l[b]||h[b]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},46810:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return l}});var r=n(87462),a=n(63366),o=n(67294),i=n(3905),u=function(e){var t=(0,o.useState)([]),n=t[0],r=t[1];(0,o.useEffect)((function(){var t,a=null!=(t=e.repo)?t:"apache/incubator-shenyu";n&&0!==n.length||fetch("https://api.github.com/repos/"+a+"/contributors?page=1&per_page=10000").then((function(e){return e.json()})).then((function(e){r(e)}))}));var a="<table>";return n&&Array.isArray(n)&&n.forEach((function(e,t){t%5==0&&(t>0&&(a+="</tr>"),a+="<tr>"),a+='<td>\n                        <a href="'+e.html_url+'" target="_blank">\n                            <img src="'+e.avatar_url+'" height="20" /> \n                            <span style={{ whiteSpace: \'nowrap\' }}>@'+e.login+"</span>\n                        </a>\n                    </td>",t===n.length-1&&(a+="</tr>")})),a+="</table>",o.createElement("div",{dangerouslySetInnerHTML:{__html:a}})},c=["components"],s={title:"\u8d21\u732e\u8005",sidebar_position:8,description:"Apache ShenYu\u8d21\u732e\u8005\u5217\u8868",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},p=void 0,h={unversionedId:"contributors",id:"contributors",isDocsHomePage:!1,title:"\u8d21\u732e\u8005",description:"Apache ShenYu\u8d21\u732e\u8005\u5217\u8868",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/8-contributors.mdx",sourceDirName:".",slug:"/contributors",permalink:"/zh/community/contributors",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/8-contributors.mdx",version:"current",lastUpdatedBy:"hutaishi",lastUpdatedAt:1651927873,formattedLastUpdatedAt:"2022/5/7",sidebarPosition:8,frontMatter:{title:"\u8d21\u732e\u8005",sidebar_position:8,description:"Apache ShenYu\u8d21\u732e\u8005\u5217\u8868",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},sidebar:"community",previous:{title:"\u7b7e\u7f72ICLA\u6307\u5357",permalink:"/zh/community/icla"},next:{title:"\u7528\u6237\u767b\u8bb0",permalink:"/zh/community/user-registration"}},l=[{value:"Apache ShenYu",id:"apache-shenyu",children:[]},{value:"Apache ShenYu Dashboard",id:"apache-shenyu-dashboard",children:[]},{value:"Apache ShenYu Website",id:"apache-shenyu-website",children:[]}],b={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76ee\u524d\u5df2\u7ecf\u6709\u4e0a\u767e\u4f4d\u5c0f\u4f19\u4f34\u4e3aApache ShenYu \u8d21\u732e\u4e86\u6587\u7ae0\u548c\u4ee3\u7801\uff0c\u975e\u5e38\u611f\u8c22\u4ed6\u4eec\uff01"),(0,i.kt)("p",null,"\u60f3\u8981\u53c2\u4e0e\u8d21\u732e\uff0c\u53ef\u4ee5\u76f4\u63a5\u53bb",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/"},"Apache ShenYu"),"\uff0c\u5e76fork\u3002"),(0,i.kt)("h3",{id:"apache-shenyu"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu")),(0,i.kt)(u,{repo:"apache/incubator-shenyu",mdxType:"Contributors"}),(0,i.kt)("h3",{id:"apache-shenyu-dashboard"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-dashboard"},"Apache ShenYu Dashboard")),(0,i.kt)(u,{repo:"apache/incubator-shenyu-dashboard",mdxType:"Contributors"}),(0,i.kt)("h3",{id:"apache-shenyu-website"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-website"},"Apache ShenYu Website")),(0,i.kt)(u,{repo:"apache/incubator-shenyu-website",mdxType:"Contributors"}))}d.isMDXComponent=!0}}]);