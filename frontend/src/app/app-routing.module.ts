import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { ConstructorsComponent } from './components/constructors/constructors.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


const routes: Routes = [
  { path: 'drivers', component: DriversComponent },
  { path: 'constructors', component: ConstructorsComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
