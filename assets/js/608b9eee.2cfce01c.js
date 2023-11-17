"use strict";(self.webpackChunkarchipelago_documentation_docsaurus=self.webpackChunkarchipelago_documentation_docsaurus||[]).push([[8670],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return t?o.createElement(h,i(i({ref:n},m),{},{components:t})):o.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const r={title:"Additional Documentation Features",tags:["Documentation","Contributing","Examples"]},i="Additional Documentation Features",l={unversionedId:"documentation_features",id:"documentation_features",title:"Additional Documentation Features",description:"Below are some examples of features that are currently in use on the site. To explore more visit the Material for MkDocs documentation.",source:"@site/docs/documentation_features.md",sourceDirName:".",slug:"/documentation_features",permalink:"/archipelago-documentation-docusaurus/docs/documentation_features",draft:!1,editUrl:"https://pr.new/github.com/WWU-MaxBronsema/archipelago-documentation-docusaurus/docs/documentation_features.md",tags:[{label:"Documentation",permalink:"/archipelago-documentation-docusaurus/docs/tags/documentation"},{label:"Contributing",permalink:"/archipelago-documentation-docusaurus/docs/tags/contributing"},{label:"Examples",permalink:"/archipelago-documentation-docusaurus/docs/tags/examples"}],version:"current",frontMatter:{title:"Additional Documentation Features",tags:["Documentation","Contributing","Examples"]},sidebar:"tutorialSidebar",previous:{title:"About This Documentation",permalink:"/archipelago-documentation-docusaurus/docs/documentation_about"},next:{title:"Documentation Technical Details",permalink:"/archipelago-documentation-docusaurus/docs/documentation_technical"}},c={},s=[{value:"Examples",id:"examples",level:2},{value:"Images",id:"images",level:3},{value:"Admonitions",id:"admonitions",level:3},{value:"Code blocks",id:"code-blocks",level:3},{value:"Quirks",id:"quirks",level:3}],m={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"additional-documentation-features"},"Additional Documentation Features"),(0,a.kt)("p",null,"Below are some examples of features that are currently in use on the site. To explore more visit the ",(0,a.kt)("a",{parentName:"p",href:"https://squidfunk.github.io/mkdocs-material/reference"},"Material for MkDocs documentation"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"images"},"Images"),(0,a.kt)("p",null,"Images are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/images")," folder. You can add new ones there and link to them by relative path. For example, if you added ",(0,a.kt)("inlineCode",{parentName:"p"},"strawberries_color.png"),", you would embed it like so:"),(0,a.kt)("p",null,'!!! example "Image"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=== "Markup"\n\n    ```markdown\n    ![New Documentation Image](images/strawberries_color.png)\n    ```\n\n=== "Result"\n\n    ![New Documentation Image](images/strawberries_color.png)\n')),(0,a.kt)("h3",{id:"admonitions"},"Admonitions"),(0,a.kt)("p",null,'!!! example "Question Admonition"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=== "Markup"\n\n    ```markdown\n    ??? question "What is a collapsible admonition?"\n     \n        This is a collapsible admonition. It can have a title, and it collapses so as not to interrupt the flow the of the document, but it provides useful information as needed.\n    ```\n\n=== "Result"\n\n    ??? question "What is a collapsible admonition?"\n     \n        This is a collapsible admonition. It can have a title, and it collapses so as not to interrupt the flow the of the document, but it provides useful information as needed.\n')),(0,a.kt)("p",null,"You can read more about admonitions with further examples in the ",(0,a.kt)("a",{parentName:"p",href:"https://squidfunk.github.io/mkdocs-material/reference/admonitions/"},"Material for MkDocs documentation"),"."),(0,a.kt)("h3",{id:"code-blocks"},"Code blocks"),(0,a.kt)("p",null,'!!! example "Code block with title and highlighted lines"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=== "Markup"\n\n    ````markdown\n    ```html+twig title="HTML in a TWIG template" hl_lines="8 9 10"\n    {% for image in attribute(data, \'as:image\')|slice(0,1) %}\n     {% if image["flv:exif"] %}\n       {% set height = image["flv:exif"].ImageHeight%}\n     {% else  %}\n       {% set width = 1200 %}\n     {% endif %}\n       {% set imageurl =  IIIFserverurl ~ image[\'url\']|replace({\'s3://\':\'\'})|replace({\'private://\':\'\'})|url_encode %}\n    <a href="{{ nodeurl }}" title="{{ data.label }}" alt="{{ data.label }}">\n    <img src="{{ imageurl }}/pct:5,5,90,30/,400/0/default.jpg" class="d-block.w-auto" alt="{{ image.name }}" height="400px" style="min-width:1200px">\n    </a> \n    {% endfor %}\n    ```\n    ````\n\n=== "Result"\n\n    ```html+twig title="HTML in a TWIG template" hl_lines="8 9 10"\n    {% for image in attribute(data, \'as:image\')|slice(0,1) %}\n     {% if image["flv:exif"] %}\n       {% set height = image["flv:exif"].ImageHeight%}\n     {% else  %}\n       {% set width = 1200 %}\n     {% endif %}\n       {% set imageurl =  IIIFserverurl ~ image[\'url\']|replace({\'s3://\':\'\'})|replace({\'private://\':\'\'})|url_encode %}\n    <a href="{{ nodeurl }}" title="{{ data.label }}" alt="{{ data.label }}">\n    <img src="{{ imageurl }}/pct:5,5,90,30/,400/0/default.jpg" class="d-block.w-auto" alt="{{ image.name }}" height="400px" style="min-width:1200px">\n    </a> \n    {% endfor %}\n    ```\n')),(0,a.kt)("h3",{id:"quirks"},"Quirks"),(0,a.kt)("p",null,"Because of the use of front matter (the block of YAML at the top that contains settings and data for the file) the markup for a horizontal rule is restricted. To create one you have to use the following:"),(0,a.kt)("p",null,'!!! example "Horizontal Rule"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=== "Markup"\n\n    ```markdown\n    ___\n    ```\n\n=== "Result"\n\n    ___\n')),(0,a.kt)("p",null,"!!! info\nThe above are underscore (",(0,a.kt)("inlineCode",{parentName:"p"},"_"),") characters, as opposed to hyphens (",(0,a.kt)("inlineCode",{parentName:"p"},"-"),")."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Some of the documentation that is ",(0,a.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/documentation_technical"},"automatically deployed from the repos")," have special comments that are converted to theme-specific elements via script."),(0,a.kt)("p",null,'!!! example "Front Matter"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=== "Deployment Repo with Front Matter"\n\n    ```markdown\n    \x3c!--documentation\n    ---\n    title: "Adding Demo Archipelago Digital Objects (ADOs) to your Repository"\n    tags:\n      - Archipelago Digital Objects\n      - Demo Content\n    ---\n    documentation--\x3e\n    ```\n\n=== "Documentation Repo with Front Matter"\n\n    ```markdown\n    ---\n    title: "Adding Demo Archipelago Digital Objects (ADOs) to your Repository"\n    tags:\n      - Archipelago Digital Objects\n      - Demo Content\n    ---\n    ```\n')),(0,a.kt)("p",null,'!!! example "Switching Elements"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=== "Deployment Repo with Theme-specific Markup"\n\n    ````markdown\n    \x3c!--switch_below\n    \n    ??? info "OSX (macOS)/x86-64"\n    \n        ```shell\n        cp docker-compose-osx.yml docker-compose.yml\n        ```\n    \n    ??? info "Linux/x86-64/AMD64"\n    \n        ```shell\n        cp docker-compose-linux.yml docker-compose.yml\n        ```\n    \n    ??? info "OSX (macOS)/Linux/ARM64"\n    \n        ```shell\n        cp docker-compose-arm64.yml docker-compose.yml\n        ```\n    \n    switch_below--\x3e\n    \n    ___\n    \n    OSX (macOS)/x86-64:\n    \n    ```shell\n    cp docker-compose-osx.yml docker-compose.yml\n    ```\n    \n    ___\n    \n    Linux/x86-64/AMD64:\n    \n    ```shell\n    cp docker-compose-linux.yml docker-compose.yml\n    ```\n    \n    ___\n    \n    OSX (macOS)/Linux/ARM64:\n    \n    ```shell\n    cp docker-compose-arm64.yml docker-compose.yml\n    ```\n    \n    ___\n    \n    \x3c!--switch_above\n    switch_above--\x3e\n    ````\n\n=== "Documentation Repo with Theme-specific Markup"\n\n    ````markdown\n    ??? info "OSX (macOS)/x86-64"\n    \n        ```shell\n        cp docker-compose-osx.yml docker-compose.yml\n        ```\n    \n    ??? info "Linux/x86-64/AMD64"\n    \n        ```shell\n        cp docker-compose-linux.yml docker-compose.yml\n        ```\n    \n    ??? info "OSX (macOS)/Linux/ARM64"\n    \n        ```shell\n        cp docker-compose-arm64.yml docker-compose.yml\n        ```\n    \n    \x3c!--repo_docs\n    \n    ___\n    \n    OSX (macOS)/x86-64:\n    \n    ```shell\n    cp docker-compose-osx.yml docker-compose.yml\n    ```\n    \n    ___\n    \n    Linux/x86-64/AMD64:\n    \n    ```shell\n    cp docker-compose-linux.yml docker-compose.yml\n    ```\n    \n    ___\n    \n    OSX (macOS)/Linux/ARM64:\n    \n    ```shell\n    cp docker-compose-arm64.yml docker-compose.yml\n    ```\n    \n    ___\n    \n    repo_docs--\x3e\n    ````\n')))}p.isMDXComponent=!0}}]);