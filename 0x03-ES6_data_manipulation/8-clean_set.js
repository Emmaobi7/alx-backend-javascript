export default function cleanSet(set, startString) {
  if (!startString || typeof (startString) !== 'string') {
    return ' ';
  }
  return Array.from(set).filter((data) => data.startsWith(startString)).map((data) => data.slice(startString.length)).join('-');
}
