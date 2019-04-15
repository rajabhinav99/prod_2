import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  {path:'',component:ListProductComponent},
  {path:'listproduct',component:ListProductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'update',component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'addTodo';
}

