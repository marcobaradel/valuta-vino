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

  // constructor() {
  //   this.validationForm = new FormControl();
  // }

  constructor() {
    this.validationForm = new FormGroup({
      statoEvolutivo: new FormControl('', Validators.required),
      armonia: new FormControl('', Validators.required),
      abbinamento: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

}
