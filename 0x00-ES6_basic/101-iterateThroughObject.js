export default function iterateThroughObject(reportWithIterator) {
	let employee = '';

	for (const empl of reportWithIterator) {
		employee += ` ${empl} |`;
	}

	employee = employee.slice(1);
	employee = employee.slice(0, -2);
	return employee;
}
