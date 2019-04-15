import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editForm: FormGroup;
  submitted: boolean = false
  constructor(private formbuilder: FormBuilder, private router: Router, private serviceprod: ProductService) { }

  ngOnInit() {

   

      let id = localStorage.getItem("id")
      if (!id) {

        alert("invalid action pleaser check Product list")
        this.router.navigate(['\listproduct'])
      }
      else {

        this.editForm = this.formbuilder.group({
          id: [],
          name: ['', Validators.required],
          description: ['', Validators.required],
          price: ['', Validators.required],

        })

      }
      this.serviceprod.getUserById(+id).subscribe(data => { this.editForm.setValue(data) })
      console.log(+id)
    


  }
  edit() {
    this.submitted = true
    if (this.editForm.invalid) {

      return
    }

    this.serviceprod.edittojson(this.editForm.value).subscribe(data => { })
    this.serviceprod.getProduct().subscribe()
    this.router.navigate(['\listproduct'])
    

  }
  userbyId(usr) {
    this.serviceprod.getUserById(usr.id).subscribe(data => {
    })
  }

  backToList() {
    this.router.navigate(['listproduct'])

  }
}
