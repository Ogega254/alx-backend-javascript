/* Eslint-disabled */
export default function getStudentIdsSum(arrayItem) {
  return arrayItem.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
}
