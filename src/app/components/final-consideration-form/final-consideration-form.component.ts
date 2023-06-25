import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-final-consideration-form',
  templateUrl: './final-consideration-form.component.html',
  styleUrls: ['./final-consideration-form.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class FinalConsiderationFormComponent  implements OnInit {

  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      statoEvolutivo: new FormControl(null, Validators.required),
      armonia: new FormControl(null, Validators.required),
      abbinamento: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {}

  setStatoEvolutivoValue($event: any) {
    this.validationForm.get('statoEvolutivo')?.setValue($event.detail.value);
  }

  setArmoniaValue($event: any) {
    this.validationForm.get('armonia')?.setValue($event.detail.value);
  }
  
  setAbbinamentoValue($event: any) {
    this.validationForm.get('abbinamento')?.setValue($event.detail.value);
  }
}
