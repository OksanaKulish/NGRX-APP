import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContainerComponent } from './layout/page-container/page-container.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductGridComponent } from './product/product-grid/product-grid.component';

const routes: Routes = [
  {
    path: '',
    component: PageContainerComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'grid',
        component: ProductGridComponent,
      },
      {
        path: 'details',
        component: ProductDetailsComponent,
      }
    ],
  },
  { path: '**', redirectTo: 'grid' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
