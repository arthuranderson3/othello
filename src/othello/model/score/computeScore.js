import calculateScore from './calculateScore';
import constructScore from './constructScore';

export default function computeScore( gameBoard ) {
	return constructScore(
					calculateScore( gameBoard, 'W'),
					calculateScore( gameBoard, 'B') );
}
