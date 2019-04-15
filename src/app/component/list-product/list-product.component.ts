import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private serviceproduct: ProductService, private router: Router) { }
  product: Product[] = []
  page: number = 1;
  ngOnInit() {
      this.serviceproduct.getProduct().subscribe(data => this.product = data)
  }

  delete(product: Product) {
    this.serviceproduct.deletetoJson(product.id).subscribe(data => {
      this.product = this.product.filter(u => u !== product);
    })
  }
  deleteAllProduct(product: Product[]): void {
    let result = confirm("Are you sure you want to delete all products?")
    if (result) {
      for (let prod of product) {
        this.serviceproduct.deletetoJson(prod.id).subscribe(data => {
          this.product = this.product.filter(u => u !== prod);
        });
      }
      window.location.reload();
    }
  }
  addProd() {
    this.router.navigate(['/addproduct'])
  }

  editprod(prod: Product) {
    localStorage.removeItem("id")
    //alert(typeof (prod.id.toString()));
    localStorage.setItem("id", prod.id.toString())
    this.router.navigate(['/update'])
    //window.location.reload();
  }

}

