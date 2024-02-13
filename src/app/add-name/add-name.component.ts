import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css'],
})
export class AddNameComponent {
  addForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    secondName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    finalName: new FormControl(null, [
      (Validators.required, Validators.minLength(3), Validators.maxLength(10)),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^-?\d+$/),
      Validators.max(100),
      Validators.min(1),
    ]),
  });

  onSubmit(addForm: FormGroup) {
    console.log(addForm)
  }
}
