import { Action, createReducer, on } from '@ngrx/store';
import { Coffee } from '../models/coffee.model';
import { getCoffeeSuccess } from '../actions/coffee.action';

export const coffeeFeatureKey = 'coffee';

export interface CoffeeState {
  coffee: ReadonlyArray<Coffee>;
}

const initialState: ReadonlyArray<Coffee> = [];
// const initialState: CustomCoffeeState = {
//   coffee: [
//     {
//       id: 0,
//       uid: '2323',
//       blend_name: 'sdsd',
//       origin: 'xcvxv',
//       variety: 'zzv',
//       notes: 'zczc',
//       intensifier: 'zccc',
//     }
//   ]
// };

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeSuccess, (state, { coffee }) => [...coffee])
);

// export function reducer(state: readonly Coffee[] | undefined, action: Action): any {
//   return coffeeReducer(state, action);
// }
