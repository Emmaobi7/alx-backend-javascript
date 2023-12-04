import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(arr) {
  const red = getListStudentIds(arr);
  return red.reduce((total, current) => total + current, 0);
}
