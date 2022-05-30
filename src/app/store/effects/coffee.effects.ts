import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { DataService } from 'src/app/web-api/services/data.service';
import { getCoffee, getCoffeeSuccess } from '../actions/coffee.action';

@Injectable()
export class CoffeeEffects {
  loadCoffee$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCoffee),
      exhaustMap(() =>
        this.dataService.getCoffee().pipe(
          map((coffee) => getCoffeeSuccess(coffee))
          // catchError(() => EmptyError)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
