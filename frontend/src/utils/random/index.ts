export const randomNumber = (
	minNum: number = 0,
	maxNum: number = Number.MAX_VALUE,
): number => {
	return parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum), 10);
};
