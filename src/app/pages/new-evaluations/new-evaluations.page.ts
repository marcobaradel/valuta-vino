import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private validationService: ValidationService
  ) { }

  //Capire come usare validationService

  protected olfactoryForm = OlfactoryFormComponent;
  protected visuallyForm = VisuallyFormComponent;
  protected tasteOlfactoryForm = TasteOlfactoryFormComponent;
  protected finalConsiderationForm = FinalConsiderationFormComponent;
  
  ngOnInit() {
  }

  goBackToCellar(){
    this.router.navigateByUrl('my-cellar');
  }

}
