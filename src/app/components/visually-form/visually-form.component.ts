import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-visually-form',
  templateUrl: './visually-form.component.html',
  styleUrls: ['./visually-form.component.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class VisuallyFormComponent  implements OnInit {

  validationForm: FormGroup;
  
  constructor() {
    this.validationForm = new FormGroup ({
      limpidezza: new FormControl(null, Validators.required),
      colore: new FormControl(null, Validators.required),
      consistenza: new FormControl(null, Validators.required),
      granaB: new FormControl(null, Validators.required),
      numB: new FormControl(null, Validators.required),
      persistB: new FormControl(null, Validators.required),
      osservazioni: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}

  setLimpidezzaValue($event: any) {
    this.validationForm.get('limpidezza')?.setValue($event.detail.value);
  }

  setColoreValue($event: any) {
    this.validationForm.get('colore')?.setValue($event.detail.value);
  }

  setConsistenzaValue($event: any) {
    this.validationForm.get('consistenza')?.setValue($event.detail.value);
  }

  setGranaBValue($event: any) {
    this.validationForm.get('granaB')?.setValue($event.detail.value);
  }

  setNumBValue($event: any) {
    this.validationForm.get('numB')?.setValue($event.detail.value);
  }

  setPersistBValue($event: any) {
    this.validationForm.get('persistB')?.setValue($event.detail.value);
  }

  setOsservazioniValue($event: any) {
    this.validationForm.get('osservazioni')?.setValue($event.detail.value);
  }

}
