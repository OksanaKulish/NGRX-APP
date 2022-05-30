import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';
import { Coffee } from '../models/coffee.model';

export const getCoffee = createAction('[Coffee] Get coffee');

export const getCoffeeSuccess = createAction(
  '[Coffee] Get coffee success',
  (coffee: ReadonlyArray<Coffee>) => ({ coffee })
);
// props<{coffee: ReadonlyArray<Coffee>}>()
