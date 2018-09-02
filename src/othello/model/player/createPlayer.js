import constructPlayer from './constructPlayer';

export default function createPlayer({ id, name, color } = constructPlayer()) {
  return { id, name, color };
}
