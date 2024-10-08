    System requirements: Document specifications of the system being used for React Native development. This includes the CPU, RAM size, and Windows version. 

    Operating System: Windows 11 

    CPU: AMD Ryzen 7 5800H 

    RAM: 16GB  

 

    Installation instructions: Include step-by-step instructions for installing the necessary tools and dependencies required for the framework, such as Node.js, and the React Native CLI. 

    NodeJS can be downloaded here: https://nodejs.org/en/download/package-manager 

     

 

    Configuration steps: Detail any necessary configuration steps required to set up the framework, such as setting environment variables or configuring project settings. 

    Recommended to make a folder at the C: Drive for ease of navigation and usage. 
     

    Project creation: Outline the steps involved in creating a new project using the framework, including any necessary setup or configuration. 

    To start, open windows powershell and go into the directory of the project folder (ie: cd c:\cprg303) 

    Type npx create-expo-app@latest –template to create a new app with templates and select blank 

    Name your app 

    Now to install expo router 

    Install dependencies npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar 

    Inside package.json, change "main": "expo/AppEntry.js", to "main": "expo-router/entry" 

    Add "scheme": "your-app-scheme" into app.json replacing the your-app-scheme with whatever the application name is 

    Now run npx expo install react-native-web react-dom 

    Now run npm start and you can launch up the application 

    Tap w to open the web preview 

    Then click on the hyperlink to make a new home page. 
     

    Resources: Provide links to additional resources and documentation that can be used for reference and further learning, such as official documentation, tutorials, and Stack Overflow answers. 

    Expo router instructions: https://docs.expo.dev/router/installation/ 
