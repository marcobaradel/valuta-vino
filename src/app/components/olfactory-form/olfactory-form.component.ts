import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-olfactory-form',
  templateUrl: './olfactory-form.component.html',
  styleUrls: ['./olfactory-form.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class OlfactoryFormComponent  implements OnInit {
  
  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup ({
      intensita: new FormControl(null, Validators.required),
      complessita: new FormControl(null, Validators.required),
      qualita: new FormControl(null, Validators.required),
      descrizione: new FormControl(null, Validators.required),
      osservazioni: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}

  // Metodo per impostare il valore del campo intensita
  setIntensitaValue($event: any) {
    this.validationForm.get('intensita')?.setValue($event.detail.value);
  }

  // Metodo per impostare il valore del campo complessita
  setComplessitaValue($event: any) {
    this.validationForm.get('complessita')?.setValue($event.detail.value);
  }

  // Metodo per impostare il valore del campo qualita
  setQualitaValue($event: any) {
    this.validationForm.get('qualita')?.setValue($event.detail.value);
  }

  // Metodo per impostare il valore del campo descrizione
  setDescrizioneValue($event: any) {
    this.validationForm.get('descrizione')?.setValue($event.detail.value);
  }

  // Metodo per impostare il valore del campo osservazioni
  setOsservazioniValue($event: any) {
    this.validationForm.get('osservazioni')?.setValue($event.detail.value);
  }

}
