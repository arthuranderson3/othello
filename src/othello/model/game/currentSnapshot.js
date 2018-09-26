export default function currentSnapshot({ snapshots }) {
  return snapshots ? snapshots[snapshots.length - 1] : undefined;
}
