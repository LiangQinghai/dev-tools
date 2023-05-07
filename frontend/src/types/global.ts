export interface MockRequest {
	body: null;
	type: string;
	url: string;
}

export declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

export interface KeyValue {
	key: string;
	value: any;
}
