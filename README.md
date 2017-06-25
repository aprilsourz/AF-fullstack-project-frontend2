

# Arlo Feirman - Todo List App

[Link to app](https://arlofeirman.github.io/AF-fullstack-project-frontend2/)

Second project for the Web Development Immersive at General Assembly. I built the app over a 5-day sprint.
The server may take 15 to 30 seconds to respond when you first create an account.
The back end is hosted on Heroku, which puts the API to sleep after 30 minutes of inactivity.
Fore more information [click here.](https://devcenter.heroku.com/articles/free-dyno-hours)

Todo list app which uses an API that I built with Rails. A user can create an account, sign in, sign out, and change password. As well as create, edit, and delete items from their todo list. All user actions are persisted in a PostgreSQL database.

### Wire Frames
-  [Wire Frame 1](http://i.imgur.com/tTYikxC.jpg)
-  [Wire Frame 2](http://i.imgur.com/fq5xNlj.jpg)


## Technologies Used

- Javascript
- Jquery
- Handlebars.js
- Html
- Css
- Bootstrap
- [Custom Api I Built](https://github.com/arlofeirman/AF-fullstack-project-backend)

## User Stories

Given I am a user,
When I first enter the page,
Then I should be able to create an account.

Given I am a user,
If I have made an account or already have an account,
I should be able to sign in.

Given I am a user,
If I am signed in,
I should be able to sign out.

Given I am a user,
If I am signed in,
I should be able to change my password.

Given I am a user,
When I sign in,
I should see all my todo items.

Given I am a user,
Once I have signed in,
I should be able to create a todo item.

Given I am a user,
If I have created to do items,
I should be able to delete a todo item.

Given I am a user,
I should be able to edit my todo items.

## Process

[I built the API first.](https://github.com/arlofeirman/AF-fullstack-project-backend)

From the user stories I made a list of features.
Before starting a featue I broke it into smaller parts and worked on them sequentially.


I started off with all of the HTML elements on the page. For each feature I 
made sure the jQuery events were triggering the right functions and the HTTP
requests were hitting the correct endpoints. I tested the AJAX requests in the console
before I worked on rendering the JSON to the page.

I seperated the three main pages into handlebars templates and wrote
functions to swap them in and out of the DOM. In a previous project I used a the jQuery .show and .hide methods for the UI. 
Handlebars proved to be a much cleaner way to maipulate the DOM.

## For Future Iterations
- Todo list for each day of the week
- Colors for todo items
