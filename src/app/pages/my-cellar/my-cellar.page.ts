import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadDataService } from '../../load-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-my-cellar',
  templateUrl: './my-cellar.page.html',
  styleUrls: ['./my-cellar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MyCellarPage implements OnInit {

  constructor(
    private loadData: LoadDataService,
    private router: Router
  ) { }

  protected evaluations: any;

  ngOnInit() {
    this.loadData.loadEvaluations().then(data => {
      this.evaluations = data;
    })
  }

  goToNewEvaluations(){
    this.router.navigateByUrl('new-evaluations');
  }

  goBackToHome(){
    this.router.navigateByUrl('home');
  }

  goToDetail(item_id: number) {
    this.router.navigate(['detail-evaluations'], { queryParams: { item_id: item_id } });
  }

}
