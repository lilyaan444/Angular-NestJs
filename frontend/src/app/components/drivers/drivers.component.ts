import { Component, OnInit } from '@angular/core';
import { Driver } from '../../services/f1.models';
import { F1Service } from '../../services/f1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
setHoveredCard(_t4: Driver) {
throw new Error('Method not implemented.');
}
  drivers: Driver[] = [];
  favoriteDrivers: Driver[] = [];


  constructor(
    private f1Service: F1Service,
    private snackBar: MatSnackBar
  ) {}

  deleteFavorite(driverId: string) {
    this.f1Service.DriversDeleteFavorite(driverId).subscribe({
      next: (response) => {
        this.snackBar.open('Pilote retiré des favoris!', 'Fermer', { duration: 3000 });
        this.loadFavoriteDrivers();
      },
      error: (error) => {
        this.snackBar.open('Erreur lors de la suppression des favoris.', 'Fermer', { duration: 3000 });
        console.error('Erreur lors de la suppression des favoris', error);
      }
    });
  }



  addFavorite(driverId: string) {
    this.f1Service.driversAddFavorite(driverId).subscribe({
      next: (response) => {
        console.log('Ajouté aux favoris', response);
        this.snackBar.open('Pilote ajouté aux favoris!', 'Fermer', {
          duration: 3000,
        });
        this.loadFavoriteDrivers();

      },
      error: (error) => {
        console.error('Déjà ajouté aux favoris', error);
        this.snackBar.open('Déjà ajouté aux favoris.', 'Fermer', {
          duration: 3000,
        });
      }
    });
  }

  loadFavoriteDrivers(): void {
    this.f1Service.driversGetAllFavorites().subscribe({
      next: (favorites) => {
        this.favoriteDrivers = favorites;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des constructeurs favoris', error);
      }
    });
  }

  driverIsInFavorites(driver: Driver): boolean {
    return this.favoriteDrivers.some(favorite => favorite.driverId === driver.driverId);
  }

  ngOnInit(): void {
    this.f1Service.getDrivers().subscribe(data => {
      this.drivers = data;
    });
    this.loadFavoriteDrivers();
  }
}
