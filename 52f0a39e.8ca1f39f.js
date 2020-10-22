(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),l=(a(0),a(74)),o={slug:"/BetaBuild",title:"Beta build"},r={unversionedId:"3_Guides/BetaBuild",id:"3_Guides/BetaBuild",isDocsHomePage:!1,title:"Beta build",description:"\ud83d\udea7 It's a Work In Progress section \ud83d\udea7",source:"@site/docs/3_Guides/BetaBuild.md",slug:"/BetaBuild",permalink:"/react-native-boilerplate/docs/BetaBuild",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/BetaBuild.md",version:"current",sidebar:"docs",previous:{title:"Using Flipper",permalink:"/react-native-boilerplate/docs/UsingFlipper"},next:{title:"Style Guide",permalink:"/react-native-boilerplate/docs/"}},b=[{value:"Before you start",id:"before-you-start",children:[]},{value:"Installing Fastlane",id:"installing-fastlane",children:[]},{value:"iOS",id:"ios",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setting up",id:"setting-up",children:[]},{value:"Code signing",id:"code-signing",children:[]},{value:"Creating a beta build",id:"creating-a-beta-build",children:[]}]},{value:"Android",id:"android",children:[{value:"Prerequisites",id:"prerequisites-1",children:[]},{value:"Setting up",id:"setting-up-1",children:[]},{value:"Creating a beta build",id:"creating-a-beta-build-1",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Stuck at <code>bundle install</code> or <code>bundle update</code> running <code>fastlane init</code>",id:"stuck-at-bundle-install-or-bundle-update-running-fastlane-init",children:[]},{value:"Permission denied running android beta lane",id:"permission-denied-running-android-beta-lane",children:[]},{value:"Fastlane init failed",id:"fastlane-init-failed",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\ud83d\udea7 It's a Work In Progress section \ud83d\udea7"),Object(l.b)("h1",{id:"distributing-beta-builds"},"Distributing beta builds"),Object(l.b)("p",null,"Developers love writing React Native code but no one likes deploying React Native app or distributing beta builds.  "),Object(l.b)("p",null,"All your headaches will disappear with this documentation and the amazing ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://fastlane.tools/"}),"Fastlane")," tool :)"),Object(l.b)("h2",{id:"before-you-start"},"Before you start"),Object(l.b)("p",null,"You need a Mac. I'm sorry, but if you are a Windows user, you can stop reading right now.",Object(l.b)("br",{parentName:"p"}),"\n","Fastlane will not work on Windows PC. But in all cases, if you need to deploy your app on IOS, you must have a Mac."),Object(l.b)("p",null,"Let's explain which tools we are using to distribute beta builds:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://fastlane.tools/"}),"Fastlane"),", the easiest way to automate beta deployments and releases for your iOS and Android apps. It handles all tedious tasks like generating screenshots, dealing with code signing and releasing your application."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/testflight/"}),"TestFlight"),", part of App Store Connect, let you build your iOS app and invite internal or external users to test it"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://support.google.com/googleplay/android-developer/answer/3131213?hl=fr"}),"Google Play"),", which does the same job as TestFlight for Android apps")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"If you love this documentation, give us a star, you will be a ray of sunshine in our lives :)\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"This documentation is a part of a React Native project template for building solid applications through separation of concerns between the UI, state management and business logic."),"\n",Object(l.b)("em",{parentName:"p"},"Just navigate to the ",Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/thecodingmachine/react-native-boilerplate"}),"project home page")," if you want to see more.")),Object(l.b)("h2",{id:"installing-fastlane"},"Installing Fastlane"),Object(l.b)("p",null,"First you need to install Fastlane on your Mac. Follow these steps:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Install the latest Xcode command line tools:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ xcode-select --install\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Install Ruby using ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://brew.sh/"}),"Homebrew"),":")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ brew install ruby\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Install Fastlane with RubyGems:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ sudo gem install fastlane -NV\n")),Object(l.b)("p",null," You are now ready to set up Fastlane for iOS and Android \ud83d\ude80"),Object(l.b)("h2",{id:"ios"},"iOS"),Object(l.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(l.b)("p",null,"Before continuing make sure you have:"),Object(l.b)("ul",{className:"contains-task-list"},Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Install all ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies"}),"required dependencies"),", with Xcode 9 or higher"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Choose the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://cocoacasts.com/what-are-app-ids-and-bundle-identifiers/"}),"bundle identifier")," of your app (for example ",Object(l.b)("inlineCode",{parentName:"li"},"com.tcm.boilerplate"),")"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","An Apple ID with an admin user, with its username (email, for example ",Object(l.b)("inlineCode",{parentName:"li"},"dev-team@yourcompany.com"),") and password"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Your app name, if not already created on the Developer Portal (for example ",Object(l.b)("inlineCode",{parentName:"li"},"TCM React Native Boilerplate"),"). Fastlane can create applications in the Developer Portal and App Store Connect, so it's recommended to let Fastlane do the job for you."),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Use the right ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"../ios/.gitignore"}),".gitignore")," file inside the ",Object(l.b)("inlineCode",{parentName:"li"},"ios")," directory"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","You also need to create an App Icon to use Fastlane or you will get an error on running ",Object(l.b)("inlineCode",{parentName:"li"},"fastlane beta"),". You can simply create one using the website ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://makeappicon.com/"}),"MakeAppIcon"))),Object(l.b)("p",null,"Open your Xcode project and modify some information:"),Object(l.b)("ul",{className:"contains-task-list"},Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","In the ",Object(l.b)("inlineCode",{parentName:"li"},"General")," tab, ",Object(l.b)("inlineCode",{parentName:"li"},"Identity")," section, change the ",Object(l.b)("inlineCode",{parentName:"li"},"Bundle Identifier")," to your identifier (useful for Fastlane)"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","In the ",Object(l.b)("inlineCode",{parentName:"li"},"Signing & Capabilities")," tab, ",Object(l.b)("inlineCode",{parentName:"li"},"Signing")," section, disable ",Object(l.b)("inlineCode",{parentName:"li"},"Automatically manage signing")),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","In the ",Object(l.b)("inlineCode",{parentName:"li"},"Build Settings")," tab, set view filter on top to ",Object(l.b)("inlineCode",{parentName:"li"},"All")," and ",Object(l.b)("inlineCode",{parentName:"li"},"Combined"),", then go to the ",Object(l.b)("inlineCode",{parentName:"li"},"Signing")," section and into ",Object(l.b)("inlineCode",{parentName:"li"},"Code Signing Identity"),", set ",Object(l.b)("inlineCode",{parentName:"li"},"Don't Code Sign")," for the ",Object(l.b)("inlineCode",{parentName:"li"},"debug")," line (including ",Object(l.b)("inlineCode",{parentName:"li"},"Any iOS SDK")," also) and set ",Object(l.b)("inlineCode",{parentName:"li"},"iOS Distribution")," for the ",Object(l.b)("inlineCode",{parentName:"li"},"release")," line (including ",Object(l.b)("inlineCode",{parentName:"li"},"Any iOS SDK")," also).")),Object(l.b)("p",null,"Like this:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Code Signing Identity"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"< Multiple values >"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Debug"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Don't Code Sign")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any iOS SDK"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Don't Code Sign")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Release"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS Distribution")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any iOS SDK"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS Distribution")))),Object(l.b)("h3",{id:"setting-up"},"Setting up"),Object(l.b)("p",null,"First you need to set up Fastlane for your iOS project:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ cd my-project/ios\n$ fastlane init\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: If you have an error on this step, please see the ",Object(l.b)("inlineCode",{parentName:"em"},"issues")," section.")),Object(l.b)("p",null,"Fastlane will automatically detect your project and ask for any missing information."),Object(l.b)("p",null,"The following questions will be asked:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"What would you like to use fastlane for?")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For this tutorial a good answer is ",Object(l.b)("inlineCode",{parentName:"li"},"2 - Automate beta distribution to TestFlight")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Select Scheme:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Here we will select the scheme without ",Object(l.b)("inlineCode",{parentName:"li"},"-tvOS")," suffix"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Apple ID Username:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If you don't know, you didn't read the \"Prerequisites\" step :)",Object(l.b)("br",{parentName:"li"}),"Our answer is ",Object(l.b)("inlineCode",{parentName:"li"},"dev-team@yourcompany.com")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Password (for Apple ID Username):")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If you don't know, you didn't read the \"Prerequisites\" step :)",Object(l.b)("br",{parentName:"li"}),"Our answer is ",Object(l.b)("inlineCode",{parentName:"li"},"keep it secret")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If your account has multiple teams in the App Store Connect, you may have this question: ",Object(l.b)("inlineCode",{parentName:"p"},"Multiple App Store Connect teams found, please enter the number of the team you want to use:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Select the right team"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If your account has multiple teams in the Developer Portal, you may have this question: ",Object(l.b)("inlineCode",{parentName:"p"},"Multiple teams found on the Developer Portal, please enter the number of the team you want to use:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Select the right team"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If you haven't already created the App on the Developer Portal or App Store Connect, Fastlane can do it for you! (else you must have a message ",Object(l.b)("inlineCode",{parentName:"p"},"Your app 'com.tcm.boilerplate' is available in your Apple Developer Portal / App Store Connect"),")"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"It will ask ",Object(l.b)("inlineCode",{parentName:"li"},"Do you want fastlane to create the App ID for you on the Apple Developer Portal / App Store Connect? (y/n)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Type ",Object(l.b)("inlineCode",{parentName:"li"},"y")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"App Name"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"TCM React Native Boilerplate"))))))),Object(l.b)("p",null,"Fastlane will then give you some information about git, the files it will create, etc. Just type ",Object(l.b)("inlineCode",{parentName:"p"},"enter")," to continue."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Congrats!")," Fastlane has created some files.  "),Object(l.b)("p",null,"If you are using Git, commit all generated files."),Object(l.b)("p",null,"Once the setup has finished you can see a new folder inside the ",Object(l.b)("inlineCode",{parentName:"p"},"ios")," folder:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{})," - fastlane/\n   - Appfile\n   - Fastfile\n")),Object(l.b)("p",null,"It's not finish, you need to follow ",Object(l.b)("inlineCode",{parentName:"p"},"Code Signing")," part to setting up a provisioning profile."),Object(l.b)("p",null,"For information:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Appfile")," contains identifiers used to connect to the Developer Portal and App Store Connect.\nYou can read more about this file ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/advanced/#appfile"}),"here"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Fastfile")," contains all actions you can launch.\nYou can read more about this file ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/actions"}),"here"),".\nBecause we previously chose ",Object(l.b)("inlineCode",{parentName:"p"},"Automate beta distribution to TestFlight")," on set up, a ",Object(l.b)("inlineCode",{parentName:"p"},"beta")," ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/advanced/lanes/"}),"lane")," is available by default.\nThis ",Object(l.b)("inlineCode",{parentName:"p"},"lane")," contains 3 actions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"increment the build number of your app"),Object(l.b)("li",{parentName:"ul"},"build your app"),Object(l.b)("li",{parentName:"ul"},"upload to TestFlight")),Object(l.b)("h3",{id:"code-signing"},"Code signing"),Object(l.b)("p",null,"Signing your app assures users that it is from a known source and the app hasn\u2019t been modified since it was last signed. Before your app can integrate app services, be installed on a device, or be submitted to the App Store, it must be signed with a certificate issued by Apple."),Object(l.b)("p",null,"A full guide is available on the fastlane doc, describing the best approaches for your ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/codesigning/getting-started/"}),"code signing process"),"."),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"match")," is probably ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://codesigning.guide/"}),"the best solution"),".",Object(l.b)("br",{parentName:"p"}),"\n","Because we don't want to revoke our existing certificates, but still want an automated setup, we will use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/codesigning/getting-started/#using-cert-and-sigh"}),"cert and sigh"),"."),Object(l.b)("p",null,"Add the following lines to your ",Object(l.b)("inlineCode",{parentName:"p"},"Fastfile"),", just after the ",Object(l.b)("inlineCode",{parentName:"p"},"increment_build_number")," function and before ",Object(l.b)("inlineCode",{parentName:"p"},"build_app")," (Note that you will need to replace some information):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'    get_certificates( # Create or get certificate, and install it\n      output_path: "./builds" # Download certificate in the build folder (you don\'t need to create the folder)\n    )\n    get_provisioning_profile( # Create or get provisioning profile\n      output_path: "./builds",  # Download provisioning profile in the build folder\n      filename: "provisioning.mobileprovision" # Rename the local provisioning profile\n    )\n    update_project_provisioning( # Set the project provisioning profile (related in Xcode to the General > Signing Release section)\n      xcodeproj: "Boilerplate.xcodeproj",\n      target_filter: "Boilerplate", # Name of your project\n      profile: "./builds/provisioning.mobileprovision",\n      build_configuration: "Release"\n    )\n    update_project_team( # Set the right team on your project\n      teamid: CredentialsManager::AppfileConfig.try_fetch_value(:team_id)\n    )\n')),Object(l.b)("p",null,"Then, we need to configure the provisioning profile for the build step."),Object(l.b)("p",null,"Add the following lines to your ",Object(l.b)("inlineCode",{parentName:"p"},"Fastfile"),", inside the ",Object(l.b)("inlineCode",{parentName:"p"},"build_app")," function, just after the ",Object(l.b)("inlineCode",{parentName:"p"},"scheme")," parameter (Make sure you add a ",Object(l.b)("inlineCode",{parentName:"p"},",")," after the ",Object(l.b)("inlineCode",{parentName:"p"},"scheme")," parameter):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'    clean: true,\n    export_method: "app-store",\n    export_options: {\n      provisioningProfiles: {\n          CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier) => CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier) + " AppStore" # Value of this parameter is the name of the Provisioning Profile. By default, it will be "{bundleId} AppStore"\n      }\n    },\n    build_path: "./builds",\n    output_directory: "./builds"\n')),Object(l.b)("p",null,"Thanks to this the Certificates and Provisioning Profile will be automatically created when you will create a beta build!",Object(l.b)("br",{parentName:"p"}),"\n","\ud83d\ude80 You are now ready to create your first beta build."),Object(l.b)("h3",{id:"creating-a-beta-build"},"Creating a beta build"),Object(l.b)("p",null,"Creating a beta build and uploading it on TestFlight is now really easy.",Object(l.b)("br",{parentName:"p"}),"\n","Just type the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ cd my-project/ios\n$ fastlane beta\n")),Object(l.b)("h2",{id:"android"},"Android"),Object(l.b)("h3",{id:"prerequisites-1"},"Prerequisites"),Object(l.b)("p",null,"Before continuing make sure you have:"),Object(l.b)("ul",{className:"contains-task-list"},Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","A Google Play Console ",Object(l.b)("em",{parentName:"li"},"admin")," account and its username (email, for example ",Object(l.b)("inlineCode",{parentName:"li"},"dev-team@yourcompany.com"),") and password"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Create your application in the Google Play Console (unlike for iOS Fastlane cannot do that for you)"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Use the right ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"../android/.gitignore"}),".gitignore")," file inside the ",Object(l.b)("inlineCode",{parentName:"li"},"android")," directory (if you are using this boilerplate you are good to go)"),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.fastlane.tools/getting-started/android/setup/#collect-your-google-credentials"}),"Collect your Google Credentials"),Object(l.b)("br",{parentName:"li"}),"\u26a0\ufe0f In the Google Play Console, add the parameter ",Object(l.b)("inlineCode",{parentName:"li"},"&hl=en"),' at the end of the URL (before any #) to switch to English. In some languages, the "Create Service Account" will not be available.\nDownload the JSON key file, and copy it into ',Object(l.b)("inlineCode",{parentName:"li"},"my-project/android/key.json")),Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Install ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-1"}),"all dependencies")," for macOS and Android")),Object(l.b)("h3",{id:"setting-up-1"},"Setting up"),Object(l.b)("p",null,"First you need to set up Fastlane for your android project:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ cd my-project/android\n$ fastlane init\n")),Object(l.b)("p",null,"Fastlane will automatically detect your project and ask for any missing information."),Object(l.b)("p",null,"The following questions will be asked:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Package Name (com.krausefx.app)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Our answer is ",Object(l.b)("inlineCode",{parentName:"li"},"com.tcm.boilerplate")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Path to the json secret file"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Type ",Object(l.b)("inlineCode",{parentName:"li"},"key.json")," (path to the file previously created in the Prerequisites step)"))),Object(l.b)("li",{parentName:"ul"},"Download existing metadata and setup metadata management?",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"y"))))),Object(l.b)("p",null,"Fastlane will then give you some information about git, the files it will create, etc. Just type ",Object(l.b)("inlineCode",{parentName:"p"},"enter")," to continue."),Object(l.b)("p",null,"Congrats! Fastlane has created some files.",Object(l.b)("br",{parentName:"p"}),"\n","If you are using Git, commit all generated files."),Object(l.b)("p",null,"Once the setup has finished you can see a new folder inside the ",Object(l.b)("inlineCode",{parentName:"p"},"android")," folder:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{})," - fastlane/\n   - Appfile\n   - Fastfile\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Appfile")," contains identifiers used to connect to the Google Play Console and the link to the ",Object(l.b)("inlineCode",{parentName:"p"},"key.json")," file.",Object(l.b)("br",{parentName:"p"}),"\n","You can read more about this file ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/advanced/#appfile"}),"here"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Fastfile")," contains all actions you can launch.\nYou can read more about this file ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/actions"}),"here"),".",Object(l.b)("br",{parentName:"p"}),"\n","A ",Object(l.b)("inlineCode",{parentName:"p"},"beta [lane](https://docs.fastlane.tools/advanced/lanes/)"),", a ",Object(l.b)("inlineCode",{parentName:"p"},"deploy lane")," and a ",Object(l.b)("inlineCode",{parentName:"p"},"test lane")," are available by default.  "),Object(l.b)("p",null,"You can remove the ",Object(l.b)("inlineCode",{parentName:"p"},"deploy lane")," to avoid some mistakes, and replace the ",Object(l.b)("inlineCode",{parentName:"p"},"beta")," lane by the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'  desc "Submit a new Beta Build to Play Store"\n  lane :beta do\n    store_password = prompt(text: "Signing Store Password: ", secure_text: true)\n    key_password = prompt(text: "Alias Key Password: ", secure_text: true)\n    releaseFilePath = File.join(Dir.pwd, "..", "my-release-key.keystore")\n    gradle(task: \'clean\')\n    gradle(\n      task: \'assemble\',\n      build_type: \'Release\',\n      print_command: false,\n      properties: {\n        "android.injected.signing.store.file" => releaseFilePath,\n        "android.injected.signing.store.password" => store_password,\n        "android.injected.signing.key.alias" => "my-key-alias",\n        "android.injected.signing.key.password" => key_password,\n      }\n    )\n    upload_to_play_store(\n      track: \'internal\'\n    )\n')),Object(l.b)("p",null,"As you can see, we need to sign our APK with a signing key.\nDon't worry, we will generate it in a moment, let's just explain what the lane do."),Object(l.b)("p",null,"First, script ask the user two values : signing store and alias key passwords, with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/actions/prompt/"}),Object(l.b)("inlineCode",{parentName:"a"},"prompt"))," fastlane plugin.\nAsking the user those passwords ensure that no secret keys are stored into your app.",Object(l.b)("br",{parentName:"p"}),"\n","Then, this lane clean your project, assemble the application, automatically injecting signing configuration at runtime, before uploading it in the Google Play Store.",Object(l.b)("br",{parentName:"p"}),"\n","Upload is made ",Object(l.b)("inlineCode",{parentName:"p"},"internally"),", that means only internal testers will be allowed to download the app. You can learn more about different test types ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.google.com/googleplay/android-developer/answer/3131213"}),"here"),"."),Object(l.b)("h4",{id:"generating-a-signing-key"},"Generating a signing key"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/signed-apk-android#generating-a-signing-key"}),"Official documentation")," well explained how to generate a signing key."),Object(l.b)("p",null,"You simply need to run the following :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n")),Object(l.b)("p",null,"This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key.",Object(l.b)("br",{parentName:"p"}),"\n","It then generates the keystore as a file called ",Object(l.b)("inlineCode",{parentName:"p"},"my-release-key.keystore")),Object(l.b)("p",null,"Note: Remember to keep your keystore file private and never commit it to version control."),Object(l.b)("p",null,"Copy the generated ",Object(l.b)("inlineCode",{parentName:"p"},"my-release-key.keystore")," file into the root of ",Object(l.b)("inlineCode",{parentName:"p"},"android")," folder."),Object(l.b)("p",null,"You're now good to build and deploy !"),Object(l.b)("h3",{id:"creating-a-beta-build-1"},"Creating a beta build"),Object(l.b)("p",null,"\u26a0\ufe0f The first time you deploy your application, you MUST upload it into Google Play Console ",Object(l.b)("inlineCode",{parentName:"p"},"manually"),".\nGoogle don't allow to use theirs APIs for the first upload.",Object(l.b)("br",{parentName:"p"}),"\n","To do this, comment the three last lines of the ",Object(l.b)("inlineCode",{parentName:"p"},"Fastfile")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"#upload_to_play_store(\n#      track: 'internal'\n#    )\n")),Object(l.b)("p",null,"or create a new lane without those lines."),Object(l.b)("p",null,"\u2757 There is no official plugin to automatically upgrade android version code (unlike the iOS lane).",Object(l.b)("br",{parentName:"p"}),"\n","Before each deployment, be sure to ",Object(l.b)("inlineCode",{parentName:"p"},"manually")," upgrade the ",Object(l.b)("inlineCode",{parentName:"p"},"versionCode")," value inside ",Object(l.b)("inlineCode",{parentName:"p"},"android/app/build.gradle"),".",Object(l.b)("br",{parentName:"p"}),"\n","We are working on an automatic way to do this.  "),Object(l.b)("p",null,"Creating a beta build and uploading it on Google Play is now really easy.",Object(l.b)("br",{parentName:"p"}),"\n","Just type the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ cd my-project/android\n$ fastlane beta\n")),Object(l.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(l.b)("h3",{id:"stuck-at-bundle-install-or-bundle-update-running-fastlane-init"},"Stuck at ",Object(l.b)("inlineCode",{parentName:"h3"},"bundle install")," or ",Object(l.b)("inlineCode",{parentName:"h3"},"bundle update")," running ",Object(l.b)("inlineCode",{parentName:"h3"},"fastlane init")),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"fastlane init")," process is stuck when running ",Object(l.b)("inlineCode",{parentName:"p"},"bundle install")," or ",Object(l.b)("inlineCode",{parentName:"p"},"bundle update")," it may mean that ",Object(l.b)("inlineCode",{parentName:"p"},"bundle")," command is asking for root permissions.",Object(l.b)("br",{parentName:"p"}),"\n","You can stop the process and retry again with ",Object(l.b)("inlineCode",{parentName:"p"},"sudo fastlane init"),", however you will need to change back ownership of the generated files to your user when it finishes by running this command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ sudo chown <your-user> <files>\n")),Object(l.b)("h3",{id:"permission-denied-running-android-beta-lane"},"Permission denied running android beta lane"),Object(l.b)("p",null,"If you have a ",Object(l.b)("inlineCode",{parentName:"p"},"Permission denied")," issue on an android beta build, please run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ chmod a+x /my-project/android/gradlew\n")),Object(l.b)("h3",{id:"fastlane-init-failed"},"Fastlane init failed"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'fastlane init failed\n["The request could not be completed because:", "Could not receive latest API key from App Store Connect, this might be a server issue."]\nSomething failed while running `fastlane init`\nTried using Apple ID with email \'dev-team@yourcompany.com\'\nYou can either retry, or fallback to manual setup which will create a basic Fastfile\nWould you like to fallback to a manual Fastfile? (y/n)\n')),Object(l.b)("p",null,"Answer ",Object(l.b)("inlineCode",{parentName:"p"},"n"),", and retry previous steps with a correct Apple ID and password.",Object(l.b)("br",{parentName:"p"}),"\n","Make sure you are connected to internet."),Object(l.b)("hr",null),Object(l.b)("p",null,"If you need more informations, don't hesitate to read the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.fastlane.tools/"}),"fastlane documentation")))}p.isMDXComponent=!0},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return a?i.a.createElement(m,r(r({ref:t},c),{},{components:a})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);