import constructPlayer from './constructPlayer';

export default function constructRandy(color = 'B', delay = 1) {
  return constructPlayer('Randy', color, 'computer', delay);
}
