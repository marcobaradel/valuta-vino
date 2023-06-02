import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-my-cellar',
  templateUrl: './my-cellar.page.html',
  styleUrls: ['./my-cellar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MyCellarPage implements OnInit {

  constructor() { }

  //IMPLEMENTARE DATI DINAMICI
  ngOnInit() {
  }

}
