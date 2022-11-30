import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { prohibitedValidator } from 'src/app/forbidden-name.directive';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';


@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  cities;
  techForm;



  constructor(private _cityname:GetCityNamesService, private formbuilder: FormBuilder) {
    this.cities = this._cityname.getNames();
  
  
    this.techForm = formbuilder.group({
      userName: ["", [Validators.required, Validators.minLength(3), prohibitedValidator(/tourist/i)]],
      age: ["", [Validators.required]],
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      city: ["", [Validators.required]],
      brief: ["", [Validators.required, Validators.minLength(100), prohibitedValidator(/nothing/i)]],
      });
    
    }



  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.techForm.value);
    this.techForm.reset();
  }

  //Getter Methods
  get userNameFormControl() {
    return this.techForm.get("userName")!;
  }

  get ageFormControl() {
    return this.techForm.get("age")!;
  }

  get emailFormControl() {
    return this.techForm.get("email")!;
  }

  get cityFormControl() {
    return this.techForm.get("city")!;
  }

  get briefFormControl() {
    return this.techForm.get("brief")!;
  }

  
}

