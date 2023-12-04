export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }
  if (startString === ' ') {
    return '';
  }
  const strs = Array.from(set).filter((x) => typeof x === typeof '');
  const toJoin = Array.from(strs).filter((x) => (x.indexOf(startString) === 0));
  const trim = toJoin.map((n) => n.slice(startString.length, n.length));
  return trim.join('-');
}
