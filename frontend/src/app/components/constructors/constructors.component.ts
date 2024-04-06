import { Component, OnInit } from '@angular/core';
import { Constructor } from '../../services/f1.models'; // Update the import path to 'f1.service'
import { F1Service } from '../../services/f1.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
  constructors: Constructor[] = [];

  constructor(private f1Service: F1Service) { }

  ngOnInit(): void {
    this.f1Service.getConstructors().subscribe(data => {
      this.constructors = data;
    });
  }
}
