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
      zuccheri: new FormControl(Validators.required),
      alcoli: new FormControl(Validators.required),
      polialcoli: new FormControl(Validators.required),
      acidi: new FormControl(Validators.required),
      tannini: new FormControl(Validators.required),
      sostanzeMinerali: new FormControl(Validators.required),
      srtuttura: new FormControl(Validators.required),
      equilibrio: new FormControl(Validators.required),
      intensita: new FormControl(Validators.required),
      persistenza: new FormControl(Validators.required),
      qualita: new FormControl(Validators.required),
      osservazioni: new FormControl(Validators.required),
    });
  }

  ngOnInit() {}

}
