import { Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us/about-us.component';
import { Login } from './pages/login/login/login';
import { Menu } from './pages/menu/menu/menu';
import { ShowTimes } from './pages/show-times/show-times/show-times';
import { Home } from './pages/home/home/home';

export const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'login', component: Login },
  { path: 'menu', component: Menu },
  { path: 'show-times', component: ShowTimes },
  { path: 'home', component: Home }
];
