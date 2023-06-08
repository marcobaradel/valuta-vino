import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-evaluations',
  templateUrl: './detail-evaluations.page.html',
  styleUrls: ['./detail-evaluations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailEvaluationsPage implements OnInit {

  protected item_id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.queryParams['item_id'];
  }

}
