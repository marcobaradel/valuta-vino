import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taste-olfactory-form',
  templateUrl: './taste-olfactory-form.component.html',
  styleUrls: ['./taste-olfactory-form.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TasteOlfactoryFormComponent  implements OnInit {

  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup ({
      zuccheri: new FormControl(null, Validators.required),
      alcoli: new FormControl(null, Validators.required),
      polialcoli: new FormControl(null, Validators.required),
      acidi: new FormControl(null, Validators.required),
      tannini: new FormControl(null, Validators.required),
      sostanzeMinerali: new FormControl(null, Validators.required),
      struttura: new FormControl(null, Validators.required),
      equilibrio: new FormControl(null, Validators.required),
      intensita: new FormControl(null, Validators.required),
      persistenza: new FormControl(null, Validators.required),
      qualita: new FormControl(null, Validators.required),
      osservazioni: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}

  setZuccheriValue($event: any) {
    this.validationForm.get('zuccheri')?.setValue($event.detail.value);
  }

  setAlcoliValue($event: any) {
    this.validationForm.get('alcoli')?.setValue($event.detail.value);
  }

  setPolialcoliValue($event: any) {
    this.validationForm.get('polialcoli')?.setValue($event.detail.value);
  }

  setAcidiValue($event: any) {
    this.validationForm.get('acidi')?.setValue($event.detail.value);
  }

  setTanniniValue($event: any) {
    this.validationForm.get('tannini')?.setValue($event.detail.value);
  }

  setSostanzeMineraliValue($event: any) {
    this.validationForm.get('sostanzeMinerali')?.setValue($event.detail.value);
  }

  setStruttraValue($event: any) {
    this.validationForm.get('struttura')?.setValue($event.detail.value);
  }

  setEquilibrioValue($event: any) {
    this.validationForm.get('equilibrio')?.setValue($event.detail.value);
  }

  setIntensitaValue($event: any) {
    this.validationForm.get('intensita')?.setValue($event.detail.value);
  }

  setPersistenzaValue($event: any) {
    this.validationForm.get('persistenza')?.setValue($event.detail.value);
  }

  setQualitaValue($event: any) {
    this.validationForm.get('qualita')?.setValue($event.detail.value);
  }

  setOsservazioniValue($event: any) {
    this.validationForm.get('osservazioni')?.setValue($event.detail.value);
  }

}
