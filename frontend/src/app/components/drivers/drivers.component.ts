import { Component, OnInit } from '@angular/core';
import { Driver } from '../../services/f1.models'; // Update the import path to 'f1.service'
import { F1Service } from '../../services/f1.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private f1Service: F1Service) { }

  ngOnInit(): void {
    this.f1Service.getDrivers().subscribe(data => {
      this.drivers = data;
    });
  }
}
