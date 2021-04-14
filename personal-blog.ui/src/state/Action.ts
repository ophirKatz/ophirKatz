export interface Action<ActionType> {
	type: ActionType,
	payload: any;
};
