import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateFormGroup(formGroup: FormGroup): boolean {
    //Validazione non funzionante: sempre validi o invalidi (vedi ts componenti)
    console.log(formGroup)
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
