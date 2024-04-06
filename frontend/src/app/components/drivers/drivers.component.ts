import { Component, OnInit } from '@angular/core';
import { Driver } from '../../services/f1.models';
import { F1Service } from '../../services/f1.service';

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

  constructor(private f1Service: F1Service) { }

  ngOnInit(): void {
    this.f1Service.getDrivers().subscribe(data => {
      this.drivers = data;
    });
  }
}
