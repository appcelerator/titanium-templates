# Titanium Angular App

Welcome to your new project!

## Quick Start

To build your app, run the Titanium CLI "build" command.

	ti build -p android

	ti build -p ios

## Project Overview

```sh
.
├─ app/
│  ├─ assets/
│  │  ├─ android/               # Android launch screens
│  │  └─ images/                # Common images
│  │     └─ angular.png
│  ├─ src/
│  │  ├─ app.component.html
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ main.aot.ts
│  │  └─ main.ts
│  └─ vendor/
│     └─ vendor.js
├─ hooks/
│  └─ pre-compile.js            # Titanium CLI v5 hook plugin
├─ platform/                    # Native platform specific files
│  ├─ android/
│  │  ├─ res/
│  │  │  └─ values/
│  │  │     ├─ colors.xml
│  │  │     └─ styles.xml
│  │  └── AndroidManifest.xml   # Android SDK settings
│  └─ ios/
│     └─ Info.plist             # iOS SDK settings
├─ .gitignore                   # File patterns to exclude from git version control
├─ DefaultIcon.png              # An icon used to generate icons
├─ package.json                 # npm manifest for registering dependencies
├─ README.md
└─ tiapp.xml                    # Titanium project settings
├─ tsconfig.aot.json
├─ tsconfig.json
└─ webpack.config.js
```

## Documentation

For more information:

 * [Titanium & Angular Guide](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_and_Angular)
 * [Titanium SDK Guide](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK)
   * [Getting Started](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_Getting_Started)
   * [Welcome To Titanium!](https://docs.appcelerator.com/platform/latest/#!/guide/Welcome_To_Titanium!)
   * [Example Applications](https://docs.appcelerator.com/platform/latest/#!/guide/Example_Applications)
 * [Titanium API](https://docs.appcelerator.com/platform/latest/#!/api/Titanium)

## Getting Help

If you have questions, feel free to reach out on [TiSlack](https://ti-slack.slack.com/) or
[Stack Overflow](https://stackoverflow.com/tags/appcelerator).

If you stumble across a bug, please open a [JIRA ticket](https://jira.appcelerator.org/) and let us know!
