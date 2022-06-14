export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {},
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  for (const prof in employeesList) {
    if ({}.hasOwnProperty.call(employeesList, prof)) {
      report.allEmployees[prof] = employeesList[prof];
    }
  }
  return report;
}
