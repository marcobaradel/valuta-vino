import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateFormGroup(formGroup: FormGroup): boolean {
    if (formGroup.valid) {
      // Il formGroup è valido
      return true;
    } else {
      // Il formGroup non è valido, esegui azioni aggiuntive se necessario
      return false;
    }
  }
}
