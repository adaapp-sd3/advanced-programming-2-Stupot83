# farm-manager-app

Farm Manager Game

To run the Farm Manager Game, you will need to make sure you have mongodb installed, and that you are able to access port 27017.

### MongoDB

MongoDB is a document database which stores data in flexible, JSON-like documents. You will need to install Mongo locally. To do this, please visit the official download page at **https://www.mongodb.com/download-center/community** and
download the correct version of the community server for your operating system. There’s a link to detailed, OS-specific installation instructions beneath every download link, which you can consult if you run into trouble.

### MongoDB GUI

You should also install Compass, the official GUI for MongoDB at **https://www.mongodb.com/download-center/compass**. This tool helps you visualize and manipulate the data, allowing you to interact with documents with full CRUD functionality. This will allow you to check the user credentials created when you join up to the game.

### Check Installed Correctly

It is worth checking that you have node and npm installed and the version that your
system is running. To check node is installed and the versioon you have, type:

`node -v`

and for npm type:

`npm -v`

This will output the version number of each program (`8.11.3` and `6.3.0` respectively at the time of writing).

To check that your local installation of Mongo has worked and ther version, type:

`mongo --version`

This should output a bunch of information, including the version number (`4.0.3` at the time of writing).

### Check Database Connection Using Compass

Type the following command into a terminal:

`mongod`

Next, open Compass. You should be able to accept the defaults (server: localhost, port: 27017), press the CONNECT button, and establish a connection to the database server.

Note that the databases `admin` and `local` are created automatically and can be ignored.

### Install the App and Setup Dependencies

To get the app installed, fork the repo in GitHub. Then, clone it to your own computer. Run `npm install` to get all the dependencies set up. You will need to run `npm install` in the client folder as well to add the react dependencies. This should add everything that is needed to run the Farm Manager Game locally, including mongoose which helps create the mongo database schemas for the User and Farm.

### Running the App

Run `npm run dev` to start the app. This allows the frontend and the backend to run concurrently. You should be directed to the landing page, and prompted to either register or login. Once you have created a user, you will be able to login and use the app and see it's various functionality from the frontend. At the moment, the load and save game functions are disabled as more development time is required. If you click off a screen or the app for any reason, it will remember your details so you do not need to login again. You cannot save your game at this stage so will need to continue playing until you are ready to stop.

> **Note:** running `npm run dev` will make the app automatically restart when you
> make changes - no need to constantly stop and restart the server

You can also use the Compass GUI to see the information that is being entered into the Mongo Database and how it changes when data is updated or deleted, or when you follow/unfollow a user for example. This confirms the backend functionality.

When you have finished testing the app, you can also use the Compass GUI to drop the Users and Farms collections when you are finished testing the app, or can drop the database as a whole.