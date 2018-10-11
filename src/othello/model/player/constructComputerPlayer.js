import constructPlayer from './constructPlayer';

export default function constructComputerPlayer(name, color) {
  return constructPlayer(name, color, 'computer');
}
