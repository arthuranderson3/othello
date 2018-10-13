import constructPlayer from './constructPlayer';

export default function constructGollum(color = 'B', delay = 1) {
  return constructPlayer('Gollum', color, 'computer', delay);
}
