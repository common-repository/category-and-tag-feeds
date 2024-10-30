(()=>{"use strict";var e,t={219:(e,t,a)=>{const r=window.wp.i18n,o=window.wp.blocks,n=window.React,s=window.wp.components,l=window.wp.blockEditor,i=window.wp.serverSideRender;var d=a.n(i);const{useSelect:c}=wp.data;(0,o.registerBlockType)("lwcf/tags",{title:(0,r.__)("List of tag-feeds","category-and-tag-feeds"),description:(0,r.__)("Provides a Gutenberg-Block to show list of public available feeds of tags.","category-and-tag-feeds"),example:{attributes:{mode:"preview"}},attributes:{rssType:{type:"array",default:"rss"}},edit:function(e){(0,wp.data.dispatch)("core").addEntities([{name:"rssTypes",kind:"lwcf/v1",baseURL:"/lwcf/v1/rssTypes",key:"value"}]);let t=c((e=>e("core").getEntityRecords("lwcf/v1","rssTypes",{},[])||null));return(0,n.createElement)("div",{...(0,l.useBlockProps)()},(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(s.PanelBody,{title:(0,r.__)("Settings","category-and-tag-feeds")},(0,n.createElement)(s.SelectControl,{label:(0,r.__)("Choose feed-type to show","category-and-tag-feeds"),value:e.attributes.rssType,options:t,onChange:t=>((e,t)=>{t.setAttributes({rssType:e})})(t,e)}))),(0,n.createElement)(d(),{block:"lwcf/tags",attributes:e.attributes,httpMethod:"POST",EmptyResponsePlaceholder:function(){return(0,n.createElement)(s.Placeholder,{icon:"list-view",label:(0,r.__)("Hint","category-and-tag-feeds")},(0,r.__)("Actually no tag is enabled for public view. Please enable them through the following link:","category-and-tag-feeds"),(0,n.createElement)("a",{href:"edit-tags.php?taxonomy=post_tag",target:"_blank"},(0,r.__)("Go to tag-list","category-and-tag-feeds")))}}))},save:function(e){return null}})}},a={};function r(e){var o=a[e];if(void 0!==o)return o.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,a,o,n)=>{if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,i=0;i<a.length;i++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(l=!1,n<s&&(s=n));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,s=a[0],l=a[1],i=a[2],d=0;if(s.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(i)var c=i(r)}for(t&&t(a);d<s.length;d++)n=s[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self.webpackChunk_category_and_tag_feeds_category_and_tag_feeds=self.webpackChunk_category_and_tag_feeds_category_and_tag_feeds||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=r.O(void 0,[350],(()=>r(219)));o=r.O(o)})();