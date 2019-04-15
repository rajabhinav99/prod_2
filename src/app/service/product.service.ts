import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseUrl=" http://localhost:3000/Product"
  constructor(private http:HttpClient) { }



getProduct()
{
return this.http.get<Product[]>(this.baseUrl)
}

deletetoJson(id){
  return this.http.delete(this.baseUrl+"/"+id)
}

addtoJson(product:Product){
 
   return this.http.post(this.baseUrl,product)
 
}
edittojson(product:Product){
  console.log(product.id)

  return this.http.put<Product[]>(this.baseUrl+"/"+product.id,product)
}

getUserById(id:number){
  return this.http.get<Product>(this.baseUrl+"/"+id)
}

deleteAllProduct(id: number) {
  return this.http.delete(this.baseUrl + "/" + id);
}
}




