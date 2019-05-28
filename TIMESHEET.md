# Time Sheet (Total hours approx 90 hours)

## Things to Note

I decided to re-build the farm app from scratch using a MERN stack setup (Mongodb database, express server, react and nodejs). Through extensive reading and research, I was able to implement a system to run an express/node backend concurrently with a react frontend connected to a mongoDB database. I was able to implement a redux store setup with reducers to allow the user to be created in the database and persisted once logged in, meaning even if you accidentally clicked away, you would still be recognised as the user data was persisted in localStorage. I attempted to set up allowing the game state to be converted and saved into the mongoDB database, meaning you could click the button to save your current game, and load it at a later stage if you came back to it. This proved to be too much due to the circular references of the various interdependent parts of the farm game. If I had another 20 hours dev time I would certainly like to revisit this as I believe it is something eventually that I could get working.

For the game itself, I spent some time researching Typescript and P5, to thoroughly get to grips with the inheritance of classes and advanced features such as enums, which I managed to implement as a way of changing the class of the field area in which the tractor is visiting. I have implemented 10 different animal types and ten different plant types, as well as some greener options with solar panels and green gas generators for the eco-friendly among us. I also added the option to change an area to a petting zoo for that type of animal and then back again if no longer required.  I decided to stay with class components rather than react hooks as this is all a new language to me and was better to implement this way.

I also added in a Weather Api, making use of React-Open-Weather, which uses the APIXU weather Api. With more time, I would have liked to have been able to make this affect crop growth, health etc, and use P5 to draw weather effects on the screen based on the real weather. I also made a Crypto Currency Exchange, which hooks into real-time data. The plan would have been to make this something you could exchange goods and cash for to make trading more interesting. I am proud that through the marketplace you are able to buy and sell goods, and see the budget and inventories change accordingly. I researched the use of modals to make the marketplace more interactive and also used this for the game instructions. 

I spent extensive time refactoring the visual side of the game especially the dashboards, and adding fun music and video to parts such as the marketplace, intermediary screens etc. I was able to learn how to use various additional resources such as react-sound and video-react. For the styling of the app, I researched and then used react-bootstrap and materialize, as well as standard css tricks I have learnt across the last year. There is still plenty more I would like to add to the game if I was to have more dev time to do so, such as maybe making it more fun with additional classes such as dinosaurs to give you a Jurassic Park option. I would also have liked to have been able to add more sound effects into the game, such as the noise of the tractor when it moves.

If I had more time, I would also like to extensively test the app with unit testing and continuous integration. This would allow me to further iron out any subtle nuances and improve the play and feel of the game. 


## Day 15 (approx 5 hours)


### (commit 146d6e321c908e8711c96fa3229d3c305b64a8be, 28th May)

💄🚧⚗️ Major work to allow changes to health and hunger when collecting…

… produce from animals or when they are moving in their areas, and to warn when they are getting too hungry or too frail to feed them and let them rest ⚗️🚧💄

### (commit 48845e6794dbdb38115151fbc0950cd0eb760a17, 28th May)

💄🚧⚗️ Set up field classes so that you select the type of field when s…

…etting it up, add pettingzoo and income when with customers in the field ⚗️🚧💄


## Day 14 (approx 5 hours)


### (commit f8e3ed2cddc701f9ec308410d423a67181f6ecea, 25th May)

💄🚧⚗️ Setup so that you can view average hunger for animals and be war…

…ned when to feed them when viewing the field, and correct buy feeds to work correctly ⚗️🚧💄

### (commit 4d14044099faa437ea94da4658fea80f778b1444, 25th May)

🚧💄⚗️ Add average age of crops and only allow collection of them when …

…they are ready based on real-life values in days ⚗️💄🚧

### (commit b7eefbf6975f228389abd88b9594d7fc3175814b, 25th May)

💄⚗️ Finish crypto exchange for market including images and styling ⚗️💄


## Day 13 (approx 5 hours)


### (commit d940c11331e3ce32e243cafc428735a123bedbf5, 24th May)

🍱⚗️ Added Crypto Currency to Market Dashboard ⚗️🍱

### (commit 5429b1f0b14117235fcae9d2cb5608339e85ce3e, 24th May)

✅ Fix code to remove eslint warnings and errors ✅

### (commit cbb2a35c2ab68252b087a323dea935ff2dc57126, 24th May)

:clown: Emergency code changes as login and register disabled :clown:


## Day 12 (approx 5 hours)


### (commit 8fa237d69258f112c2236ccd2bd7d8a8b7ee93c6, 23rd May)

💄🚧⚗️ Refactor code to ensure animals can be placed in field and are s…

…till constrained 💄🚧⚗️

### (commit 64518faf5a309a37bc5557c4e539089b2b0c300f, 23rd May)

💄🚧⚗️ Add 7 more crop types including images and updates to all dashbo…

…ards ⚗️🚧💄

### (commit b3063c5c723d18bef582755f5618a8801714508e, 23rd May)

💄🚧⚗️ Refactor and rework farmer dashboard to include tabs and rework …

…controls to use wasd instead of arrow keys ⚗️🚧💄

### (commit fee72eb57be2d575003dc5e2fd2a6c3ce28bb4da, 23rd May)

💄🚧⚗️ Huge rework of code to allow you to plant and harvest crops, pla…

…ce and recycle tech and update styling ⚗️🚧💄


## Day 11 (approx 5 hours)


### (commit 130ebbb6da5354f95b0bad45ed93d75bbdec27a1, 16th May)

🔥🎨 Remove unnecessary comments and code and restructure accordingly 🎨f…

…ire:

### (commit 24467ced7e2c88891cd7ffa5116cb5b71e54ba52, 16th May)

💄🚧alembic: Extensive restyling and restructuring of game screen and a…

…ssociated dashboards to fit on one screen only with no scrolling ⚗️🚧💄

### (commit c2a6d06ee7b41212230bff7d5b0e4834b12df4f4, 16th May)

💄⚗️ New styling for farmer and field dashboards, make field dashboard …

…pop out in a modal and add icons for health and hunger ⚗️💄

### (commit 8d5186b54fbfebb59c7e3d8520793e4ea56d7696, 16th May)

💄🚧 Finish restyling market modal and add new song to it 🚧💄


## Day 10 (approx 5 hours)


### (commit 64427a6278242e6773eaf17ef831e49c2f5356a8, 15th May)

💄🚧 Initial work to get game state saved into mongodb 🚧💄

### (commit 9ef749e93b8085fa1e5304d3f29948fb9d2bbca9, 15th May)

🚧💄 Move Weather Dashboard into top navbar to give more room and resty…

…le weather dashboard and top navbar 💄🚧

### (commit d2efe652eec7842c11e6585bf2442a089e7349e5, 15th May)

💄🚧 Styling improvements to dashboards and modals and initial setup fo…

…r tech and crop abstraction and initial tech and crop models 🚧💄


## Day 9 (approx 5 hours)


### (commit 6b7cba0ccb27ab9e4ffb3b60c34703684898565f, 14th May)

🚧💄 Begin construction of files for handling crops 💄🚧

### (commit 38460d49d36e91ebf7c3413f61cb43bab9071790, 14th May)

💄🚧 Further styling and images for market dashboard 🚧💄


## Day 8 (approx 5 hours)


### (commit 3fc810548fd7e934decede1e2eff8fd8aa42b131, 13th May)

💄🚧 Add song to marketplace that plays and loops while in modal and ad…

…ditional styling to modal 🚧💄

### (commit 1255675a0deca7732ff95a4e9567d81504088438, 13th May)

🚧✨ Add facility to get half or quarter meat as well as full meat and …

…update dashboards accordingly ✨🚧

### (commit f32314f8a1e4ae013f0b0585c41c2fe0c218cddd, 13th May)

🚧💄⬆️ Add react-open-weather and set up weatherdashboard to work for c…

…ity of london ⬆️💄🚧

### (commit 0425bceee92e15e5bb365637526aca4901738aa7, 13th May)

🎨 Format all files with prettier 🎨


## Day 7 (approx 5 hours)


### (commit 90ce7e03d59aee8b13a10d56ba604f573a231dc4, 11th May)

🚧 Initial work to set up weather dashboard 🚧

### (commit dc8581102fd2c90a4f9dbbc1139dc3645f213f3b, 11th May)

⚗️🥚 Initial work adding songs and video to the game to increase fun f…

…actor 🥚⚗️

### (commit b4076a4535578121318342220a632e899d977af7, 11th May)

💄🚧 Finish styling landing page and add route, page and styling for ga…

…me instructions 🚧💄


## Day 6 (approx 5 hours)


### (commit 85d1b2a4a62d9fa83bc47e560d3179cb0bee5b0a, 10th May)

💄🚧 Styling to landing page and further styling to other pages includi…

…ng images 🚧💄

### (commit fb2c2fb3be64ecaac4a1d8f88940e144d9aa2749, 10th May)

💄 Further styling changes to dashboards and market modal 💄

### (commit 8e22c1c5b8dba1474590b485ba5fe9445732f807, 10th May)

💄🚧 Add new routing for game menu before playing the game and addition…

…al styling for altered and new screens 🚧💄


## Day 5 (approx 5 hours)


### (commit 3eb3dbe08466be553e32b1bc2a206537147f9de1, 9th May)

🚧💄:arrow-up: Add React Bootstrap and construct market dashboard into …

…pop out modal screen with responsive tabs to select buy/sell of different items :arrow-up:💄🚧

### (commit 2b1e7f6eed5d8a031d3c8de7e641a0c36bee8192, 9th May)

🚧 Add new animals and products to market dashboard and ability to buy…

… and sell them 🚧

### (commit 283d121e701edec62409a84882128f47ac911b9f, 9th May)

🚧 Update farmer dashboard to incorporate new animals and products 🚧

### (commit bb59c9baa6bfddb44e5506f258b6ba2b3f5da796, 9th May)

🚧 Update field dashboard for new animals 🚧

### (commit 8b74ef92b1c457bee6543fac7d002be23303cf9a, 9th May)

🚧 Add ducks, geese and llamas to farm 🚧

### (commit 3d8055ed4910e4a33b8709ed4f1a375633b84a0d, 9th May)

♻️ Tidy up abstract code and move animal behaviour logic into animal.ts

♻️


## Day 4 (approx 5 hours)


### (commit b049ddcf926793325d3454064c7f20d8015a4a10, 8th May)

🚧 Add details for field dashboard and buying and selling meat 🚧

### (commit 369ebee1c05ec911dd926422404453c1ebc01832, 8th May)

✅ Check new animals populate in hardcoded fields ✅

### (commit 2fb3011da52fce4973468c5b64e961679757d80f, 8th May)

:clown:🔥 Remove duplicated files from schema folder and import new an…

…imals correctly 🔥:clown:

### (commit b56c4032a75b1414fa7292fa13460fcff420795c, 8th May)

🚧 Add buy and sell options and code to make it work into market 🚧

### (commit 4200c80c616d3eaf548ee0ccb68bb582ee74fea8, 8th May)

🚧💄 Finish adding details for new animals and refactor and amend Farme…

…rDashboard accordingly 💄🚧

### (commit 0b170245a903a062bb4224c0dc2745b1fa51746c, 8th May)

🚧 Add details for crocodiles, pigs, ostriches and salmon 🚧

### (commit 1960b414e0d0d2502af06fcd5d1b448feca50af6, 8th May)

🚧 Add extra fields for animals, greengas and solar panels 🚧


## Day 3 (approx 5 hours)


### (commit a6997fd0423b585f4ae6fe1779e40a9346e79df8, 7th May)

💄 Additional styling to Farmer and Field Dashboards 💄

### (commit 3c34cb1736f6f3b580728b8445173ee2ea7c01c3, 7th May)

💄 Styling for login, register, dashboard and navbar, addition of trac…

…tor emojis and set up farm canvas with dry stone wall exterior 💄

### (commit 1e5735e05915d457451a4bc78101fcc55920d839, 7th May)

🚧💄 Add background image and style landing menu, login and register me…

…nus 💄🚧


## Day 2 (approx 5 hours)


### (commit bfa34d309bba4ae1061edfbcefd5d7cc8e2e3769, 6th May)

💄 Initial setup ready for CSS styling of game canvas and dashboards 💄

### (commit 772e9414a942c9b1592cc3e086a77b2ab5390ab6, 6th May)

:clown: Actually add new image and css files missed on last commit :c…

…lown:

### (commit 9f286ec252e0ad45725d1620b0f706e91db9db1c, 6th May)

🏗 Get basic p5 to display and dashboard and add new css files ready f…

…or additional styling 🏗

### (commit 848a01e17c49bfcc0a5fc3053179f364885cce82, 6th May)

🏗 Add game files and dependencies required 🏗

### (commit d115b0b72fc425e9b6fe22f00d5b264c4e65d857, 6th May)

♻️ Refactor User schema code ♻️

### (commit 5108b901f81872ac6f45858e0fedde7dbb5e4571, 6th May)

:clown: Re-add models folder and User.js in correct place :clown:

### (commit a2066e777da5931c3a7bdf766585d042801e4c78, 6th May)

🏗 Add p5setup, tsconfig, favicon image and react-app-env from original 🏗


## Day 1 (approx 5 hours)


### (commit f33a6c4771facd4f0ddb7571609c1e6dbb587bd0, 3rd May)

🎉 Completion of fully working register and login system for app with …

…authentication and localStorage and data in mongo database 🎉

### (commit ba3a47f793d0d4ff2db6ef9cc982f36d2e420299, 3rd May)

🏗 Add private route setup for logged in user and dashboard 🏗

### (commit f83cd16e639839f4d793b491afe455ed756325cb, 3rd May)

🏗 Set up error messages in UI for login and regi…

…ster and create dashboard component 🏗

### (commit 32808737f5eb4a7c389c0afc7dbe5e2f6da98b83, 3rd May)

🏗 Setting up connect(), mapStateToProps, and defining propTypes 🏗

### (commit 88c0e2999061655f8c4f41eb06b4b42f89256af1, 3rd May)

🏗 Finish frontend construction and set up redux 🏗

### (commit a4d5ad8b52a72e350f0602254c02a1adf0017ca0, 3rd May)

🏗 Set up layout and react-router for login and register and landing p…

…age with top navbar 🏗

### (commit a6d27051c55a3545bc7e931035b33dc5ca8f0bef, 3rd May)

🏗 Remove React logo and unnecessary code, add bootstrap link and src …

…files to react app index.html 🏗

### (commit f5ad329aafdb226a5ff72437cc60debaad041a7f, 3rd May)

🏗 Add react and associated dependencies ready to build frontend 🏗

### (commit 5e37d518208f6d4fb58f0e00ab4d1f60c86ef9c1, 3rd May)

✅ Successfully test register and login endpoints using Postman ✅

### (commit f626cc0dff75a318350425747261b5b1e4ef54d5, 3rd May)

🏗 Setup login endpoint for app 🏗

### (commit c448c59867162f74240181d87596ee5057f1f2de, 3rd May)

🏗 Setup passport 🏗

### (commit f347463f046fcc86d796d5b408b8f4635d2d9e51, 3rd May)

🏗 Add code for user validation 🏗

### (commit 1b8b773baec99a4b08c8c569b7a0b63e8ae803e0, 3rd May)

🏗 Set up access to mongo and create user model 🏗

### (commit 8c2ea1980f0275a2a5a24acb5c76d73452de478d, 3rd May)

🏗 Set up backend dependencies ready to construct backend 🏗

### (commit 77eaee92b41648a09e5c80f70287fe5fea762bbe, 3rd May)

Initial commit
