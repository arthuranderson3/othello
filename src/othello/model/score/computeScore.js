import calculateScore from './calculateScore';
import constructScore from './constructScore';

export default function computeScore( gameBoardPieces ) {
	return constructScore(
					calculateScore( gameBoardPieces, 'W'),
					calculateScore( gameBoardPieces, 'B') );
}
