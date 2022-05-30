import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coffee } from 'src/app/store/models/coffee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _apiEndpoint: string;
  private url = 'coffee/random_coffee?size=50';

  public constructor(private http: HttpClient) {
    this._apiEndpoint = this.normalize(environment.apiURL);
  }

  public getCoffee(): Observable<ReadonlyArray<Coffee>> {
    return this.http.get<ReadonlyArray<Coffee>>(this._apiEndpoint).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  private normalize(uri: string): string {
    uri.endsWith('/') ? uri : uri + '/';
    return uri + this.url;
  }
}
