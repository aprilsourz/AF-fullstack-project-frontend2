

# Arlo Feirman - Todo List App

[Link to app](https://arlofeirman.github.io/AF-fullstack-project-frontend2/)

This is a basic to do list app. It uses a custom an API
that I built with Rails. It supports creating an account and storing
list items in a database for that user. When the user signs in, their
to do list will be in the same state it was when they last left the app.
A user can create, edit and delete list items as well as change their password.

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
When I sign in and I have previously created todo items,
I should see all my to-do items.

Given I am a user,
Once I have signed in,
I should be able to create a to-do item.

Given I am a user,
If I have created to do items,
I should be able to delete a to-do item.

Given I am a user,
after I have created a to-do item,
I should be able to edit that to-do item.

## Process

[I built the custom API first.](https://github.com/arlofeirman/AF-fullstack-project-backend)
I started this project by writing user stories and making wire frames.

From the user stories I made a list of features.
Before starting a featue I broke it into smaller parts and worked them sequentially.


I started off with all the HTML elements on the page. For each feature I 
made sure the jQuery events were triggering the right functions, and the ajax
requests were returning the right JSON. I tested my ajax requests in the console
before I worked on rednering the JSON on the page.

I seperated the three main pages into handle bars templates and wrote
functions to swap them in and out at the right times. Thats how I created the UI.
In a previous project I used jQuery .show and .hide methods for my UI. 
Handlebars made my life a lot easier, its a much cleaner and more effective
way to swap DOM elements in and out of view.

I wanted to implement a feature that would close an edit form 
when the user clicked anywhere outside of it. I wasn't able to come up with a solution.
I didn't have any console errors to work with and it was hard to keep track 
of all the DOM mutation that was occurring.

## For Future Iterations
- Todo list for each day of the week
- Color attribute for todo items
- Importance attribute for todo items
- Style the app
- Close open edit form when user clicks outside
