import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'my-cellar',
    loadComponent: () => import('./my-cellar/my-cellar.page').then( m => m.MyCellarPage)
  },
];
