import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'drivers', component: DriversComponent, canActivate: [AuthGuard] },
  { path: 'constructors', component: ConstructorsComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
