export const typeAge: (years: string) => string = (years: string) => {
	const type = [11, 12, 13, 14, 15, 16, 17, 18, 19].some(
		(value) => value === Number(years)
	);
	if (type) {
		return 'лет';
	}

	const typeYears = [1, 2, 3, 4].some(
		(value) => value === Number(years[years.length - 1])
	);
	return typeYears ? 'года' : 'лет';
};
