# TODO's

No more moves

One Person Game - AI / random, reduce opponents moves

## Current state
* Game Complete - end game definition
* UI CSS styling
* migration to REDUX
* 

## 2 person games
### Rest API
	* API for Game - board - moves
	* API for Users - profile
	* API for Game logon

## Features
### UI
* Center the game board
* Make gameboard usable on smart phones.
* Chat for two player games
* Player Score
* Player Turn
* Animate the moves - turn the discs
* notify user when there are no moves for them. Then move on to next player.
* Add timeline to scroll back in time, different than undo or reset. When we scroll back in time we are viewing the state of the game board at that time.

### Development / Testing Features
* Show all available moves for each player on their Turn
* Turn on clicking with the available moves and leave the rest silent.
* Turn off clicking when we are processing another persons turn or processing the current placement.
* implement REDUX actions with testing
* Add Gist to explain the architecture and features.
* Move the UI into functions instead of Components. Most of it will fit into functions.

## Security
### Authentication
* User Profile
	- Nick name, username, password, wins and losses, game history [{ date, color, opponent, scores : b & w }]

### HTTPS
* move towards https and secure sockets - if we go with sockets.

### Game Host
* set up a server game host,
* Registry: [ game: { name, id, players }]
* Players: [ user:{ id, name, uname, password }]
* GameHistory:[ { DatePlayed, Score, Players }] }
* ActiveGames:[ { Game{ id, history:[{gameboard, turn,}], } },  ]
*
