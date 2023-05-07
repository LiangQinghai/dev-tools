import debug from '../env';
import { ResultData } from '@/api/types';

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
	// noinspection PointlessBooleanExpressionJS
	if (mock !== false && debug) setup();
};

export const successResponseWrap = (
	data: unknown,
	totalNum: number = 0,
	totalPage: number = 0,
) => {
	return {
		data,
		msg: '请求成功',
		code: 200,
		totalPage,
		totalNum,
	};
};

export const failResponseWrap = (
	data: unknown,
	msg: string,
	code = 50000,
): ResultData => {
	return {
		data,
		msg,
		code,
	};
};
