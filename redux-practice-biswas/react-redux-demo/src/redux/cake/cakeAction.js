import { BUY_CAKE } from "./actionType";

export const buyCake = (number = 1) => {
	return {
		type: BUY_CAKE,
		payload: number
	}
}