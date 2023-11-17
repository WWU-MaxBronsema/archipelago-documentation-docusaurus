"use strict";(self.webpackChunkarchipelago_documentation_docsaurus=self.webpackChunkarchipelago_documentation_docsaurus||[]).push([[597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"Archipelago Multi-Importer (AMI)",tags:["AMI","Archipelago Multi Importer"]},i="Archipelago Multi-Importer (AMI)",s={unversionedId:"ami_index",id:"ami_index",title:"Archipelago Multi-Importer (AMI)",description:"Archipelago Multi-Importer (AMI) is a module for batch/bulk/mass ingests of Archipelago digital objects (ADOs) and collections. AMI also enables you to perform batch administrative actions, such as updating, patching/revising, or deleting digital objects and collections. AMI's Solr Importer plugin can be used to create AMI ingests and migrating content from existing Solr-sourcable digital repositories (such as Islandora 7).",source:"@site/docs/ami_index.md",sourceDirName:".",slug:"/ami_index",permalink:"/archipelago-documentation-docusaurus/docs/ami_index",draft:!1,editUrl:"https://pr.new/github.com/WWU-MaxBronsema/archipelago-documentation-docusaurus/docs/ami_index.md",tags:[{label:"AMI",permalink:"/archipelago-documentation-docusaurus/docs/tags/ami"},{label:"Archipelago Multi Importer",permalink:"/archipelago-documentation-docusaurus/docs/tags/archipelago-multi-importer"}],version:"current",frontMatter:{title:"Archipelago Multi-Importer (AMI)",tags:["AMI","Archipelago Multi Importer"]},sidebar:"tutorialSidebar",previous:{title:"Caring & Coding + Fixing",permalink:"/archipelago-documentation-docusaurus/docs/acknowledgments"},next:{title:"Using AMI's Linked Data Reconciliation",permalink:"/archipelago-documentation-docusaurus/docs/ami_lod_rec"}},l={},c=[{value:"Getting started with AMI",id:"getting-started-with-ami",level:2},{value:"AMI Overview and Pre-Release Notes - AMI 0.4.0 (Archipelago - 1.0.0)",id:"ami-overview-and-pre-release-notes---ami-040-archipelago---100",level:2},{value:"Getting started with AMI",id:"getting-started-with-ami-1",level:2},{value:"Google Sheets API Congifuration",id:"google-sheets-api-congifuration",level:2},{value:"Example Spreadsheet/CSV",id:"example-spreadsheetcsv",level:3},{value:"Example JSON template",id:"example-json-template",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"archipelago-multi-importer-ami"},"Archipelago Multi-Importer (AMI)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/esmero/ami"},"Archipelago Multi-Importer (AMI)")," is a module for batch/bulk/mass ingests of Archipelago digital objects (ADOs) and collections. AMI also enables you to perform batch administrative actions, such as updating, patching/revising, or deleting digital objects and collections. AMI's Solr Importer plugin can be used to create AMI ingests and migrating content from existing Solr-sourcable digital repositories (such as Islandora 7)."),(0,o.kt)("h2",{id:"getting-started-with-ami"},"Getting started with AMI"),(0,o.kt)("p",null,"You can access AMI through the ",(0,o.kt)("inlineCode",{parentName:"p"},"AMI Sets")," tab on the main Content page found at ",(0,o.kt)("inlineCode",{parentName:"p"},"/admin/content")," or directly at ",(0,o.kt)("inlineCode",{parentName:"p"},"/amiset/list"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AMI Sets List",src:a(3611).Z,width:"1065",height:"359"})),(0,o.kt)("h2",{id:"ami-overview-and-pre-release-notes---ami-040-archipelago---100"},"AMI Overview and Pre-Release Notes - AMI 0.4.0 (Archipelago - 1.0.0)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"From the desk of ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/DiegoPino"},"Diego Pino"))),(0,o.kt)("p",null,"AMI provides Tabulated data ingest for ADOs with customizable input plugins. Each Spreadsheet (or Google Spreadsheet) goes through a Configuration Multi Step setup and generates at the end an AMI Set. AMI Sets then can be enqueued or directly ingested, its generated Objects purged and reingested again, its source data (generated and enriched with UUIDS) CSV replaced, improved and uploaded again and ingested."),(0,o.kt)("p",null,'??? info "Click to read the full AMI 0.4.0 (Archipelago - 1.0.0) Pre-Release Notes."'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#### Setup Steps\n\nAMI has Ingest, Update and Patch capabilities. AMI has a plugin system to fetch data. The data can come from multiple sources and right now CSV/EXCEL or Google Spreadsheets are the ones enabled. It does parent/children validation, makes sure that parents are ingested first, cleans broken relationships, allows arbitrary multi relations to be generated in a single ROW (ismemberof, partOf, etc)  pointing to other rows or existing ADOs (via UUIDs) and can process rows directly as JSON or preprocessed via a Metadata Display entity (twig template) capable of producing JSON output. These templates can be configured by \u201ctype\u201d, Articles v/s 3DModel can have different ones. Even which columns contain Files can be configured at that level.\n\n#### AMI Set Entity\n\nAmi Sets are special custom entities that hold an Ingest Strategy generated via the previous Setup steps (as JSON with all it's settings), a CSV with data imported from the original source (with UUIDs prepopulated if they were not provided by the user). These AMI sets are simpler and faster than \u201cbatch sets\u201d because they do not have a single entry per Object to be ingested. All data lives in a CSV. This means the CSV of an AMI set can be corrected and reuploaded. Users can then Process a Set either putting the to be ingested ADOs in the queue and let Hydroponics Service do the rest or directly via Batch on the UI. ADOs generated by a set can also be purged from there. These sets can also be created manually if needed of any of the chosen settings modified anytime. Which AMI set generated the Ingest is also tracked in a newly created ADO\u2019s JSON and any other extra data (or fixed data e.g common Rights statements, or LoD) can be provided by a Twig Template. Ingest is amazingly fast. We monitored Ingest with Remote URL(islandora Datastreams) files of 15Mbytes average at a speed of 2 seconds per Object (including all post processing) continuously for a set of 100+.\n\n#### Search and Replace\n\nThis module also provides a simple search/replace text VBO action (handles JSON as text) and a full blown JSONPATCH VBO action to batch modify ADOs. The last one is extremely powerful permitting multiple operations at the same time with tests. E.g replace a certain value, add another value, remove another value only if a certain test (e.g \u201ctype\u201d:\u201dArticle\u201d and \u201cdate_of_digital\u201d: \u201c2020-09-09\u201d) matches. If any tests fail the whole operation will be canceled for that ADO. An incomplete \u201cWebform\u201d VBO action is present but not fully functional yet. This one allows you to choose a Webform, a certain element inside that Webform and then find and replace using the same Interface you would see while editing/adding a new ADO via the web form workflow.\n")),(0,o.kt)("h2",{id:"getting-started-with-ami-1"},"Getting started with AMI"),(0,o.kt)("p",null,"You can access AMI through the ",(0,o.kt)("inlineCode",{parentName:"p"},"AMI Sets")," tab on the main Content page found at ",(0,o.kt)("inlineCode",{parentName:"p"},"/admin/content")," or directly at ",(0,o.kt)("inlineCode",{parentName:"p"},"/amiset/list"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AMI Sets List",src:a(3611).Z,width:"1065",height:"359"})),(0,o.kt)("h2",{id:"google-sheets-api-congifuration"},"Google Sheets API Congifuration"),(0,o.kt)("p",null,"If you plan on using the Google Sheets Importer option, you will need to ",(0,o.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/googleapi"},"Configure the Google Sheets API"),"."),(0,o.kt)("h3",{id:"example-spreadsheetcsv"},"Example Spreadsheet/CSV"),(0,o.kt)("p",null,"This spreadsheet can be used to import a small set of Digital Objects using the same assets part of the ",(0,o.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-democontent"},"Two-Step Demo content ingest guide")," (these objects can also be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/esmero/archipelago-deployment"},"Archipelago Deployment repository"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/10IAgDZ1_fGVd_2g1GyUYs0SrnkAfvVtTwukEaIEny5Y/edit?usp=sharing"},"https://docs.google.com/spreadsheets/d/10IAgDZ1_fGVd_2g1GyUYs0SrnkAfvVtTwukEaIEny5Y/edit?usp=sharing")),(0,o.kt)("li",{parentName:"ul"},"To use this spreadsheet, you can either download as a CSV file to use with the Spreadsheet Importer, or make a copy of this using your ",(0,o.kt)("a",{parentName:"li",href:"/archipelago-documentation-docusaurus/docs/googleapi"},"configured Google Sheets API account"),".")),(0,o.kt)("h3",{id:"example-json-template"},"Example JSON template"),(0,o.kt)("p",null,"This JSON template can be used during the Data Transformation (step 3) of your AMI Import. This particular template corresponds with the metadata elements found in the Default Descriptive Metadata and Default Digital Object Collection webforms shipped with Archipelago 1.0.0."),(0,o.kt)("p",null,'??? info "Click to view the example 1.0.0 AMI JSON template"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'To use this template, copy and paste the JSON below directly into a new Metadata Display, found here for a local `http://localhost:8001/metadatadisplay/list` or `http://yoursite.org/metadatadisplay/list`. Select `JSON` as the \'Primary mime type this Twig Template entity will generate as output\' for this new Metadata Display.\n\n```json_encode\n  {\n      "type": {{ data.type|json_encode|raw }},\n      "label": {{ data.label|json_encode|raw }},\n      "issue_number": {{ data.issue_number|json_encode|raw }},\n      "interviewee": {{ data.interviewee|json_encode|raw }},\n      "interviewer": {{ data.interviewer|json_encode|raw }},\n      "duration": {{ data.duration|json_encode|raw }},\n      "website_url": {{ data.website_url|json_encode|raw }},\n      "description": {{ data.description|json_encode|raw }},\n      "date_created": {{ data.date_created|json_encode|raw }},\n      "creator": {{ data.creator|json_encode|raw }},\n      "creator_lod": {{ data.creator_lod|json_encode|raw }},\n      "publisher": {{ data.publisher|json_encode|raw }},\n      "language": {{ data.language|json_encode|raw }},\n      "ismemberof": [],\n      "owner": {{ data.owner|json_encode|raw }},\n      "local_identifier": {{ data.local_identifier|json_encode|raw }},\n      "date_published": {{ data.date_published|json_encode|raw }},\n      "rights_statements": {{ data.rights_statements|json_encode|raw }},\n      "rights": {{ data.rights|json_encode|raw }},\n      "subject_loc": {{ data.subject_loc|json_encode|raw }},\n      "subject_lcnaf_personal_names": {{ data.subject_lcnaf_personal_names|json_encode|raw }},\n      "subject_lcnaf_corporate_names": {{ data.subject_lcnaf_corporate_names|json_encode|raw }},\n      "subject_lcnaf_geographic_names": {{ data.subject_lcnaf_geographic_names|json_encode|raw }},\n      "subject_lcgft_terms": {{ data.subject_lcgft_terms|json_encode|raw }},\n      "subject_wikidata": {{ data.subject_wikidata|json_encode|raw }},\n      "edm_agent": {{ data.edm_agent|json_encode|raw }},\n      "term_aat_getty": {{ data.term_aat_getty|json_encode|raw }},\n      "geographic_location": {{ data.geographic_location|json_encode|raw }},\n      "subjects_local_personal_names": {{ data.subjects_local_personal_names|json_encode|raw }},\n      "subjects_local": {{ data.subjects_locals|json_encode|raw }},\n      "audios": [],\n      "images": [],\n      "models": [],\n      "videos": [],\n      "documents": [],\n      "as:generator": {\n          "type": "Create",\n          "actor": {\n              "url": {{ setURL|json_encode|raw }},\n              "name": "ami",\n              "type": "Service"\n          },\n          "endTime": "{{"now"|date("c")}}",\n          "summary": "Generator",\n          "@context": "https:\\/\\/www.w3.org\\/ns\\/activitystreams"\n      },\n      "upload_associated_warcs": []\n  }\n```\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Thank you for reading! Please contact us on our ",(0,o.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/archipelago-commons"},"Archipelago Commons Google Group")," with any questions or feedback."),(0,o.kt)("p",null,"Return to the ",(0,o.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/"},"Archipelago Documentation main page"),"."))}u.isMDXComponent=!0},3611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AMIsetsList-a3dee710b0a4d91c60006dddf6c41700.jpg"}}]);