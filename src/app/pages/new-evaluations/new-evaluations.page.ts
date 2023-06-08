import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { OlfactoryFormComponent } from 'src/app/components/olfactory-form/olfactory-form.component';
import { VisuallyFormComponent } from 'src/app/components/visually-form/visually-form.component';

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
  ) { }

  protected olfactoryForm = OlfactoryFormComponent;
  protected visuallyForm = VisuallyFormComponent;
  
  ngOnInit() {
  }

  goBackToCellar(){
    this.router.navigateByUrl('my-cellar');
  }

}
