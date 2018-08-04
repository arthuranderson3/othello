#Othello Design

## Requirements
1 or 2 Player
Register for Games
Player Scoreboard
Player Profile
Computer AI - 3 levels Strategies: { rnd, 3 moves look ahead, minimize opponent choices }
Chat/Whiteboard between players

## Object Naming
White piece, Black piece
Game, Board, Squares
Move Logic, Random Move Strategy, Look Ahead Strategy, Minimize Opponent Moves Strategy
Registration
Player Registry
Game Registry
Player History
Game History
Chat / Whiteboard

Object Decomposition

Game
	* Game State
	* Move Logic
	* Game Stats
	* Game Board

Game State
 	* Game Board Pieces

Move Logic
	* Board Navigation
	* Game Board Pieces

Game Board