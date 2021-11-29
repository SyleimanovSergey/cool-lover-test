import { range } from 'underscore';

export const numberRangeAge = (value: string[]) => {
	const parseValue = value.map((item) => item.split('-'));
	let resultRangeAge = [];
	resultRangeAge = parseValue.map((item) =>
		range(Number(item[0]), Number(item[1]))
	);
	return resultRangeAge.flat();
	// return value
	// 	.map((item) => {
	// 		const number: string[] = item.split('-');
	// 		return range(Number(number[0]), Number(number[1]));
	// 	})
	// 	.flat();
};
