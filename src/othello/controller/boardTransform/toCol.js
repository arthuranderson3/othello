export default function toCol(i) {
  if( i < 0 || i > 63 ) { return undefined; }
  return i % 8;
}
