import { uuid } from './uuid';

export class BlogId {
	public _id: string;

	public get id(): string {
		return this._id;
	}

	// TODO: Change to uuid
	constructor(id: string) {
		this._id = id;
	}
}
