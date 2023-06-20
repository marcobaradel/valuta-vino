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
  
  // constructor() {
  //   this.validationForm = new FormControl();
  // }

  constructor() {
    this.validationForm = new FormGroup ({
      limpidezza: new FormControl('', Validators.required),
      colore: new FormControl('', Validators.required),
      consistenza: new FormControl('', Validators.required),
      granaB: new FormControl('', Validators.required),
      numB: new FormControl('', Validators.required),
      persistB: new FormControl('', Validators.required),
      osservazioni: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

}
