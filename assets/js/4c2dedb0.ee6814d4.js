"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4421],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4450:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={slug:"/AddALangTranslation",title:"Add a lang translation \ud83c\udf10"},u=void 0,s={unversionedId:"Guides/3_5_AddALangTranslation",id:"Guides/3_5_AddALangTranslation",title:"Add a lang translation \ud83c\udf10",description:"The boilerplate includes an i18n feature to store and translate String data.",source:"@site/docs/3_Guides/3_5_AddALangTranslation.md",sourceDirName:"3_Guides",slug:"/AddALangTranslation",permalink:"/react-native-boilerplate/docs/AddALangTranslation",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_5_AddALangTranslation.md",tags:[],version:"current",frontMatter:{slug:"/AddALangTranslation",title:"Add a lang translation \ud83c\udf10"},sidebar:"tutorialSidebar",previous:{title:"Redux store \ud83d\uddc3\ufe0f",permalink:"/react-native-boilerplate/docs/ReduxStore"},next:{title:"Using Flipper \ud83d\udc1b",permalink:"/react-native-boilerplate/docs/UsingFlipper"}},c={},d=[{value:"Add a new language",id:"add-a-new-language",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The boilerplate includes an i18n feature to store and translate String data.\nThe package used is ",(0,o.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18next")," you can use their documentation for not included functionnalities."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"add-a-new-language"},"Add a new language"),(0,o.kt)("p",null,"All languages files are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Translations/resources"),". By default, there is the ",(0,o.kt)("inlineCode",{parentName:"p"},"en.js")," file.\nTo add a new language just ",(0,o.kt)("inlineCode",{parentName:"p"},"cp en.js fr.js")," and export it in : ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Translations/resources/index")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export { default as en } from './en'\nexport { default as fr } from './fr'\n")),(0,o.kt)("p",null,"Now you can translate all keys of the ",(0,o.kt)("inlineCode",{parentName:"p"},"fr.js")," file :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default {\n  welcome: 'Bienvenue sur le React Native Boilerplate de TheCodingMachine',\n  actions: {\n    continue: 'Continuer',\n  },\n  example: {\n    helloUser: 'Je suis un faux utilisateur, mon nom est {{name}}',\n    labels: {\n      userId: \"Entrer un id d'utilisateur\",\n    },\n  },\n}\n")),(0,o.kt)("p",null,"That's it ! Now you can change the language with ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n.changeLanguage('fr')")))}f.isMDXComponent=!0}}]);