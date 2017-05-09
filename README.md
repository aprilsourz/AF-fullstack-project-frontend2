

# Arlo Feirman - Todo List App

[Link to app](https://arlofeirman.github.io/AF-fullstack-project-frontend2/)

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

Given I am a user
When I first enter the page
Then I should be able to create an account

Given I am a user
If have made an account or already have an account
I should be able to sign in

Given I am a user 
When I sign in and I have previously created todo items
I should see all my todo items

Given I am a user
Once I sign in 
I should be able to create a to-do item

Given I am a user 
If I have created to do items
I should be able to delete a to-do item

Given I am a user after I have created a to-do item
I should be able to edit that to-do item

## Process

[I built the custom API first.](https://github.com/arlofeirman/AF-fullstack-project-backend)
I started this project by writing user stories and making wire frames.

From the user stories I made a list of features.
Before starting a featue I broke it into smaller parts and worked on each par


I felt like it would be easier to start the game logic code if I had click events
set up. So I set up click events and wrote code to switch between X's and 0's
and put them on the tic tac toe board.

Before I wrote any of the game logic I wrote pseudo code and drew
diagrams on a [white board.](http://i.imgur.com/NhmlQ2D.jpg)
The game board is represented by an array with 9 values, starting off as null.

```javascript
let currentGame = [null, null, null, null, null, null, null, null, null]
```

When player X makes a move true is pushed into the array at the corresponding
index. False for player O.


Determining the winner of the game was the most difficult part of the project.
I did more whiteboarding, [Link,](http://i.imgur.com/2vlWCAH.jpg) [Link.](http://i.imgur.com/GHPXqrR.jpg)
I found that their are only 8 winning combinations for each player. I used an
array with 8 sub array's. Each sub array contains the indexes of a winning
combo.

```javascript
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
]
```
I iterate over the winCombos array passing each sub array to a function that
takes the 3 winning indexes and checks if the currentGame array is true (payer x)
or false (player o) at those indexes.

At this point my game was working, but only on the first play. Once I pressed
the play again button I would get bugs that I couldn't reproduce consistently.
Such as starting the game as player O, double turns, winning the game at
the wrong time, and the game board being out of sync with currentGame array.

I started off the debugging process by shortening my game logic functions.
I got it from 100 to 50 lines of code. I then used console logs and the chrome
debugger to isolate the problem. The play again button was adding all the click
events back to the game cells without removing them first. Any cells that
were not filled in the first game ended up with two identical click events on
the second game.

I used curl requests to interect with the game api, then I wrote the ajax.

The UI was done with JQuery's hide and show methods.


## For Future Iterations
- Add visual notifications for invalid sign in or sign up
- Style the App
- Use routing instead of .hide() and .show()
- Add feature to support player 0 joining the game from a second device.
- Add win counter feature
- Show which player won the game when user requests game by ID.
