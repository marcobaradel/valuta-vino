import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // Modificare metodo per prendere in input lista di FormGroup e non uno solo
  validateFormGroup(formGroup: FormGroup): boolean {
    if (formGroup.valid) {
      console.log('Form is valid!');
      // Puoi eseguire le azioni desiderate quando il form è valido
      return true;
    } else {
      console.log('Form is invalid!');
      // Puoi eseguire le azioni desiderate quando il form è invalido
      return false;
    }
  }
}
