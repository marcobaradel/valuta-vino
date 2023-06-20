import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [
    IonicModule,
    CommonModule,
    OlfactoryFormComponent,
    VisuallyFormComponent,
    TasteOlfactoryFormComponent,
    FinalConsiderationFormComponent
  ],
})
export class NewEvaluationsPage implements OnInit {
  @ViewChild(OlfactoryFormComponent, { static: false }) olfactoryFormComponent!: OlfactoryFormComponent;
  @ViewChild(VisuallyFormComponent, { static: false }) visuallyFormComponent!: VisuallyFormComponent;
  @ViewChild(TasteOlfactoryFormComponent, { static: false }) tasteOlfactoryFormComponent!: TasteOlfactoryFormComponent;
  @ViewChild(FinalConsiderationFormComponent, { static: false }) finalConsiderationFormComponent!: FinalConsiderationFormComponent;

  constructor(
    private router: Router,
    private validationService: ValidationService,
  ) {}

  ngOnInit() {
  }

  goBackToCellar() {
    this.router.navigateByUrl('my-cellar');
  }

  // Passare a validationService.validateFormGroup tutti i validationForm dei componenti
  submitData() {
    this.validationService.validateFormGroup(this.olfactoryFormComponent.validationForm);
  }
}
