import { range } from 'underscore';

export const numberRangeAge = (value: string[]): FlatArray<number[][], 1>[] => {
	return value
		.map((item) => {
			const number: string[] = item.split('-');
			return range(Number(number[0]), Number(number[1]));
		})
		.flat();
};
