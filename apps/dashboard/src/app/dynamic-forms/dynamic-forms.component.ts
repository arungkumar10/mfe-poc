import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-mfe-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  exampleForm:any = FormGroup;
  totalusers: any = [];

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.exampleForm = this.formbuilder.group({
      companyName: [''],
      units: this.formbuilder.array([this.getUnits()])
    })
  }

  getUnits(){
    return this.formbuilder.group({
      username: [''],
      countryName: [''],
      mobile: ['',[Validators.required]]
    });
  }

  addUnits(){
    const control = <FormArray>this.exampleForm.controls['units'];
    control.push(this.getUnits());

    // this.totalusers.push();
  }
  
  submit(){
    this.exampleForm.markAllAsTouched();
    console.log(this.exampleForm.invalid);
  }

  get form(){
    return this.exampleForm.controls.units.controls;
  }

}
