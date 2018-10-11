import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './othello/storeFactory';
import constructGame from './othello/model/game/constructGame';

const store = storeFactory(constructGame());

const render = () => ReactDOM.render(<App store={store} />, document.getElementById('root'));

store.subscribe(render);
render();

registerServiceWorker();
