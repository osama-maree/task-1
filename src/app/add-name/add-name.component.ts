import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IndexedDbService } from '../indexeddb.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css'],
})
export class AddNameComponent {
  constructor(
    private _indexedDbService: IndexedDbService,
    private _snackbarService: SnackbarService
  ) {}
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
    this._indexedDbService.persons.add(addForm.value).then(
      () => {
        this.addForm.reset();
        this._snackbarService.openSnackBar('Successfully added');
      },
      () => this._snackbarService.openSnackBar('Error In Add')
    );
  }
}
