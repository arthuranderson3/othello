import React from 'react';

export default function GameStartForm({ onStartGame = f => f }) {
  let _nickName, _numPlayer;
  const submit = e => {
    e.preventDefault();
    onStartGame(_nickName.value, _numPlayer.value);
    _nickName.value = '';
    _numPlayer.value = false;
  };

  return (
    <form id="gameStart" onSubmit={submit}>
      <h2>Start Game</h2>
      <label htmlFor="onePlayerGame">One Player&nbsp;</label>
      <input
        id="onePlayerGame"
        name="numberOfPlayers"
        type="radio"
        value="1"
        ref={input => (_numPlayer = input)}
      />
      <br />
      <label htmlFor="twoPlayerGame">Two Player&nbsp;</label>
      <input
        id="twoPlayerGame"
        name="numberOfPlayers"
        type="radio"
        value="2"
        ref={input => (_numPlayer = input)}
      />
      <br />

      <label htmlFor="nickName">Nick name&nbsp;</label>
      <input id="nickName" type="text" ref={input => (_nickName = input)} />
      <br />
      <button type="submit">Start</button>
    </form>
  );
}
