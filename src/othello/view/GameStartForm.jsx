import React from 'react';

export default function GameStartForm({ onStartGame = f => f }) {
  let _playerName;
  let _numPlayer;
  let _gameName;

  const submit = e => {
    e.preventDefault();

    if( _gameName.value && _playerName.value && _numPlayer ){
      onStartGame( _gameName.value,
        _playerName.value,
        _numPlayer);

      _gameName.value = '';
      _playerName.value = '';
    } else {
        // warn that we need all three values.
    }
  };

  return (
    <form id="gameStart" onSubmit={submit}>
      <h2>Start Game</h2>
      <label htmlFor="gameName">Game name&nbsp;</label>
      <input id="gameName" type="text" ref={input => (_gameName = input)}/>
      <br />

      <label htmlFor="onePlayerGame">One Player&nbsp;</label>
      <input
        id="onePlayerGame"
        name="numberOfPlayers"
        type="radio"
        onClick={ e => _numPlayer = 1 }
      />
      <br />
      <label htmlFor="twoPlayerGame">Two Player&nbsp;</label>
      <input
        id="twoPlayerGame"
        name="numberOfPlayers"
        type="radio"
        onClick={ e => _numPlayer = 2 }
      />
      <br />

      <label htmlFor="playerName">Player name&nbsp;</label>
      <input id="playerName" type="text" ref={input => (_playerName = input)} />
      <br />
      <button type="submit">Start</button>
    </form>
  );
}
