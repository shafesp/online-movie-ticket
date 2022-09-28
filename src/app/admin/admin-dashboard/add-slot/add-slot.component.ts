import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SlotsService } from 'src/app/services/slots.service';
import { Slots } from 'src/app/models/slots.model';
import { LocationsService } from 'src/app/services/locations.service';
import { Locations } from 'src/app/models/locations.model';

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent {
  
  form = new FormGroup({
    locationid : new FormControl('', Validators.required),
    slotid : new FormControl('', Validators.required),
    slotno : new FormControl('', Validators.required)
  })
  constructor(private slotService: SlotsService, private locationService : LocationsService) { }

  
}