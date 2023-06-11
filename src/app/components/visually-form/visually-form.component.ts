import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-visually-form',
  templateUrl: './visually-form.component.html',
  styleUrls: ['./visually-form.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class VisuallyFormComponent  implements OnInit {
  visuallyFormControl: FormControl;

  constructor() {
    this.visuallyFormControl = new FormControl('', Validators.required);
  }

  ngOnInit() {}

}
