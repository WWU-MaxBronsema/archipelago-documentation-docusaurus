"use strict";(self.webpackChunkarchipelago_documentation_docsaurus=self.webpackChunkarchipelago_documentation_docsaurus||[]).push([[6680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",tags:["Archipelago-deployment","Drupal 9","Windows","Ubuntu 18.04","Ubuntu 20.04"]},i="Installing Archipelago Drupal 9 on Windows 10/11",l={unversionedId:"archipelago-deployment-windows",id:"archipelago-deployment-windows",title:"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",description:"Prerequisites",source:"@site/docs/archipelago-deployment-windows.md",sourceDirName:".",slug:"/archipelago-deployment-windows",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-windows",draft:!1,editUrl:"https://pr.new/github.com/WWU-MaxBronsema/archipelago-documentation-docusaurus/docs/archipelago-deployment-windows.md",tags:[{label:"Archipelago-deployment",permalink:"/archipelago-documentation-docusaurus/docs/tags/archipelago-deployment"},{label:"Drupal 9",permalink:"/archipelago-documentation-docusaurus/docs/tags/drupal-9"},{label:"Windows",permalink:"/archipelago-documentation-docusaurus/docs/tags/windows"},{label:"Ubuntu 18.04",permalink:"/archipelago-documentation-docusaurus/docs/tags/ubuntu-18-04"},{label:"Ubuntu 20.04",permalink:"/archipelago-documentation-docusaurus/docs/tags/ubuntu-20-04"}],version:"current",frontMatter:{title:"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",tags:["Archipelago-deployment","Drupal 9","Windows","Ubuntu 18.04","Ubuntu 20.04"]},sidebar:"tutorialSidebar",previous:{title:"Archipelago-deployment: upgrading to 1.0.0 (1.0.0-RC3 to 1.0.0)",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-upgradeFromRC3"},next:{title:"Archipelago Community",permalink:"/archipelago-documentation-docusaurus/docs/communityshowcase"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Optional",id:"optional",level:3},{value:"Deployment",id:"deployment",level:2},{value:"Acknowledgment",id:"acknowledgment",level:2},{value:"Need help? Blue Screen? Missed a step? Need a hug?",id:"need-help-blue-screen-missed-a-step-need-a-hug",level:3},{value:"Caring &amp; Coding + Fixing + Testing",id:"caring--coding--fixing--testing",level:2},{value:"License",id:"license",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-archipelago-drupal-9-on-windows-1011"},"Installing Archipelago Drupal 9 on Windows 10/11"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows 11 64-bit: Home or Pro version 21H2 or higher, or Enterprise or Education version 21H2 or higher (see Docker for Windows link below)."),(0,r.kt)("li",{parentName:"ul"},"Windows 10 64-bit: Home or Pro 21H1 (build 19043) or higher, or Enterprise or Education 20H2 (build 19042) or higher (see Docker for Windows link below)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ubuntu.com/wsl"},"Install Ubuntu on WSL 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Install Docker for Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://desktop.github.com/"},"Install Github for Desktop")),(0,r.kt)("li",{parentName:"ul"},"At least 10 Gbytes of free space (to get started)"),(0,r.kt)("li",{parentName:"ul"},"Some basic Unix/Terminal Skills"),(0,r.kt)("li",{parentName:"ul"},"2-4 Gbytes of RAM (4 Recommended)")),(0,r.kt)("h3",{id:"optional"},"Optional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://desktop.github.com/"},"Install Github Desktop"),". Ubuntu comes with Git by default, but for a more full-featured way to work with Github, you can install this application.")),(0,r.kt)("p",null,"Open the Docker Desktop app. The Docker service should start up automatically with a status showing when the service is up and running."),(0,r.kt)("p",null,"Open an Ubuntu Terminal session (type ",(0,r.kt)("inlineCode",{parentName:"p"},"Ubuntu")," in the Windows Start menu)."),(0,r.kt)("p",null,"Bring everything up to date: ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt update && sudo apt upgrade -y")),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-ubuntu#step-1-deployment"},"Follow the steps for deployment in Ubuntu"),"."),(0,r.kt)("h2",{id:"acknowledgment"},"Acknowledgment"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chatnikc"},"Corinne Chatnik")," for documenting these steps!"),(0,r.kt)("h3",{id:"need-help-blue-screen-missed-a-step-need-a-hug"},"Need help? Blue Screen? Missed a step? Need a hug?"),(0,r.kt)("p",null,"If you see any issues or errors or need help with a step, please let us know (ASAP!). You can either open an ",(0,r.kt)("inlineCode",{parentName:"p"},"issue")," in this repository or use the ",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/archipelago-commons"},"Google Group"),". We are here to help."),(0,r.kt)("p",null,"If you like this, let us know!"),(0,r.kt)("h2",{id:"caring--coding--fixing--testing"},"Caring & Coding + Fixing + Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/DiegoPino"},"Diego Pino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/giancarlobi"},"Giancarlo Birello")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alliomeria"},"Allison Lund")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/karomabiles"},"Katie Romabiles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aksm"},"Albert Min"))),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl-3.0.txt"},"GPLv3")))}d.isMDXComponent=!0}}]);