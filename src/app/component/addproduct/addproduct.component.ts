import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false

  constructor(private formbuilder: FormBuilder, private router: Router, private serviceproduct: ProductService) {

  }

  ngOnInit() {
    this.addForm = this.formbuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],

    })
  }

  create() {
    this.submitted = true
    if (this.addForm.invalid) {
      return
    }

    this.serviceproduct.addtoJson(this.addForm.value)
      .subscribe()
    this.serviceproduct.getProduct().subscribe()
    this.router.navigate(['\listproduct'])
  }

  backToList() {
    this.router.navigate(['\listproduct'])

  }

}

