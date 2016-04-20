# Login Authuntication in StrongLoop
This is an hello kind of project build on strongloop(Node.js) which inculdes role base security which allows user to access the pages and api on the basis of their assign role.

Helpfull for those how looking for sample code for same.

**Installing and Configuring StrongLoop**

First install [strong loop](https://docs.strongloop.com/display/SL/Installing+StrongLoop)

Prerequisites:

- Compiler tools See Installing [compiler tools](https://docs.strongloop.com/display/SL/Installing+compiler+tools#Installingcompilertools-Windows)
- [Git](http://git-scm.com/download)
- [Install Node.js](http://nodejs.org/download/)
- Reinstall npm ```npm install -g npm```
- Install StrongLoop ```npm install -g strongloop```

After doing doing all these stuff restart your system.

**Creating first project**

use ```slc loopback``` on comand prompt on your specified folder path where you want to create project
it will create project solution in folder which consist:

1. server directory : server.js - Main application script; see below.
2. config.json: Global application settings, such as the REST API root, host name and port to use, and so on. See config.json.
3. model-config.json: Binds models to data sources and specifies whether a model is exposed over REST, among other things.  See model-config.json.
4. datasources.json: Data source configuration file. See datasources.json.
5. client directory: empty except for a README stub
6. common/models directory: Created when you create a model with the model generator, apic create --type model.
A JSON file and a JavaScript file for each model (for example, my-model.json and my-model.js).

**Usefull command to work with StrongLoop**

1. Create project ```slc loopback```
2. Create model ```slc loopback:model```
3. Run App ```node .```





