"use strict";(self.webpackChunkarchipelago_documentation_docsaurus=self.webpackChunkarchipelago_documentation_docsaurus||[]).push([[9177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?o.createElement(g,i(i({ref:t},c),{},{components:a})):o.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={title:"GitHub Workflow",tags:["Documentation","Contributing","Examples"]},i="GitHub Workflow",l={unversionedId:"documentation_workflow",id:"documentation_workflow",title:"GitHub Workflow",description:"1. Find an issue to resolve or create a new issue here.",source:"@site/docs/documentation_workflow.md",sourceDirName:".",slug:"/documentation_workflow",permalink:"/archipelago-documentation-docusaurus/docs/documentation_workflow",draft:!1,editUrl:"https://pr.new/github.com/WWU-MaxBronsema/archipelago-documentation-docusaurus/docs/documentation_workflow.md",tags:[{label:"Documentation",permalink:"/archipelago-documentation-docusaurus/docs/tags/documentation"},{label:"Contributing",permalink:"/archipelago-documentation-docusaurus/docs/tags/contributing"},{label:"Examples",permalink:"/archipelago-documentation-docusaurus/docs/tags/examples"}],version:"current",frontMatter:{title:"GitHub Workflow",tags:["Documentation","Contributing","Examples"]},sidebar:"tutorialSidebar",previous:{title:"Example Documentation Page Title",permalink:"/archipelago-documentation-docusaurus/docs/documentation_template"},next:{title:"Your First Digital Object",permalink:"/archipelago-documentation-docusaurus/docs/firstobject"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"github-workflow"},"GitHub Workflow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find an issue to resolve or create a new issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/esmero/archipelago-documentation/issues"},"here"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/esmero/archipelago-documentation"},"Fork the documentation repo"),". If you're not familiar with forking ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"see this guide"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an issue branch in your forked repo. For example, if the issue you're resolving is ISSUE-100:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b ISSUE-100\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy this template to create a new piece of documentation:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cp docs/documentation_template.md docs/new_documentation.md\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make your changes to the copied markdown file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If this is new documentation add it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"nav")," section of the ",(0,n.kt)("inlineCode",{parentName:"p"},"mkdocs.yml")," configuration file at the root of the repo. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'hl_lines="7"',hl_lines:'"7"'},"nav:\n  - Home: index.md\n  - About Archipelago:\n    - Archipelago's Philosophy & Guiding Principles: ourtake.md\n    - Strawberryfields Forever: strawberryfields.md\n    - Software Services: devops.md\n    - New Documentation: new_documentation.md\n  - Code of Conduct: CODE_OF_CONDUCT.md\n  - Instructions and Guides:\n    - Archipelago-Deployment:\n      - Start: archipelago-deployment-readme.md\n      - Installing Archipelago Drupal 9 on OSX (macOS): archipelago-deployment-osx.md\n      - Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04: archipelago-deployment-ubuntu.md\n      - Installing Archipelago Drupal 9 on Windows 10/11: archipelago-deployment-windows.md\n      - Adding Demo Archipelago Digital Objects (ADOs) to your Repository: archipelago-deployment-democontent.md\n...\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To view the changes locally, first install the Python libraries using the Python package manager pip:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip install mkdocs-material mike git+https://github.com/jldiaz/mkdocs-plugin-tags.git mkdocs-git-revision-date-localized-plugin mkdocs-glightbox\n")),(0,n.kt)("p",{parentName:"li"},"You may need to install Python on your machine. ",(0,n.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Download Python")," or use your favorite operating system package manager such as Homebrew. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now you can build the site locally, e.g. for the documentation using the 1.0.0 branch:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mike deploy 1.0.0\nmike set-default 1.0.0\n")),(0,n.kt)("p",{parentName:"li"},"If you create a new branch to match the issue number as in step 3, you would use your branch instead of 1.0.0. For example, a branch of ISSUE-129."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mike deploy ISSUE-129\nmike set-default ISSUE-129\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the web server:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mike serve\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the results in your browser by going to: ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If everything looks good, you can push to your forked repo issue branch:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "Create new docs with useful information."\ngit push origin ISSUE-100\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork"},"Create a pull request")," and link to the issue by tagging it, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"Resolves #100"),"."))))}m.isMDXComponent=!0}}]);