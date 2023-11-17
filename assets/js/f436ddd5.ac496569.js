"use strict";(self.webpackChunkarchipelago_documentation_docsaurus=self.webpackChunkarchipelago_documentation_docsaurus||[]).push([[3571],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const r={title:"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",tags:["Archipelago-deployment","Drupal 9","Ubuntu 18.04","Ubuntu 20.04"]},l="Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",i={unversionedId:"archipelago-deployment-ubuntu",id:"archipelago-deployment-ubuntu",title:"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",description:"About running terminal commands",source:"@site/docs/archipelago-deployment-ubuntu.md",sourceDirName:".",slug:"/archipelago-deployment-ubuntu",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-ubuntu",draft:!1,editUrl:"https://pr.new/github.com/WWU-MaxBronsema/archipelago-documentation-docusaurus/docs/archipelago-deployment-ubuntu.md",tags:[{label:"Archipelago-deployment",permalink:"/archipelago-documentation-docusaurus/docs/tags/archipelago-deployment"},{label:"Drupal 9",permalink:"/archipelago-documentation-docusaurus/docs/tags/drupal-9"},{label:"Ubuntu 18.04",permalink:"/archipelago-documentation-docusaurus/docs/tags/ubuntu-18-04"},{label:"Ubuntu 20.04",permalink:"/archipelago-documentation-docusaurus/docs/tags/ubuntu-20-04"}],version:"current",frontMatter:{title:"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04",tags:["Archipelago-deployment","Drupal 9","Ubuntu 18.04","Ubuntu 20.04"]},sidebar:"tutorialSidebar",previous:{title:"Archipelago-deployment for Drupal 9",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-readme"},next:{title:"Archipelago-deployment: upgrading Drupal 8 to Drupal 9 (1.0.0-RC2 to 1.0.0-RC3)",permalink:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-upgradeFromD8ToD9"}},s={},u=[{value:"About running terminal commands",id:"about-running-terminal-commands",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Wait! Question: Do you have a previous version of Archipelago running?",id:"wait-question-do-you-have-a-previous-version-of-archipelago-running",level:3},{value:"Step 1: Deployment",id:"step-1-deployment",level:2},{value:"Prefer to watch a video to see what it&#39;s like to install? Go to our <code>user contributed documentation</code>!",id:"prefer-to-watch-a-video-to-see-what-its-like-to-install-go-to-our-user-contributed-documentation",level:5},{value:"IMPORTANT",id:"important",level:4},{value:"Step 2: Set up your Minio S3 bucket",id:"step-2-set-up-your-minio-s3-bucket",level:2},{value:"Step 3: Deploy Drupal 9 and the awesome Archipelago Modules",id:"step-3-deploy-drupal-9-and-the-awesome-archipelago-modules",level:2},{value:"Step 4: Create a &quot;demo &quot;and a &quot;jsonapi&quot; user using drush and assign your &quot;admin&quot; user the Administrator Role (new since Drupal 9).",id:"step-4-create-a-demo-and-a-jsonapi-user-using-drush-and-assign-your-admin-user-the-administrator-role-new-since-drupal-9",level:2},{value:"Step 5: Ingest some Metadata Displays to make playing much more interactive",id:"step-5-ingest-some-metadata-displays-to-make-playing-much-more-interactive",level:2},{value:"Step 6: Optional but more fun if you add content",id:"step-6-optional-but-more-fun-if-you-add-content",level:2},{value:"Need help? Blue Screen? Missed a step? Need a hug?",id:"need-help-blue-screen-missed-a-step-need-a-hug",level:3},{value:"User contributed documentation (A Video!):",id:"user-contributed-documentation-a-video",level:3},{value:"Caring &amp; Coding + Fixing + Testing",id:"caring--coding--fixing--testing",level:2},{value:"License",id:"license",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installing-archipelago-drupal-9-on-ubuntu-1804-or-2004"},"Installing Archipelago Drupal 9 on Ubuntu 18.04 or 20.04"),(0,n.kt)("h2",{id:"about-running-terminal-commands"},"About running terminal commands"),(0,n.kt)("p",null,"This guide assumes you are comfortable enough running terminal (bash) commands on a Linux Computer."),(0,n.kt)("p",null,"We made sure that you can ",(0,n.kt)("inlineCode",{parentName:"p"},"copy")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"paste")," each of these commands from this guide directly into your terminal."),(0,n.kt)("p",null,"You will notice sometimes commands ",(0,n.kt)("strong",{parentName:"p"},"span more than a single line")," of text. If that is the case, always make sure you copy and paste ",(0,n.kt)("strong",{parentName:"p"},"a single line at a time")," and press the ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," key afterwards. We suggest you also look at the output."),(0,n.kt)("p",null,"If something fails (and we hope it does not) troubleshooting will be much easier if you can share that output when asking for help."),(0,n.kt)("p",null,"Happy deploying!"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At least 10 Gbytes of free space (to get started)"),(0,n.kt)("li",{parentName:"ul"},"Some basic Unix/Terminal Skills"),(0,n.kt)("li",{parentName:"ul"},"2-4 Gbytes of RAM (4 Recommended)"),(0,n.kt)("li",{parentName:"ul"},"Install Docker if you don't have it already by running:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sudo apt install apt-transport-https ca-certificates curl software-properties-common\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"\nsudo apt update\nsudo apt-cache policy docker-ce\nsudo apt install docker-ce\nsudo systemctl status docker\n\nsudo usermod -aG docker ${USER}\n')),(0,n.kt)("p",null,"Log out, and log in again!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install docker-compose\n")),(0,n.kt)("p",null,"Git tools are included by default in Ubuntu."),(0,n.kt)("h3",{id:"wait-question-do-you-have-a-previous-version-of-archipelago-running"},"Wait! Question: Do you have a previous version of Archipelago running?"),(0,n.kt)("p",null,"If so, let's give that hard working repository a break first. If not, ",(0,n.kt)("a",{parentName:"p",href:"#step-1-deployment"},"Step 1"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open a terminal (you have that already right?) and go to your previous download/git clone folder and run:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\ndocker-compose rm\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can't remember where you downloaded it? Ok. We can deal with that!")),(0,n.kt)("p",null,"Let's stop the containers gracefully first, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker stop esmero-web\ndocker stop esmero-solr\ndocker stop esmero-db\ndocker stop esmero-cantaloupe\ndocker stop esmero-php\ndocker stop esmero-minio\ndocker stop esmero-nlp\n")),(0,n.kt)("p",null,"Now we need to remove them so we run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker rm esmero-web\ndocker rm esmero-solr\ndocker rm esmero-db\ndocker rm esmero-cantaloupe\ndocker rm esmero-php\ndocker rm esmero-minio\ndocker rm esmero-nlp\n")),(0,n.kt)("p",null,"Ok, now we are ready to start."),(0,n.kt)("h2",{id:"step-1-deployment"},"Step 1: Deployment"),(0,n.kt)("h5",{id:"prefer-to-watch-a-video-to-see-what-its-like-to-install-go-to-our-user-contributed-documentation"},"Prefer to watch a video to see what it's like to install? Go to our ",(0,n.kt)("a",{parentName:"h5",href:"#user-contributed-documentation-a-video1"},(0,n.kt)("inlineCode",{parentName:"a"},"user contributed documentation")),(0,n.kt)("sup",{parentName:"h5",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"!"),(0,n.kt)("h4",{id:"important"},"IMPORTANT"),(0,n.kt)("p",null,"If you run ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose")," as root user (using ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo"),") some enviromental variables, like the current folder used inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," to mount the Volumes, will not work and you will see a bunch of errors."),(0,n.kt)("p",null,"There are two possible solutions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The best is to add your ",(0,n.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04"},"user to the docker group")," (so no ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo")," needed)."),(0,n.kt)("li",{parentName:"ul"},"The second option is to replace every ",(0,n.kt)("inlineCode",{parentName:"li"},"{$PWD}")," inside your ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," with either the full path to your current folder, or with a ",(0,n.kt)("inlineCode",{parentName:"li"},".")," and wrap that whole line in double quotes, basically making the paths for volumes relatives.")),(0,n.kt)("p",null,"Instead of: ",(0,n.kt)("inlineCode",{parentName:"p"},"- ${PWD}:/var/www/html:cached"),"\nuse: ",(0,n.kt)("inlineCode",{parentName:"p"},'- ".:/var/www/html:cached"')),(0,n.kt)("p",null,"Now that you got it, let's deploy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/esmero/archipelago-deployment.git archipelago-deployment\ncd archipelago-deployment\ngit checkout 1.0.0\n")),(0,n.kt)("p",null,"And now a hard choice. Which docker-compose/ensemble? Edge? Stable? Legacy? So many choices. For latest/modern stack PHP8/Solr8.11/MySQL8 we recommend:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cp docker-compose-linux.yml docker-compose.yml\ndocker-compose pull\ndocker-compose up -d\n")),(0,n.kt)("p",null,"You have something running and do not want to update Databases/Solr indexes: Go legacy. In doubt? Ask us please. We can help."),(0,n.kt)("p",null,"If you want to stay more traditional (not recommended) and stick with older versions PHP7.4/Solr7.5/MySQL57 we recommend the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cp docker-compose-legacy.yml docker-compose.yml\ndocker-compose pull\ndocker-compose up -d\n")),(0,n.kt)("p",null,"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is git ignored in case you make local adjustments or changes to it."),(0,n.kt)("p",null,"You need to make sure Docker can read/write to your local Drive, a.k.a mounted volumes (especially if you decided not to run it as ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," because we told you so!)."),(0,n.kt)("p",null,"This means in practice running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chown -R 8183:8183 persistent/iiifcache\nsudo chown -R 8983:8983 persistent/solrcore\n")),(0,n.kt)("p",null,"And then:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c "chown -R www-data:www-data private"\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Question:")," Why is this last command different? Answer: Just a variation. The long answer is that the internal ",(0,n.kt)("inlineCode",{parentName:"p"},"www-data")," user in that container (Alpine Linux) has uid:82, but on Ubuntu the ",(0,n.kt)("inlineCode",{parentName:"p"},"www-data")," user has a different one so we let Docker assign the uid from inside instead. In practice you could also run directly ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo chown -R 82:82 private")," which would only apply to an Alpine use case, which can differ in the future! Does this make sense? No worries if not."),(0,n.kt)("h2",{id:"step-2-set-up-your-minio-s3-bucket"},"Step 2: Set up your Minio S3 bucket"),(0,n.kt)("p",null,"Once all containers are up and running (you can do a ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps")," to check),\naccess ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9001")," using your most loved Web Browser with the following credentials:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"user:minio\npass:minio123\n")),(0,n.kt)("p",null,'and create a bucket named "archipelago". To do so go to the ',(0,n.kt)("inlineCode",{parentName:"p"},"Buckets")," section in the navigation pane, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Bucket +"),". Type ",(0,n.kt)("inlineCode",{parentName:"p"},"archipelago")," under ",(0,n.kt)("inlineCode",{parentName:"p"},"Bucket Name")," and submit, done! That is where we will persist all your Files and also your File copies of each Digital Object. You can always go there and explore what Archipelago (well really Strawberryfield does the hard work) has persisted so you can get comfortable with our architecture."),(0,n.kt)("h2",{id:"step-3-deploy-drupal-9-and-the-awesome-archipelago-modules"},"Step 3: Deploy Drupal 9 and the awesome Archipelago Modules"),(0,n.kt)("p",null,"The following will run composer inside the esmero-php container to download all dependencies and Drupal Core too."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c "composer install"\n')),(0,n.kt)("p",null,"You will see a warning: ",(0,n.kt)("inlineCode",{parentName:"p"},"Do not run Composer as root/super user! See https://getcomposer.org/root for details")," and the a long list of PHP packages. Don't worry. All is good here. Keep following the instructions! Once that command finishes run our setup script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti esmero-php bash -c 'scripts/archipelago/setup.sh'\n")),(0,n.kt)("p",null,"Explanation: That script will append some important configurations to your local ",(0,n.kt)("inlineCode",{parentName:"p"},"web/sites/default/settings.php"),"."),(0,n.kt)("p",null,"Note: We say ",(0,n.kt)("inlineCode",{parentName:"p"},"local")," because your whole Drupal web root (the one you cloned) is also mounted inside the esmero-php and esmero-web containers. So edits to PHP files, for example, can be done without accessing the container directly from your local folder."),(0,n.kt)("p",null,"If this is the first time you're deploying Drupal using the provided Configurations run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti -u www-data esmero-php bash -c "cd web;../vendor/bin/drush -y si --verbose --existing-config --db-url=mysql://root:esmerodb@esmero-db/drupal --account-name=admin --account-pass=archipelago -r=/var/www/html/web --sites-subdir=default --notify=false;drush cr;chown -R www-data:www-data sites;"\n')),(0,n.kt)("p",null,"Note: You will see this warning: ",(0,n.kt)("inlineCode",{parentName:"p"},'[warning] The "block_content:1cdf7155-eb60-4f27-9e5e-64fffe93127a" was not found'),". Nothing to worry about. We will provide the missing part in Step 5."),(0,n.kt)("p",null,"Note 2: Please be patient. This step takes now 25-30% longer because of how the most recent Drupal Installation code fetches translations and other resources (see ",(0,n.kt)("inlineCode",{parentName:"p"},"Performed install task"),'). This means progress might look like getting "stuck", go and get a coffee/tea and let it run to the end.'),(0,n.kt)("p",null,"Once finished, this will give you an ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," Drupal user with ",(0,n.kt)("inlineCode",{parentName:"p"},"archipelago")," as password (change this if running on a public instance!) and also set the right Docker Container owner for your Drupal installation files."),(0,n.kt)("p",null,"Final note about Steps 2-3: You don't need to, nor should you do this more than once. You can destroy/stop/update, recreate your Docker containers, and start again (",(0,n.kt)("inlineCode",{parentName:"p"},"git pull"),"), and your Drupal and Data will persist once you've passed the ",(0,n.kt)("inlineCode",{parentName:"p"},"Installation complete")," message. I repeat, all other containers' data is persisted inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"persistent/")," folder contained in this cloned git repository. Drupal and all its code is visible, editable, and stable inside your ",(0,n.kt)("inlineCode",{parentName:"p"},"web/")," folder."),(0,n.kt)("h2",{id:"step-4-create-a-demo-and-a-jsonapi-user-using-drush-and-assign-your-admin-user-the-administrator-role-new-since-drupal-9"},'Step 4: Create a "demo "and a "jsonapi" user using drush and assign your "admin" user the Administrator Role (new since Drupal 9).'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c \'drush ucrt demo --password="demo"; drush urol metadata_pro "demo"\'\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti esmero-php bash -c \'drush ucrt jsonapi --password="jsonapi"; drush urol metadata_api "jsonapi"\'\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti esmero-php bash -c 'drush urol administrator \"admin\"'\n")),(0,n.kt)("h2",{id:"step-5-ingest-some-metadata-displays-to-make-playing-much-more-interactive"},"Step 5: Ingest some Metadata Displays to make playing much more interactive"),(0,n.kt)("p",null,"Archipelago is more fun without having to start writing Metadata Displays (in Twig) before you know what they actually are. Since you should now have a ",(0,n.kt)("inlineCode",{parentName:"p"},"jsonapi")," user and jsonapi should be enabled, you can use that awesome functionality of D8 to get that done. We have 4 demo Metadata Display Entities that go well with the demo Webform we provided. To do that execute in your shell (copy and paste):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti esmero-php bash -c 'scripts/archipelago/deploy.sh'\n")),(0,n.kt)("p",null,"You are done! Open your most loved Web Browser and point it to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8001")),(0,n.kt)("p",null,"Note: It can take some time to start the first time (Drupal needs some warming up). The Ubuntu deployment is WAY faster than the OSX deployment because of the way the bind mount volumes are handled by the driver. Our experience is that Archipelago basically reacts instantly!"),(0,n.kt)("h2",{id:"step-6-optional-but-more-fun-if-you-add-content"},"Step 6: Optional but more fun if you add content"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/archipelago-documentation-docusaurus/docs/archipelago-deployment-democontent"},"One-Step Demo content ingest")),(0,n.kt)("h3",{id:"need-help-blue-screen-missed-a-step-need-a-hug"},"Need help? Blue Screen? Missed a step? Need a hug?"),(0,n.kt)("p",null,"If you see any issues or errors or need help with a step, please let us know (ASAP!). You can either open an ",(0,n.kt)("inlineCode",{parentName:"p"},"issue")," in this repository or use the ",(0,n.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/archipelago-commons"},"Google Group"),". We are here to help."),(0,n.kt)("p",null,"If you like this, let us know!"),(0,n.kt)("h3",{id:"user-contributed-documentation-a-video"},"User contributed documentation (A Video!)",(0,n.kt)("sup",{parentName:"h3",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Installing Archipelago on AWS Ubuntu")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/senyzspalding"},"Zach Spalding"),": ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/RBy7UMxSmyQ"},"https://youtu.be/RBy7UMxSmyQ")),(0,n.kt)("h2",{id:"caring--coding--fixing--testing"},"Caring & Coding + Fixing + Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/DiegoPino"},"Diego Pino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/giancarlobi"},"Giancarlo Birello")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alliomeria"},"Allison Lund")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/karomabiles"},"Katie Romabiles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aksm"},"Albert Min"))),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl-3.0.txt"},"GPLv3")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"You may find this user contributed tutorial video, which was created for an earlier Archipelago release, to be helpful. Please note that there are significant differences between the executed steps and that you need to follow the current release instructions in order to have a successful deployment.",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);