import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { OlfactoryFormComponent } from 'src/app/components/olfactory-form/olfactory-form.component';
import { VisuallyFormComponent } from 'src/app/components/visually-form/visually-form.component';
import { TasteOlfactoryFormComponent } from 'src/app/components/taste-olfactory-form/taste-olfactory-form.component';
import { FinalConsiderationFormComponent } from 'src/app/components/final-consideration-form/final-consideration-form.component';
import { ValidationService } from 'src/app/validation.service';

@Component({
  selector: 'app-new-evaluations',
  templateUrl: './new-evaluations.page.html',
  styleUrls: ['./new-evaluations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class NewEvaluationsPage implements OnInit {
  @ViewChild(VisuallyFormComponent, { static: false }) visuallyFormComponent?: VisuallyFormComponent;
  @ViewChild(OlfactoryFormComponent, { static: false }) olfactoryFormComponent?: OlfactoryFormComponent;
  @ViewChild(TasteOlfactoryFormComponent, { static: false }) tasteOlfactoryFormComponent?: TasteOlfactoryFormComponent;
  @ViewChild(FinalConsiderationFormComponent, { static: false }) finalConsiderationFormComponent?: FinalConsiderationFormComponent;


  constructor(
    private router: Router
  ) { }

  // protected olfactoryForm = OlfactoryFormComponent;
  // protected visuallyForm = VisuallyFormComponent;
  // protected tasteOlfactoryForm = TasteOlfactoryFormComponent;
  // protected finalConsiderationForm = FinalConsiderationFormComponent;

  submitForm(){
    const visuallyFormValid = this.visuallyFormComponent?.validationForm.valid;
    const olfactoryFormValid = this.olfactoryFormComponent?.validationForm.valid;
    const tasteOlfactoryFormValid = this.tasteOlfactoryFormComponent?.validationForm.valid;
    const finalConsiderationFormValid = this.finalConsiderationFormComponent?.validationForm.valid;

    if (visuallyFormValid && olfactoryFormValid && tasteOlfactoryFormValid && finalConsiderationFormValid) {
      // Tutti i campi del form sono validi, esegui azioni di submit
      console.log('valido');
    } else {
      // Almeno uno dei campi del form non è valido
      console.log('non valido');
    }
  }

  
  ngOnInit() {
  }

  goBackToCellar(){
    this.router.navigateByUrl('my-cellar');
  }

}
