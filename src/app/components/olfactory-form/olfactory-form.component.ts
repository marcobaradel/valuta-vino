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

  // constructor() {
  //   this.validationForm = new FormControl();
  // }

  constructor() {
    this.validationForm = new FormGroup ({
      intensita: new FormControl('', Validators.required),
      complessita: new FormControl('', Validators.required),
      qualita: new FormControl('', Validators.required),
      descrizione: new FormControl('', Validators.required),
      osservazioni: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

}
