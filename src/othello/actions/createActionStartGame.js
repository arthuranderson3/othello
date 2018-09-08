import { START_GAME } from './othelloActionConstants';
import constructGame from '../model/game/constructGame';

export default function createActionStartGame( gameName, playerName ) {
	return {
		type: START_GAME,
		payload: constructGame( gameName, playerName )
	}
}
