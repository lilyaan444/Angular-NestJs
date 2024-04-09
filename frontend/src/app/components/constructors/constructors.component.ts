import { Component, OnInit } from '@angular/core';
import { Constructor } from '../../services/f1.models';
import { F1Service } from '../../services/f1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
  constructors: Constructor[] = [];
  favoriteConstructors: Constructor[] = [];


  constructor(
    private f1Service: F1Service,
    private snackBar: MatSnackBar
  ) {}

  deleteFavorite(constructorId: string) {
    this.f1Service.constructorsDeleteFavorite(constructorId).subscribe({
      next: (response) => {
        this.snackBar.open('Pilote retiré des favoris!', 'Fermer', { duration: 3000 });
        this.loadFavoriteConstructors();

      },
      error: (error) => {
        this.snackBar.open('Erreur lors de la suppression des favoris.', 'Fermer', { duration: 3000 });
        console.error('Erreur lors de la suppression des favoris', error);
      }
    });
  }



  addFavorite(constructorId: string) {
    this.f1Service.constructorsAddFavorite(constructorId).subscribe({
      next: (response) => {
        console.log('Ajouté aux favoris', response);
        this.snackBar.open('Constructeur ajouté aux favoris!', 'Fermer', {
          duration: 3000,
        });
        this.loadFavoriteConstructors();

      },
      error: (error) => {
        console.error('Déjà ajouté aux favoris', error);
        this.snackBar.open('Déjà ajouté aux favoris.', 'Fermer', {
          duration: 3000,
        });
      }
    });
  }
  loadFavoriteConstructors(): void {
    this.f1Service.constructorsGetAllFavorites().subscribe({
      next: (favorites) => {
        this.favoriteConstructors = favorites;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des constructeurs favoris', error);
      }
    });
  }

  constructorIsInFavorites(constructor: Constructor): boolean {
    return this.favoriteConstructors.some(favorite => favorite.constructorId === constructor.constructorId);
  }

  ngOnInit(): void {
    this.f1Service.getConstructors().subscribe(data => {
      this.constructors = data;
    });
    this.loadFavoriteConstructors();
  }
}
