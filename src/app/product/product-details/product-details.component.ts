import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from 'src/app/store/models/coffee.model';
import { ProductGridComponent } from '../product-grid/product-grid.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, AfterContentInit, OnChanges {
  public coffee: Coffee | any;
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    // this.coffee.subscribe((data: any) => console.log(data));
}
  constructor(public productGridComponent: ProductGridComponent) {
    console.log(this.productGridComponent.dataDetails);
    this.productGridComponent.changeLanguage$.subscribe(value => this.coffee = value);
  }
  ngAfterContentInit(): void {
    console.log(this.coffee);
    this.productGridComponent.changeLanguage$.subscribe(value => this.coffee = value);
  }

  ngOnInit(): void {}
}
