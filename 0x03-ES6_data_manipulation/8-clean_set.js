export default function cleanSet(set, startString) {
  if (!startString) {
    return ' ';
  }
  return Array.from(set).filter((data) => data.startsWith(startString)).map((data) => data.slice(startString.length)).join('-');
}
