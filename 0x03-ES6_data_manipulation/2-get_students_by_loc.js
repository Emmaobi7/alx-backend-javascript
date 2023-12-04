export default function getStudentsByLocation(arr, city) {
  return arr.filter((loc) => loc.location === city);
}
