import constructPlayer from './constructPlayer';

export default function createPlayer( { color, id, name, tz } = constructPlayer()) {
  return { color, id, name, tz };
}
