import { Component, OnInit } from '@angular/core';
import { F1Service } from '../../services/f1.service';
import { Driver, Constructor } from '../../services/f1.models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  pilots: Driver[] = [];
  constructors: Constructor[] = [];

  constructor(private f1Service: F1Service) {}

  ngOnInit() {
    this.driverLoadFavorites();
    this.constructorLoadFavorites();
  }

  driverLoadFavorites() {
    this.f1Service.driversGetAllFavorites().subscribe({
      next: (favorites) => {
        this.pilots = favorites;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des favoris', error);
      }
    });
  }

  constructorLoadFavorites() {
    this.f1Service.constructorsGetAllFavorites().subscribe({
      next: (favorites) => {
        this.constructors = favorites;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des favoris', error);
      }
    });
  }
}
