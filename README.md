
## Tic Tac Toe

I worked on this cool Tic Tac Toe application as part of a job application process. The project was built using Ember.js for the front-end and Ruby on Rails for the back-end, I had no prior experience with either technology.


**Let's get our app running!**


1. Clone both repositories' game-implementation branches:
	- Front-end: https://github.com/zgreyling/tic-tac-toe-web-client/tree/game-implementation
	- Back-end: https://github.com/zgreyling/tic-tac-toe-api/tree/game-implementation

2. Install dependencies using NPM for the front-end and using Bundler for the back-end and run the applications:
	- Front-end:
		- [ ] Clone the repo
		- [ ] Switch to the game-implementation branch
		- [ ] Run `npm install` in the console
		- [ ] Run `ember serve` in the console
		- [ ] Go to http://localhost:4200 in a browser

	- Back-end:
		- [ ] Clone the repo
		- [ ] Switch to the game-implementation branch
		- [ ] Run `bundle` in the console
		- [ ] Run `rails db:migrate` in the console
		- [ ] Run `rails s` in the console
		- [ ] The server is available at http://localhost:3000


**Playing the game**


When the app is run for the first time, we have no game data in our database. A new game will be created and loaded. If game data exists when the app is refreshed or run again, the last game's data will be loaded and displayed. When a user creates a new game using the button on screen, the old game is deleted. This means our database will always only have one game saved, if not run for the first time, in which case no game data will exist in the database.


**Look and feel**


![Screenshot during gameplay](https://i.imgur.com/7RmEolX.png)
*During Gameplay*


![Screenshot after gameplay and there's a winner](https://i.imgur.com/soOrvqB.png)
*Game Over - Winner*


![Screenshot during gameplay and it's a draw](https://i.imgur.com/Jrtk35p.png)
*Game Over - Draw*


**Reflection**


*How I started*

I had no previous experience with or knowledge about Ember.js or Ruby on Rails when I started with this assignment. I started by going to the links provided in the assignment, I used the documentation to install what I needed and also to generate the initial files needed to run the front-end and the back-end. I felt like I knew what I had to do and I knew which steps to take but first I had to figure out how I'm going to do it with these technologies. Had the assignment been to use Vue.js or Node.js, it would have been a breeze. I created a very rough draft of the UI in the front-end and used various YouTube videos, Medium articles and Stack Overflow questions to help me figure out how Ember.js works, it was quite easy to make the connections between Ember.js and Vue.js, so I at least had a good idea about important key words to search for when I was stuck with something.
Next, I took a similar approach with the back-end and mostly followed some great YouTube tutorials about a totally irrelevant project but it gave me a good baseline to work with for my own API. I used Postman to play around with the end-points and to get an idea of how the requests should look, what data I get back in the responses etc. I worked on ideas for my data models and which columns will be needed in the database and then started working on the logic for the game.
I finally integrated the few end-points I needed with my front-end and put some effort into the styling of the game. Lastly I worked on the responsiveness of my web-client.


*Where I found key information*

I found most of my information on YouTube tutorials. I found Ember.js' documentation to not be that great and a lot of the Stack Overflow questions' answers seemed to have already been outdated. I also found a few nice articles on Medium. I gathered bits and pieces all over and started refining my searches the further I went and needing more specific information.


*Which parts were easy*

The easiest parts were working with Ember.js once I got the hang of it a little bit and could make the connection to similar concepts in Vue.js, setting up a basic API with Ruby on Rails' scaffolding was also really easy and so convenient compared using something like Node.js, where a lot more manual work has to be done before an end-point is available.


*Which parts were hard*

I found Ruby on Rails' syntax quite hard to get used to, I spent a lot of time trying to figure out how simple concepts work. I also had some trouble with the logic behind the game, I saw a few other projects online but I wanted to write my own logic for the game and not copy from someone else. I also struggled with knowing when to stop, there's quite a lot of things I wanted to add to the project but I think I spent a fair amount of time on it already.


*What I can improve*

I learned a lot about Ember.js and Ruby on Rails in a short amount of time but I don't think I used best practices and all concepts like they were intended to be used. There are so many things I didn't even use in my app but now I'm definitely keen to learn more and hopefully soon be confident enough to add these technologies to my resume. I have a lot of cool ideas for the application in terms of functionality as well, maybe I'll continue working on this project in the future. If I had more time, I would add:
- Allow users to enter their names and choose "X" or "O" for the game, also display the player names along with the selected symbol
- Have multiple games saved in the database, users can save their games and give it a name and when the app is refreshed, users have the option to load a saved game or start a new one
- Add a sophisticated login screen for users and keep tracks of game history
- Add nice pop-ups for interaction with users instead of static text
- Improve how routing is handled in the web-client
- Add a 404 page and also improve the index page of the web-client
- Add a loading indicator to display to the user when we are waiting for a response from the server
- Add an API helper in the web-client where I can add interceptors and also globally set the base URL of the REST API
- Include a Postman collection of the end-points
- Add a Docker Compose setup for easy deployment

There really is a lot of things that can be added to this simple application to take it to the next level and make use of many more sophisticated concepts in both Ember.js and Ruby on Rails.


*What I enjoyed*

I enjoyed learning new technologies and facing old challenges in a new way. All of the challenges I faced and conquered before using familiar tech stacks. I liked working with Ember.js and will continue to learn more about the framework. This was a fun project and time flew by while I was working on it but it remined me that I'm resilient and creative, and I enjoy learning and solving problems.