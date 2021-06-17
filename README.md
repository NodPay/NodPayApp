# NodPayMobile

This project is using React Native Version 0.64.2.
Lists of npm scripts and packages/libraries/dependencies can be found in **package.json** file.

# How to Run the Project - Android

1. Download/clone the project
2. Open command prompt/terminal and go to the project directory
3. On command prompt, type **npm install** (make sure you already have nodejs installed, if not, download in https://nodejs.org/en/download/)
4. Preparing the device:

- If you are using emulator, you can directly run the script in step 5.
- If you are using actual device, make sure the developer option is already enabled, and then connect your phone to PC using USB cable.

5. On command prompt, run **npx react-native run-android**.
6. The script will install apk in your phone/simulator.
7. You can check on the command prompt, wether there is server running or not. If the server is not running, run **npm start**

# How to Run the Project - IOS

1. Download/clone the project
2. Open command prompt/terminal and go to the project directory
3. On command prompt, type **npm install** (make sure you already have nodejs installed, if not, download in https://nodejs.org/en/download/)
4. Preparing the device:

- If you are using simulator, on command prompt, run **npx react-native run-ios**. The script will install application in your phone/simulator.
- If you are using actual device:
  a. Plug in your device via USB. Connect your iOS device to your Mac using a USB to Lightning cable. Navigate to the ios folder in your project, then open the .xcodeproj file. \
  \
  If this is your first time running an app on your iOS device, you may need to register your device for development. Open the Product menu from Xcode's menubar, then go to Destination. Look for and select your device from the list. Xcode will then register your device for development.\
  \
  b. Register for an Apple developer account (https://developer.apple.com/) if you don't have one yet.\
  Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).\
  Repeat this step for the Tests target in your project.\
  \
  c. If everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices pane (⇧⌘2). You can now press the Build and run button (⌘R) or select Run from the Product menu. Your app will launch on your device shortly.

5. You can check on the command prompt, wether there is server running or not. If the server is not running, run **npm start**
