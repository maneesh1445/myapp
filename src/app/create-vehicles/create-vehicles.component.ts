import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css'],
})
export class CreateVehiclesComponent {
  constructor(private vehiclesService:VehiclesService){}

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  });
  create() {
    // console.log(this.vehicleForm.value)
    this.vehiclesService.createVehicles(this.vehicleForm.value).subscribe((result)=>{
      alert("successfully new vehicle object added")
      this.vehicleForm.reset()
    }),
    (error:any)=>{
      console.log(error)
    }
    }
}
