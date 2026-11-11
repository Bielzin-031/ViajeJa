import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home.component').then((m) => m.HomeComponent), title: 'ViajeJá | Início' },
  { path: 'viagens', loadComponent: () => import('./components/packages.component').then((m) => m.PackagesComponent), title: 'Pacotes | ViajeJá' },
  { path: 'viagens/:id', loadComponent: () => import('./components/package-detail.component').then((m) => m.PackageDetailComponent), title: 'Detalhes | ViajeJá' },
  { path: 'login', loadComponent: () => import('./components/login.component').then((m) => m.LoginComponent), title: 'Entrar | ViajeJá' },
  { path: 'admin', canActivate: [adminGuard], loadComponent: () => import('./components/admin.component').then((m) => m.AdminComponent), title: 'Painel | ViajeJá' },
  { path: '**', redirectTo: '' }
];
