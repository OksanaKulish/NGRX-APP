import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoffeeState } from '../../store/reducers/coffee.reducer';
import { getCoffee } from '../../store/actions/coffee.action';
import { Coffee } from '../../store/models/coffee.model';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  public grid: Coffee[] | any;
  public dataSource: Coffee[] | any;
  public displayedColumns: string[] = [
    'blend_name',
    'origin',
    'variety',
    'notes',
    'intensifier',
  ];
  public coffees$ = this.store.select('coffee');

  constructor(
    private store: Store<CoffeeState>,
    private readonly _router: Router
  ) {}

  public clickedRows = new Set<Coffee>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  public ngOnInit(): void {
    this.getAllCoffees();
  }
  public dataDetails: Observable<Coffee> | any;
  private changeLanguageSource = new Subject<any>();
    changeLanguage$ = this.changeLanguageSource.asObservable();


  public onClick(row: any) {
    this._router.navigate(['details']);
    this.changeLanguageSource.next(row);
    this.dataDetails = row;
  }

  public getAllCoffees(): void {
    this.store.dispatch(getCoffee());
    this.coffees$.subscribe((data) =>
      setTimeout(() => {
        console.log(data);
        if (data) {
          this.grid = data;
          this.dataSource = new MatTableDataSource(this.grid);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, 1000)
    );
  }
}
