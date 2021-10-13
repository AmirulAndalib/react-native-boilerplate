"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"/ReduxStore",title:"Redux store \ud83d\uddc3\ufe0f"},l=void 0,u={unversionedId:"Guides/3_4_ReduxStore",id:"Guides/3_4_ReduxStore",isDocsHomePage:!1,title:"Redux store \ud83d\uddc3\ufe0f",description:"This boilerplate use Redux-Toolkit",source:"@site/docs/3_Guides/3_4_ReduxStore.md",sourceDirName:"3_Guides",slug:"/ReduxStore",permalink:"/react-native-boilerplate/docs/ReduxStore",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_4_ReduxStore.md",tags:[],version:"current",frontMatter:{slug:"/ReduxStore",title:"Redux store \ud83d\uddc3\ufe0f"},sidebar:"tutorialSidebar",previous:{title:"Splash screen & loading data \ud83d\udcbe",permalink:"/react-native-boilerplate/docs/SplashScreenLoadingData"},next:{title:"Add a lang translation \ud83c\udf10",permalink:"/react-native-boilerplate/docs/AddALangTranslation"}},p=[{value:"How is it used in this boilerplate \u2753",id:"how-is-it-used-in-this-boilerplate-",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This boilerplate use ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/introduction/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"Redux-Toolkit")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/overview"},(0,i.kt)("inlineCode",{parentName:"a"},"RTKQuery")),"\nto deal with business side.\nWe use them because they are often used by the community, very trendy and easy to debug."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/overview"},(0,i.kt)("inlineCode",{parentName:"a"},"RTKQuery"))," is a powerful data fetching and caching tool.\n",(0,i.kt)("strong",{parentName:"p"},"So we using it for asynchronous api calls.")," "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/introduction/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"Redux-Toolkit"))," is intended to be the standard way to write Redux logic.\n",(0,i.kt)("strong",{parentName:"p"},"So we using it for synchronous operations.")),(0,i.kt)("h2",{id:"how-is-it-used-in-this-boilerplate-"},"How is it used in this boilerplate \u2753"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For the RTKQuery side"),", all is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"Services"),".\nYou will find ",(0,i.kt)("inlineCode",{parentName:"p"},"api.js")," file that contain the declaration of the\n",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery"},"fetchBaseQuery"),"\ncustomized with an interceptor\nand the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/api/createApi"},"createApi"),"\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," and empty endpoints."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/Service/api.js"',title:'"src/Service/api.js"'},"    import { Config } from '@/Config'\n    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n    \n    const baseQuery = fetchBaseQuery({ baseUrl: Config.API_URL })\n    \n    const baseQueryWithInterceptor = async (args, api, extraOptions) => {\n      let result = await baseQuery(args, api, extraOptions)\n      if (result.error && result.error.status === 401) {\n        // here you can deal with 401 error\n      }\n      return result\n    }\n    \n    export const api = createApi({\n      baseQuery: baseQueryWithInterceptor,\n      endpoints: () => ({}),\n    })\n")),(0,i.kt)("p",null,"Next to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Services/api.js")," file you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"modules")," folder. Each module\ncorresponds to an entity type and will inject endpoints\ninto the exported ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," const of ",(0,i.kt)("inlineCode",{parentName:"p"},"Services/api.js")),(0,i.kt)("p",null,"For exemple , next the user services : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/Service/modules/users/index.js"',title:'"src/Service/modules/users/index.js"'},"    import { api } from '../../api'\n    import fetchOne from './fetchOne'\n    \n    export const userApi = api.injectEndpoints({\n      endpoints: build => ({\n        fetchOne: fetchOne(build), // Code split of the service api call\n        // You can add endpoints here\n      }),\n      overrideExisting: false,\n    })\n    \n    export const { useLazyFetchOneQuery } = userApi\n    //                    |-- generated query which will be used in Containers\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/Service/modules/users/fetchOne.js"',title:'"src/Service/modules/users/fetchOne.js"'},"    export default build => build.query({\n        query: id => `/users/${id}`,\n    })\n")),(0,i.kt)("p",null,"Next, in your containers it could be use like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState, useEffect } from 'react'\nimport { View, TextInput } from 'react-native'\nimport { useLazyFetchOneQuery } from '@/Services/modules/users' // Import the query\n\nconst ExampleContainer = () => {\n  const [userId, setUserId] = useState('9')\n  \n  const [\n    fetchOne,\n    { data, isSuccess, isLoading, isFetching, error },\n  ] = useLazyFetchOneQuery() // use the query\n\n  useEffect(() => {\n    fetchOne(userId)\n  }, [fetchOne, userId])\n\n  return (\n    <View>\n      <TextInput\n        onChangeText={setUserId}\n        editable={!isLoading}\n        keyboardType={'number-pad'}\n        maxLength={1}\n        value={userId}\n      />\n    </View>\n  )\n}\n\nexport default ExampleContainer\n")),(0,i.kt)("p",null,"Next, the RTKQuery is linked to the redux store in order to make it work and be debuggable with Flipper."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/overview"},"API usage")," for more information"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For the redux-toolkit side"),", we use it to configure all the store and saved the default theme of the application."),(0,i.kt)("p",null,"For example, the storing of the favorite theme of the user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createSlice } from '@reduxjs/toolkit'\n\nconst slice = createSlice({\n  name: 'theme',\n  initialState: { theme: null, darkMode: null },\n  reducers: {\n    changeTheme: (state, { payload: { theme, darkMode } }) => {\n      if (typeof theme !== 'undefined') {\n        state.theme = theme\n      }\n      if (typeof darkMode !== 'undefined') {\n        state.darkMode = darkMode\n      }\n    },\n    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {\n      if (!state.theme) {\n        state.theme = theme\n        state.darkMode = darkMode\n      }\n    },\n  },\n})\n\nexport const { changeTheme, setDefaultTheme } = slice.actions\n//                  |-------------|-- Generated actions which will be used in Containers\n\nexport default slice.reducer\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/usage-guide"},"API usage")," for more information"))))}c.isMDXComponent=!0}}]);