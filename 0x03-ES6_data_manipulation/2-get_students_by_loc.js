/* Eslint-disabled  */
export default function getStudentsByLocation(arrayItem, city) {
  return arrayItem.filter((item) => (item.location === city)); 
};
