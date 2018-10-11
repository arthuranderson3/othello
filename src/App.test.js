import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeFactory from './othello/storeFactory';
import constructGame from './othello/model/game/constructGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = storeFactory(constructGame());
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
