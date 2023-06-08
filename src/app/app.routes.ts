import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'my-cellar',
    loadComponent: () => import('./pages/my-cellar/my-cellar.page').then( m => m.MyCellarPage)
  },
  {
    path: 'new-evaluations',
    loadComponent: () => import('./pages/new-evaluations/new-evaluations.page').then( m => m.NewEvaluationsPage)
  },
  {
    path: 'detail-evaluations',
    loadComponent: () => import('./pages/detail-evaluations/detail-evaluations.page').then( m => m.DetailEvaluationsPage)
  },
];
