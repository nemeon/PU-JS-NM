import { Component, OnInit } from '@angular/core';
import { ArmorService } from '../../core/services/armor/armor.service';
import { ArmorModule } from '../../core/models/armor.module';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {
  armor: ArmorModule[];
  constructor(private armorService: ArmorService) {
    this.armor = armorService.takeAllArmors();
  }

  ngOnInit() {
  }

}
