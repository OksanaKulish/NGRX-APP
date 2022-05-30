import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/coffee.reducer';

export const selectCoffeeState =
  createFeatureSelector<fromCustomer.CoffeeState>(
    fromCustomer.coffeeFeatureKey
  );

export const seletCoffee = createSelector(
  selectCoffeeState,
  (state: fromCustomer.CoffeeState) => state.coffee
);
