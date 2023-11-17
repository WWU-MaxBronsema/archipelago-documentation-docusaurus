"use strict";(self.webpackChunkarchipelago_documentation_docsaurus=self.webpackChunkarchipelago_documentation_docsaurus||[]).push([[4059],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Installing Archipelago Drupal 9 on OSX (macOS)",tags:["Archipelago-deployment","Drupal 9","macOS","OSX"]},i="Installing Archipelago Drupal 9 on OSX (macOS)",l={unversionedId:"archipelago-deployment-osx",id:"archipelago-deployment-osx",title:"Installing Archipelago Drupal 9 on OSX (macOS)",description:"About running terminal commands",source:"@site/docs/archipelago-deployment-osx.md",sourceDirName:".",slug:"/archipelago-deployment-osx",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-osx",draft:!1,editUrl:"https://pr.new/github.com/WWU-MaxBronsema/archipelago-documentation-docusaurus/docs/archipelago-deployment-osx.md",tags:[{label:"Archipelago-deployment",permalink:"/archipelago-documentation-docusaurus/docs/tags/archipelago-deployment"},{label:"Drupal 9",permalink:"/archipelago-documentation-docusaurus/docs/tags/drupal-9"},{label:"macOS",permalink:"/archipelago-documentation-docusaurus/docs/tags/mac-os"},{label:"OSX",permalink:"/archipelago-documentation-docusaurus/docs/tags/osx"}],version:"current",frontMatter:{title:"Installing Archipelago Drupal 9 on OSX (macOS)",tags:["Archipelago-deployment","Drupal 9","macOS","OSX"]},sidebar:"tutorialSidebar",previous:{title:"Archipelago-deployment-live: upgrading to 1.0.0 (1.0.0-RC3 to 1.0.0)",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-live-upgradeFromRC3"},next:{title:"Archipelago-deployment for Drupal 9",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-readme"}},s={},p=[{value:"About running terminal commands",id:"about-running-terminal-commands",level:2},{value:"OSX (macOS):",id:"osx-macos",level:3},{value:"Wait! Question: Do you have a previous version of Archipelago running?",id:"wait-question-do-you-have-a-previous-version-of-archipelago-running",level:3},{value:"Step 1 (Intel): Docker Deployment on Intel Chips Apple Machines",id:"step-1-intel-docker-deployment-on-intel-chips-apple-machines",level:2},{value:"Step 1 (M1): Docker Deployment on Apple Silicon Chips (M1)",id:"step-1-m1-docker-deployment-on-apple-silicon-chips-m1",level:2},{value:"Step 2: Set up your Minio S3 bucket",id:"step-2-set-up-your-minio-s3-bucket",level:2},{value:"Step 3: Deploy Drupal 9 and the awesome Archipelago Modules",id:"step-3-deploy-drupal-9-and-the-awesome-archipelago-modules",level:2},{value:"Step 4: Create a &quot;demo &quot;and a &quot;jsonapi&quot; user using drush and assign your &quot;admin&quot; user the Administrator Role (new since Drupal 9).",id:"step-4-create-a-demo-and-a-jsonapi-user-using-drush-and-assign-your-admin-user-the-administrator-role-new-since-drupal-9",level:2},{value:"Step 5: Ingest some Metadata Displays to make playing much more interactive",id:"step-5-ingest-some-metadata-displays-to-make-playing-much-more-interactive",level:2},{value:"Step 6: Optional but more fun if you add content",id:"step-6-optional-but-more-fun-if-you-add-content",level:2},{value:"Need help? Blue Screen? Missed a step? Need a hug and such?",id:"need-help-blue-screen-missed-a-step-need-a-hug-and-such",level:3},{value:"Caring &amp; Coding + Fixing + Testing",id:"caring--coding--fixing--testing",level:2},{value:"License",id:"license",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-archipelago-drupal-9-on-osx-macos"},"Installing Archipelago Drupal 9 on OSX (macOS)"),(0,o.kt)("h2",{id:"about-running-terminal-commands"},"About running terminal commands"),(0,o.kt)("p",null,"This guide assumes you are comfortable enough running terminal (bash) commands on an OSX Computer."),(0,o.kt)("p",null,"We made sure that you can ",(0,o.kt)("inlineCode",{parentName:"p"},"copy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"paste")," each of these commands from this guide directly into your terminal."),(0,o.kt)("p",null,"You will notice sometimes commands ",(0,o.kt)("strong",{parentName:"p"},"span more than a single line")," of text. If that is the case, always make sure you copy and paste ",(0,o.kt)("strong",{parentName:"p"},"a single line at a time")," and press the ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," key afterwards. We suggest also you look at the output."),(0,o.kt)("p",null,"If something fails (and we hope it does not) troubleshooting will be much easier if you can share that output when asking for help."),(0,o.kt)("p",null,"Happy deploying!"),(0,o.kt)("h3",{id:"osx-macos"},"OSX (macOS):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/"},"Install Docker for Mac"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For OSX (macOS) ",(0,o.kt)("inlineCode",{parentName:"li"},"Catalina")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Big Sur")," on Intel (i5/i7) the tested version is: ",(0,o.kt)("inlineCode",{parentName:"li"},"4.0.1(68347)"),". You may go newer of course."),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"Big Sur")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Apple Silicon M1")," Chips please read ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/apple-silicon/"},"https://docs.docker.com/docker-for-mac/apple-silicon/"),". You may need to enable manual compatibility mode in your ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file for the ",(0,o.kt)("inlineCode",{parentName:"li"},"esmero-php")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"esmero-cantaloupe")," containers."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"Preferences")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"General"),": check ",(0,o.kt)("inlineCode",{parentName:"li"},"Use gRPC FUSE for file sharing")," and restart. Specially if you are using your ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME")," folder for deploying, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/Users/username"),"."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"Preferences")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Resources"),": 4 Gbytes of RAM is the recommended minimun and works; 8 Gbytes is faster and snappier."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://desktop.github.com"},"Install Github Desktop"),"."),(0,o.kt)("li",{parentName:"ul"},"At least 10 Gbytes of free space (to get started)."),(0,o.kt)("li",{parentName:"ul"},"Being able to open a terminal.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Recent OSX (macOS) and newer Macs ship with ",(0,o.kt)("strong",{parentName:"p"},"2 annoying things"),": Apple Cloud Syncing User Folders and (wait for it) Case insensitive File Systems. If you are happy with your shiny new Mac (like i was) we are aware that it's better to deploy anything mounted outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/User")," folder or even better, in an ",(0,o.kt)("strong",{parentName:"p"},"external drive formatted using a Case Sensitive Unix Filesystem")," (Mac OS Extended (Case-sensitive, Journaled))."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note 2:"),' "Use gRPC FUSE for file sharing" experience may vary, recent Docker for Mac does it well. In older RC1 ones it was evil. Changing/Disabling it after having installed Archipelago may affect your S3/Minio storage accessibility. Please let us know what your experience on this is.'),(0,o.kt)("h3",{id:"wait-question-do-you-have-a-previous-version-of-archipelago-running"},"Wait! Question: Do you have a previous version of Archipelago running?"),(0,o.kt)("p",null,"If so, let's give that hard working repository a break first. If not, skip to ",(0,o.kt)("a",{parentName:"p",href:"#step-1-docker-deployment"},"Step 1"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open a terminal (you have that already right?) and go to your previous download/git clone folder and run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\ndocker-compose rm\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can't remember where you downloaded it? Ok. We can deal with that!")),(0,o.kt)("p",null,"Let's stop the containers gracefully first, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker stop esmero-web\ndocker stop esmero-solr\ndocker stop esmero-db\ndocker stop esmero-cantaloupe\ndocker stop esmero-php\ndocker stop esmero-minio\ndocker stop esmero-nlp\n")),(0,o.kt)("p",null,"Now we need to remove them, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker rm esmero-web\ndocker rm esmero-solr\ndocker rm esmero-db\ndocker rm esmero-cantaloupe\ndocker rm esmero-php\ndocker rm esmero-minio\ndocker rm esmero-nlp\n")),(0,o.kt)("p",null,"Ok, now we are ready to start. Depending on what type of Chip your Apple uses you have two options:"),(0,o.kt)("h2",{id:"step-1-intel-docker-deployment-on-intel-chips-apple-machines"},"Step 1 (Intel): Docker Deployment on Intel Chips Apple Machines"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/esmero/archipelago-deployment.git archipelago-deployment\ncd archipelago-deployment\ngit checkout 1.0.0\ncp docker-compose-osx.yml docker-compose.yml\ndocker-compose pull\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"step-1-m1-docker-deployment-on-apple-silicon-chips-m1"},"Step 1 (M1): Docker Deployment on Apple Silicon Chips (M1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/esmero/archipelago-deployment.git archipelago-deployment\ncd archipelago-deployment\ngit checkout 1.0.0\ncp docker-compose-arm64.yml docker-compose.yml\ndocker-compose pull\ndocker-compose up -d\n")),(0,o.kt)("p",null,"Note: If you are running on an Intel Apple Machine from an external Drive or a partition/filesystem that is ",(0,o.kt)("inlineCode",{parentName:"p"},"Case Sensitive")," and is not syncing automatically to ",(0,o.kt)("inlineCode",{parentName:"p"},"Apple Cloud")," you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose-linux.yml"),".\nNote2: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is git ignored in case you make local adjustments or changes to it."),(0,o.kt)("h2",{id:"step-2-set-up-your-minio-s3-bucket"},"Step 2: Set up your Minio S3 bucket"),(0,o.kt)("p",null,"Once all containers are up and running (you can do a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," to check), access the minio console at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9001")," using your most loved Web Browser with the following credentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"user:minio\npass:minio123\n")),(0,o.kt)("p",null,'and once logged in, press on "Buckets" (left tools column) and then on "Create Bucket"  (top right) and under "Bucket Name" type ',(0,o.kt)("inlineCode",{parentName:"p"},"archipelago"),". Leave all other options unchecked for now (you can experiment with those later), and make sure you write ",(0,o.kt)("inlineCode",{parentName:"p"},"archipelago"),' (no spaces, lowercase) and press "Save". Done! That is where we will persist all your Files and also your File copies of each Digital Object. You can always go there and explore what Archipelago (well really Strawberryfield does the hard work) has persisted so you can get comfortable with our architecture.'),(0,o.kt)("h2",{id:"step-3-deploy-drupal-9-and-the-awesome-archipelago-modules"},"Step 3: Deploy Drupal 9 and the awesome Archipelago Modules"),(0,o.kt)("p",null,"The following will run composer inside the esmero-php container to download all dependencies and Drupal Core too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c "composer install"\n')),(0,o.kt)("p",null,"Once that command finishes run our setup script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti esmero-php bash -c 'scripts/archipelago/setup.sh'\n")),(0,o.kt)("p",null,"Explanation: That script will append some important configurations to your local ",(0,o.kt)("inlineCode",{parentName:"p"},"web/sites/default/settings.php"),"."),(0,o.kt)("p",null,"Note: We say ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," because your whole Drupal web root (the one you cloned) is also mounted inside the esmero-php and esmero-web containers. So edits to PHP files, for example, can be done without accessing the container directly from your local folder."),(0,o.kt)("p",null,"If this is the first time you deploy Drupal using the provided Configurations run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti -u www-data esmero-php bash -c "cd web;../vendor/bin/drush -y si --verbose --existing-config --db-url=mysql://root:esmerodb@esmero-db/drupal --account-name=admin --account-pass=archipelago -r=/var/www/html/web --sites-subdir=default --notify=false;drush cr;chown -R www-data:www-data sites;"\n')),(0,o.kt)("p",null,"Note: You will see this warning: ",(0,o.kt)("inlineCode",{parentName:"p"},'[warning] The "block_content:1cdf7155-eb60-4f27-9e5e-64fffe93127a" was not found'),". Nothing to worry about. We will provide the missing part in Step 5."),(0,o.kt)("p",null,"Note 2: Please be patient. This step takes now 25-30% longer because of how the most recent Drupal Installation code fetches translations and other resources (see ",(0,o.kt)("inlineCode",{parentName:"p"},"Performed install task"),'). This means progress might look like getting "stuck", go and get a coffee/tea and let it run to the end.'),(0,o.kt)("p",null,"Once finished, this will give you an ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," Drupal user with ",(0,o.kt)("inlineCode",{parentName:"p"},"archipelago")," as password (Change this if running on a public instance!)."),(0,o.kt)("p",null,"Final Note about Steps 2-3: You don't need to, nor should you do this more than once. You can destroy/stop/update, recreate your Docker containers, and start again (",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),"), and your Drupal and Data will persist once you're past the ",(0,o.kt)("inlineCode",{parentName:"p"},"Installation complete")," message. I repeat, all other containers' data is persisted inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"persistent/")," folder contained in this cloned git repository. Drupal and all its code is visible, editable, and stable inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"web/")," folder."),(0,o.kt)("h2",{id:"step-4-create-a-demo-and-a-jsonapi-user-using-drush-and-assign-your-admin-user-the-administrator-role-new-since-drupal-9"},'Step 4: Create a "demo "and a "jsonapi" user using drush and assign your "admin" user the Administrator Role (new since Drupal 9).'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c \'drush ucrt demo --password="demo"; drush urol metadata_pro "demo"\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c \'drush ucrt jsonapi --password="jsonapi"; drush urol metadata_api "jsonapi"\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti esmero-php bash -c 'drush urol administrator \"admin\"'\n")),(0,o.kt)("h2",{id:"step-5-ingest-some-metadata-displays-to-make-playing-much-more-interactive"},"Step 5: Ingest some Metadata Displays to make playing much more interactive"),(0,o.kt)("p",null,"Archipelago is more fun without having to start writing Metadata Displays (in Twig) before you know what they actually are. Since you should now have a ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonapi")," user and jsonapi should be enabled, you can use that awesome functionality of D8 to get that done. We have 4 demo Metadata Display Entities that go well with the demo Webform we provided. To do that execute in your shell (copy and paste):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti esmero-php bash -c 'scripts/archipelago/deploy.sh'\n")),(0,o.kt)("p",null,"Open your most loved Web Browser and point it to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8001"),"."),(0,o.kt)("p",null,"Note: It can take some time to start the first time (Drupal needs some warming up)."),(0,o.kt)("p",null,"Also, to make this docker-compose easier to use we are doing something named ",(0,o.kt)("inlineCode",{parentName:"p"},"bind mounting")," (or similar...) your folders. The good thing is that you can edit files in your machine, and they get updated instantly to docker. The bad thing is that the OSX (macOS) driver runs slower than on Linux. Speed is a huge factor here, but you get the flexibility of changing, backing up, and persisting files without needing a Docker University Degree."),(0,o.kt)("h2",{id:"step-6-optional-but-more-fun-if-you-add-content"},"Step 6: Optional but more fun if you add content"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-democontent"},"One-Step Demo content ingest")),(0,o.kt)("h3",{id:"need-help-blue-screen-missed-a-step-need-a-hug-and-such"},"Need help? Blue Screen? Missed a step? Need a hug and such?"),(0,o.kt)("p",null,"If you see any issues or errors or need help with a step, please let us know (ASAP!). You can either open an ",(0,o.kt)("inlineCode",{parentName:"p"},"issue")," in this repository or use the ",(0,o.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/archipelago-commons"},"Google Group"),". We are here to help."),(0,o.kt)("p",null,"If you like this, let us know!"),(0,o.kt)("h2",{id:"caring--coding--fixing--testing"},"Caring & Coding + Fixing + Testing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/DiegoPino"},"Diego Pino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/giancarlobi"},"Giancarlo Birello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alliomeria"},"Allison Lund")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/karomabiles"},"Katie Romabiles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aksm"},"Albert Min"))),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl-3.0.txt"},"GPLv3")))}d.isMDXComponent=!0}}]);